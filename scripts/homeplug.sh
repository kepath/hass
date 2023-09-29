#!/bin/bash
#
# This script is to interrogate a network to find the details of the Powerline
# HomePlug wall adapters in the network. It uses open-plc-utils tools:
# https://github.com/qca/open-plc-utils
# See https://github.com/qca/open-plc-utils/blob/master/README for
# instructions on how to install (and uninstall) the tools.
# Therefore this script is limited to the chipsets that open-plc-utils supports:
# https://github.com/qca/open-plc-utils/blob/master/plc/chipset.h
#
# The command int6k supports legacy chipsets INT6000, INT6300 and INT6400.
# The command plctool supports QCA6410, QCA7000 and QCA7420 devices.
# The command amptool supports chipsets AR7400 and QCA7450.
# NETGEAR XAVB1301-100UKS uses AR6405. NETGEAR XAVB5221-100UKS uses QCA7420.
# TP-Link TL-PA4010, TL-PA4010P and TL-PA4020P use QCA7420.
#
echo "================================================================================"
# Specify the interface on this PC connected to a HomePlug device:
#export PLC=$( ifconfig | head -1 | cut -d ":" -f1 )
export PLC="eno1"
echo
echo -n "The Ethernet interface on this PC is: "
echo $PLC
echo
echo "================================================================================"
echo
#
# Step 1. Send VS_SW_VER to local device to determine its MAC address and device type.
#
MACINT6K=$( int6k -qr | awk -F ' ' '{print $2}' )
MACPLCTOOL=$( plctool -qr | awk -F ' ' '{print $2}' )
if [[ $MACINT6K != $MACPLCTOOL ]]
then
  echo "Unable to determine MAC address of local HomePlug wall adapter."
  exit
else
  MAC=$MACINT6K
fi
echo "Details for the HomePlug wall adapter connected to this computer:"
echo
if [ $( int6k -qI $MAC | wc -l ) -lt 2 ]
then
  plctool -m $MAC
  plctool -qI $MAC
  echo
  CHIPSET=$( plctool -qr $MAC | awk -F ' ' '{print $3}' )
  echo -n "Chipset: "
  echo $CHIPSET
  CHIPSETTYPE=2
else
  int6k -m $MAC
  int6k -qI $MAC
  echo
  CHIPSET=$( int6k -qr $MAC | awk -F ' ' '{print $3}' )
  echo -n "Chipset: "
  echo $CHIPSET
  CHIPSETTYPE=1
fi
echo
echo "================================================================================"
#
# Step 2. Send VS_NW_INFO (int6k -m or plctool -m, depending on device type)
# to local MAC address to find MAC addresses of the other devices.
#
if [[ $CHIPSETTYPE == 2 ]]
then
  plctool -qm $MAC | grep MAC | cut -d " " -f3 > maclist.txt
elif [[ $CHIPSETTYPE == 1 ]]
then
  int6k -qm $MAC | grep MAC | cut -d " " -f3 > maclist.txt
else
  echo "Unable to determine chipset of the local HomePlug wall adapter."
  exit
fi
#
# Step 3. Send VS_SW_VER (int6k -r or plctool -r, depending on device type) to
# each device to find the device type of each.
#
echo -n "" > chipsetlist.txt
while read -r MAC
do
  if [ $( int6k -qI $MAC | wc -l ) -lt 2 ]
  then
    CHIPSET=$( plctool -qr $MAC | awk -F ' ' '{print $3}' )
    echo $CHIPSET >> chipsetlist.txt
  else
    CHIPSET=$( int6k -qr $MAC | awk -F ' ' '{print $3}' )
    echo $CHIPSET >> chipsetlist.txt
  fi
done < maclist.txt
#
# Step 4. Send VS_NW_INFO (int6k -m or plctool -m, depending on device type) to
# each device to determine full PHY Rate.
#
echo
echo "Details for the other HomePlug wall adapters in the network"
echo "(adapters in Power Saving Mode are not shown):"
while read -r MAC && read -r CHIPSET <&3
do
  echo
  if [ $( int6k -qI $MAC | wc -l ) -lt 2 ]
  then
    plctool -m $MAC
    plctool -qI $MAC
  else
    int6k -m $MAC
    int6k -qI $MAC
  fi
  echo
  echo -n "Chipset: "
  echo $CHIPSET
  echo
  echo "--------------------------------------------------------------------------------"
done <maclist.txt 3<chipsetlist.txt
rm maclist.txt chipsetlist.txt
echo
echo "Some of the abbreviations are listed below, but refer to the open-plc-utils"
echo "documentation for more details. (Also see http://www.homeplug.org/ for"
echo "detailed HomePlug specifications)"
echo
echo "BDA   Bridged Destination Address"
echo "CCo   Central Coordinator"
echo "DAK   Device Access Key"
echo "MDU   Multiple Dwelling Unit"
echo "NID   Network Identifier"
echo "NMK   Network Membership Key"
echo "PIB   Parameter Information Block"
echo "SNID  Short Network Identifier"
echo "STA   Station"
echo "TEI   Terminal Equipment Identifier"
echo
exit
