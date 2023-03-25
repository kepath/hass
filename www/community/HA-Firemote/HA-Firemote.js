import { LitElement, html, css } from "https://unpkg.com/lit?module";
import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';

// https://developer.amazon.com/docs/fire-tv/device-specifications-comparison-table.html
// TODO: Consider Long Press events

const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
}


const devices = {
  "amazon-fire": {

    "meta": {
      "friendlyName": "Amazon Fire",
      "supported": true,
    },

    "Smart TV": {

      "fire_tv_hisense_u6_4k_uhd_2022": {
        "supported": false,
        "friendlyName": "Hisense U6 4K UHD - Fire TV (2022)",
        "defaultEventListenerBinPath": "/dev/input/event0",
        "defaultRemoteStyle": "AF5",
        "hdmiInputs": 4,
      },
      "fire_tv_toshiba_v35": {
        "supported": true,
        "friendlyName": "Toshiba Fire TV (V35 Series - 2021)",
        "defaultEventListenerBinPath": "/dev/input/event0",
        "defaultRemoteStyle": "AF5",
        "hdmiInputs": 4,
      },
      "fire_tv_4_series": {
        "supported": true,
        "friendlyName": "Fire TV (4 Series - 2021)",
        "defaultEventListenerBinPath": "/dev/input/event0",
        "defaultRemoteStyle": "AF5",
        "hdmiInputs": 4,
      },

    },

    "Fire TV Cube": {

      "fire_tv_cube_third_gen": {
        "supported": true,
        "friendlyName": "Fire TV Cube (3rd Gen - 2022)",
        "defaultEventListenerBinPath": "/dev/input/event3",
        "defaultRemoteStyle": "AF5",
        "hdmiInputs": 1,
      },
      "fire_tv_cube_second_gen": {
        "supported": true,
        "friendlyName": "Fire TV Cube (2nd Gen - 2019)",
        "defaultEventListenerBinPath": "/dev/input/event5",
        "defaultRemoteStyle": "AF4",
        "hdmiInputs": 0,
      },
      "fire_tv_cube_first_gen": {
        "supported": true,
        "friendlyName": "Fire TV Cube (1st Gen - 2018)",
        "defaultEventListenerBinPath": "/dev/input/event5",
        "defaultRemoteStyle": "AF1",
        "hdmiInputs": 0,
      },
    },

    "Streaming Media Player": {

      "fire_tv_stick_4k_max": {
        "supported": true,
        "friendlyName": "Fire TV Stick 4K Max (1st Gen - 2020)",
        "defaultEventListenerBinPath": "/dev/input/event5",
        "defaultRemoteStyle": "AF4",
        "hdmiInputs": 0,
      },
      "fire_tv_3rd_gen": {
        "supported": true,
        "friendlyName": "Fire TV Stick (3rd Gen - 2020)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF3",
        "hdmiInputs": 0,
      },
      "fire_tv_stick_lite": {
        "supported": true,
        "friendlyName": "Fire TV Stick Lite (1st Gen - 2020)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF2",
        "hdmiInputs": 0,
      },
      "fire_stick_4k": {
        "supported": true,
        "friendlyName": "Fire TV Stick 4K (1st Gen - 2018)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF3",
        "hdmiInputs": 0,
      },
      "fire_stick_second_gen": {
        "supported": true,
        "friendlyName": "Fire TV Stick (2nd gen - 2016 - 2019)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF3",
        "hdmiInputs": 0,
      },
      "fire_stick_basic": {
        "supported": true,
        "friendlyName": "Fire TV Stick (Basic Edition - 2017)",
        "defaultEventListenerBinPath": "/dev/input/event4",
        "defaultRemoteStyle": "AF1",
        "hdmiInputs": 0,
      },
      "fire_stick_second_gen_2015": {
        "supported": false,
        "friendlyName": "Fire TV Stick (2nd Gen - 2015)",
        "defaultEventListenerBinPath": "",
        "defaultRemoteStyle": "",
        "hdmiInputs": 0,
      },
      "fire_stick_first_gen": {
        "supported": true,
        "friendlyName": "Fire TV Stick (1st gen - 2014)",
        "defaultEventListenerBinPath": "/dev/input/event1",
        "defaultRemoteStyle": "AF1",
        "hdmiInputs": 0,
      },
    },
  },

  "nvidia-shield": {

    "meta": {
      "friendlyName": "NVIDIA Shield",
      "supported": true,
    },

    "noCategory": {

      "shield-tv-2017": {
        "supported": true,
        "friendlyName": "SHIELD TV (2015 or 2017)",
        "defaultRemoteStyle" : "NS1",
      },
      "shield-tv-pro-2017": {
        "supported": true,
        "friendlyName": "SHIELD TV Pro (2015 or 2017)",
        "defaultRemoteStyle" : "NS1",
      },
      "shield-tv-2019": {
        "supported": true,
        "friendlyName": "SHIELD TV (2019)",
        "defaultRemoteStyle" : "NS2",
      },
      "shield-tv-pro-2019": {
        "supported": true,
        "friendlyName": "SHIELD TV Pro (2019)",
        "defaultRemoteStyle" : "NS2",
      },

    },
  },

}
const devicemap = new Map(Object.entries(devices));

const fastappchoices = {
  "amc-plus": {
      "button": "amc+",
      "friendlyName": "AMC+",
      "className": "amcPlusButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.amcplus.amcfiretv",
          "androidName": "com.amcplus.amcfiretv",
          "adbLaunchCommand": "adb shell am start -n com.amcplus.amcfiretv/com.amcplus.tv.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.amcplus.amcandroidtv",
          "androidName": "com.amcplus.amcandroidtv",
          "adbLaunchCommand": "adb shell am start -n com.amcplus.amcandroidtv/com.amcplus.tv.MainActivity",
      }, 
  },


  "app-opener": {
      "button": "App Opener",
      "friendlyName": "App Opener",
      "appName": "devsimon.appopener",
      "className": "appOpenerButton",
      "androidName": "devsimon.appopener",
      "adbLaunchCommand": "adb shell am start -n devsimon.appopener/devsimon.appopener.MainActivity",
      "deviceFamily": ["amazon-fire"], },


  "apple-tv": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.046 17.091"><path d="M9.436 2.742A3.857 3.857 0 0 0 10.316 0a3.769 3.769 0 0 0-2.51 1.311 3.622 3.622 0 0 0-.9 2.631 3.138 3.138 0 0 0 2.53-1.2m.82 1.381c-1.4-.081-2.58.8-3.25.8s-1.69-.756-2.79-.736a4.117 4.117 0 0 0-3.5 2.147c-1.5 2.6-.4 6.473 1.06 8.59.71 1.006 1.56 2.205 2.69 2.166s1.48-.7 2.77-.7 1.67.7 2.79.675 1.9-1.008 2.6-2.1a9.317 9.317 0 0 0 1.17-2.42 3.814 3.814 0 0 1-2.27-3.468 3.9 3.9 0 0 1 1.83-3.256 3.991 3.991 0 0 0-3.1-1.7m8.93-2.016V4.96h2.28v1.885h-2.28V13.6c0 1.008.45 1.522 1.45 1.522a7.482 7.482 0 0 0 .82-.06v1.9a7.823 7.823 0 0 1-1.35.1c-2.36 0-3.27-.917-3.27-3.216V6.89h-1.79V5h1.74V2.107zm10.25 14.853h-2.5L22.736 5h2.49l2.95 9.608h.06L31.186 5h2.44zm10.98 0h-2.16v-4.9h-4.64V9.9h4.63V5h2.16v4.9h4.64v2.158h-4.63z" style="fill:#fff"/></svg>',
      "friendlyName": 'Apple TV',
      "className": "appleTvButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "Apple TV+ (Fire TV)",
          "androidName": "com.apple.atve.amazon.appletv",
          "adbLaunchCommand": "adb shell am start -n com.apple.atve.amazon.appletv/.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.apple.atve.androidtv.appletv",
          "androidName": "com.apple.atve.androidtv.appletv",
          "adbLaunchCommand": "adb shell am start -n com.apple.atve.androidtv.appletv/.MainActivity",
      }, 
  },


  "bbc-iplayer": {
      "button": "BBC iPlayer",
      "friendlyName": 'BBC iPlayer (UK)',
      "appName": "uk.co.bbc.iplayer",
      "className": "bbciplayerButton",
      "androidName": "uk.co.bbc.iplayer",
      "deviceFamily": ["amazon-fire"],},


  "bell-fibe-tv": {
      "button": "Bell Fibe TV",
      "friendlyName": 'Bell Fibe TV (Canada)',
      "appName": "ca.bell.tv.firetv",
      "className": "bellFibeTVButton",
      "androidName": "ca.bell.tv.firetv",
      "adbLaunchCommand": "adb shell am start -n ca.bell.tv.firetv/ca.bell.fiberemote.tv.MainTvActivity",
      "deviceFamily": ["amazon-fire"],},


  "cnn": {
      "button": "CNN",
      "friendlyName": 'CNN',
      "className": "cnnButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.cnn.mobile.fire.tv",
          "androidName": "com.cnn.mobile.fire.tv",
          "adbLaunchCommand": "adb shell am start -n com.cnn.mobile.fire.tv/com.cnnplusrn.MainActivity",
      },
      "nvidia-shield": {
          "appName": "com.cnn.mobile.android.tv",
          "androidName": "com.cnn.mobile.android.tv",
          "adbLaunchCommand": "adb shell am start -n com.cnn.mobile.android.tv/com.cnnplusrn.MainActivity",
      }, 
   },


  "crave-tv": {
      "button": "crave",
      "friendlyName": 'Crave TV (Canada)',
      "appName": "ca.bellmedia.cravetv",
      "className": "craveTVButton",
      "androidName": "ca.bellmedia.cravetv",
      "adbLaunchCommand": "adb shell am start -n ca.bellmedia.cravetv/axis.androidtv.sdk.app.MainActivity",
      "deviceFamily": ["amazon-fire"],},


  "cyberghost": {
      "button": "CyberGhost",
      "friendlyName": 'CyberGhost VPN',
      "className": "cyberghostButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.cyberghostvpn.amazon",
          "androidName": "com.cyberghostvpn.amazon",
          "adbLaunchCommand": "adb shell am start -n com.cyberghostvpn.amazon/de.mobileconcepts.cyberghost.view.app.AppActivity",
      },
      "nvidia-shield": {
          "appName": "de.mobileconcepts.cyberghost",
          "androidName": "de.mobileconcepts.cyberghost",
          "adbLaunchCommand": "adb shell am start -n de.mobileconcepts.cyberghost/.view.app.AppActivity",
      }, 
   },


  "directv-stream": {
      "button": "DIRECTV",
      "friendlyName": "DIRECTV stream",
      "appName": "com.att.tv",
      "className": "direcTVStreamButton",
      "androidName": "com.att.tv",
      "adbLaunchCommand": "adb shell am start -n com.att.tv/tv.youi.clientapp.AppActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "disney-plus": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 436 151" width="436" height="151" xml:space="preserve"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:nonzero;opacity:1" transform="matrix(.42 0 0 .42 0 -87.004)" d="M735.8 365.7c-14.4 3.3-52.3 5.2-52.3 5.2l-4.8 15s18.9-1.6 32.7-.2c0 0 4.5-.5 5 5.1.2 5.2-.4 10.8-.4 10.8s-.3 3.4-5.1 4.2c-5.2.9-40.8 2.2-40.8 2.2l-5.8 19.5s-2.1 4.5 2.7 3.2c4.5-1.2 41.8-8.2 46.7-7.2 5.2 1.3 11 8.2 9.3 14.6-2 7.8-39.2 31.6-61.9 29.9 0 0-11.9.8-22-15.3-9.4-15.3 3.6-44.4 3.6-44.4s-5.9-13.6-1.6-18.1c0 0 2.6-2.3 10-2.9l9.1-18.9s-10.4.7-16.6-6.9c-5.8-7.3-6.2-10.6-1.8-12.6 4.7-2.3 48-10.2 77.8-9.2 0 0 10.4-1 19.3 17-.1 0 4.3 7.3-3.1 9zm-112.1 72.6c-3.8 9-13.9 18.6-26.4 12.6-12.4-6-32.1-46.3-32.1-46.3s-7.5-15-8.9-14.7c0 0-1.6-2.9-2.6 13.5s.2 48.3-6.3 53.3c-6.2 5-13.7 3-17.6-2.9-3.5-5.8-5-19.6-3.1-43.8 2.3-24.2 7.9-50 15.1-58.1 7.2-8 13-2.2 15.2-.1 0 0 9.6 8.7 25.5 34.3l2.8 4.7s14.4 24.2 15.9 24.1c0 0 1.2 1.1 2.2.3 1.5-.4.9-8.2.9-8.2s-3-26.3-16.1-70.9c0 0-2-5.6-.6-10.8 1.3-5.3 6.6-2.8 6.6-2.8s20.4 10.2 30.2 43.4c9.7 33.5 3.1 63.4-.7 72.4zM523.5 353c-1.7 3.4-2.7 8.3-11.3 9.6 0 0-82.3 5.6-86.2 11.4 0 0-2.9 3.4 1.6 4.4 4.5.9 23.1 3.4 32.1 3.9 9.6.1 42 .4 53.6 14.9 0 0 6.9 6.9 6.6 22.5-.3 16-3.1 21.6-9.3 27.4-6.5 5.4-62.3 30.4-98.3-8 0 0-16.6-18.5 5.7-32.5 0 0 16.1-9.7 57 1.7 0 0 12.4 4.5 11.8 9-.7 4.8-10.2 9.9-24 9.6-13.4-.4-23.2-6.8-21.3-5.8 1.8.7-14.4-7.8-19.4-2-5 5.3-3.8 8.6 1.1 11.9 12.5 7.1 60.8 4.6 75.2-11.4 0 0 5.7-6.5-3-11.8-8.7-5-33.6-8-43.3-8.5-9.3-.5-43.9.1-48.9-9.1 0 0-5-6.2.5-23.8 5.8-18.4 46.1-25.5 63.5-27.1 0 0 47.9-1.7 56.7 8.1-.1 0 1.1 2.3-.4 5.6zm-136 107.9c-5.8 4.3-18.1 2.4-21.6-2.4-3.5-4.3-4.7-21.4-4-48.2.7-27.1 1.3-60.7 7.1-66 6.2-5.4 10-.7 12.4 3 2.6 3.6 5.7 7.6 6.4 16.1.6 8.5 2.6 53.1 2.6 53.1s2.6 40.2-2.9 44.4zM400 317.1c-16.9 5.6-28.5 3.7-38.3-.5-4.3 7.5-6.8 9.8-10.1 10.3-4.8.5-9.1-7.2-9.9-9.7-.8-1.9-3.1-5.1-.3-12.7-9.6-8.6-10.3-20.2-8.7-28 2.4-9 18.6-43.2 67.9-47.2 0 0 24.1-1.8 28.2 11.1h.7s23.4.1 22.9 20.9c-.3 20.9-26 46.9-52.4 55.8zm-46-46.3c-5 8-5.2 12.8-2.9 16.1 5.7-8.7 16.1-22.4 31.4-32.8-11.8 1-21.7 6.1-28.5 16.7zm68.1-13.4c-15.5 2.3-39.5 23.1-50.9 40.1 17.5 3.2 48.4 2 62.1-25.9-.1 0 6.5-17.3-11.2-14.2zm420.8 161.1c-9.3 16.2-35.4 50-70.2 42.1-11.5 27.9-21.1 56-26.6 98.2 0 0-1.2 8.2-8 5.3-6.7-2.4-17.9-13.6-20.1-29.1-2.4-20.4 6.7-54.9 25.2-94.4-5.4-8.8-9.1-21.4-5.9-39.3 0 0 4.7-33.2 38-63.2 0 0 4-3.5 6.3-2.4 2.6 1.1 1.4 11.9-.7 17.1-2.1 5.2-17 31-17 31s-9.3 17.4-6.7 31.1c17.5-26.9 57.3-81.2 82-64.1 8.3 5.9 12.1 18.8 12.1 32.7-.1 12.3-3 25.3-8.4 35zm-7.2-42.6s-1.4-10.7-11.8 1.1c-9 9.9-25.2 28.6-38.3 53.9 13.7-1.5 26.9-9 30.9-12.8 6.5-5.8 21.6-21.4 19.2-42.2zm-485.5 13.6c-1.9 24.2-11.2 64.9-77.1 85-43.5 13.1-84.6 6.8-107 1.1-.5 8.9-1.5 12.7-2.9 14.2-1.9 1.9-16.1 10.1-23.9-1.5-3.5-5.5-5.3-15.5-6.3-24.4-50.4-23.2-73.6-56.6-74.5-58.1-1.1-1.1-12.6-13.1-1.1-27.8 10.8-13.3 46.1-26.6 77.9-32 1.1-27.2 4.3-47.7 8.1-57.1 4.6-10.9 10.4-1.1 15.4 6.3 4.2 5.5 6.7 29.2 6.9 48.1 20.8-1 33.1.5 56.3 4.7 30.2 5.5 50.4 20.9 48.6 38.4-1.3 17.2-17.1 24.3-23.1 24.8-6.3.5-16.1-4-16.1-4-6.7-3.2-.5-6 7.6-9.5 8.8-4.3 6.8-8.7 6.8-8.7-3.3-9.6-42.5-16.3-81.5-16.3-.2 21.5.9 57.2 1.4 78 27.3 5.2 47.7 4.2 47.7 4.2s99.6-2.8 102.6-66.4c3.1-63.7-99.3-124.8-175-144.2-75.6-19.8-118.4-6-122.1-4.1-4 2-.3 2.6-.3 2.6s4.1.6 11.2 3c7.5 2.4 1.7 6.3 1.7 6.3-12.9 4.1-27.4 1.5-30.2-4.4-2.8-5.9 1.9-11.2 7.3-18.8 5.4-8 11.3-7.7 11.3-7.7 93.5-32.4 207.4 26.2 207.4 26.2C334 301.5 352.2 364.9 350.2 389.5zM68 386.2c-10.6 5.2-3.3 12.7-3.3 12.7 19.9 21.4 44.4 34.8 67.7 43.1 2.7-36.9 2.3-49.9 2.6-68.5-36.4 2.5-57.4 8.3-67 12.7z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#fff;fill-rule:nonzero;opacity:1" transform="matrix(.42 0 0 .42 0 -87)" d="M1040.9 378.6v13.2c0 2.9-2.3 5.2-5.2 5.2h-62.9c0 3.3.1 6.2.1 8.9 0 19.5-.8 35.4-2.7 53.3-.3 2.7-2.5 4.7-5.1 4.7h-13.6c-1.4 0-2.7-.6-3.6-1.6-.9-1-1.4-2.4-1.2-3.8 1.9-17.8 2.8-33.5 2.8-52.6 0-2.8 0-5.7-.1-8.9h-62.2c-2.9 0-5.2-2.3-5.2-5.2v-13.2c0-2.9 2.3-5.2 5.2-5.2h61.3c-1.3-21.5-3.9-42.2-8.1-63.2-.2-1.3.1-2.6.9-3.6s2-1.6 3.3-1.6h14.7c2.3 0 4.2 1.6 4.7 3.9 4.1 21.7 6.7 42.8 8 64.5h63.7c2.8 0 5.2 2.4 5.2 5.2z"/></g></svg>',
      "friendlyName": "Disney +",
      "appName": "Disney+",
      "className": "disneyPlusButton",
      "androidName": "com.disney.disneyplus",
      "adbLaunchCommand": "adb shell am start -n com.disney.disneyplus/com.bamtechmedia.dominguez.main.MainActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "emby": {
      "button": "emby",
      "friendlyName": "Emby",
      "appName": "tv.emby.embyatv",
      "className": "embyButton",
      "androidName": "tv.emby.embyatv",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "espn": {
      "button": "ESPN",
      "friendlyName": "ESPN",
      "className": "espnButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.espn.gtv",
          "androidName": "com.espn.gtv",
          "adbLaunchCommand": "adb shell am start -n com.espn.gtv/com.espn.startup.presentation.StartupActivity",
      },
      "nvidia-shield": {
          "appName": "com.espn.score_center",
          "androidName": "com.espn.score_center",
          "adbLaunchCommand": "adb shell am start -n com.espn.score_center/com.espn.startup.presentation.StartupActivity",
      }, 
   },


  "freevee": {
      "button": "freevee",
      "friendlyName": "freevee",
      "className": "freeveeButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "IMDb TV",
          "androidName": "com.amazon.imdb.tv.android.app",
          "adbLaunchCommand": "adb shell am start -n com.amazon.imdb.tv.android.app/com.amazon.imdb.tv.android.app.MainActivity",
      },
      "nvidia-shield": {
          "appName": "Freevee",
          "androidName": "com.imdbtv.livingroom",
          "adbLaunchCommand": "adb shell am start -n com.imdbtv.livingroom/com.amazon.ignition.MainActivity",
      },
   },


  "google-play-store": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd" baseProfile="basic"><linearGradient id="jFdG-76_seIEvf-hbjSsaa" x1="1688.489" x2="1685.469" y1="-883.003" y2="-881.443" gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#047ed6"/><stop offset="1" stop-color="#50e6ff"/></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsaa)" fill-rule="evenodd" d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z" clip-rule="evenodd"/><linearGradient id="jFdG-76_seIEvf-hbjSsab" x1="1645.286" x2="1642.929" y1="-897.055" y2="-897.055" gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffda1c"/><stop offset="1" stop-color="#feb705"/></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsab)" fill-rule="evenodd" d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z" clip-rule="evenodd"/><linearGradient id="jFdG-76_seIEvf-hbjSsac" x1="1722.978" x2="1720.622" y1="-889.412" y2="-886.355" gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d9414f"/><stop offset="1" stop-color="#8c193f"/></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsac)" fill-rule="evenodd" d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561" clip-rule="evenodd"/><linearGradient id="jFdG-76_seIEvf-hbjSsad" x1="1721.163" x2="1722.215" y1="-891.39" y2="-890.024" gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33c481"/><stop offset="1" stop-color="#61e3a7"/></linearGradient><path fill="url(#jFdG-76_seIEvf-hbjSsad)" fill-rule="evenodd" d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z" clip-rule="evenodd"/></svg> Play Store',
      "friendlyName": "Google Play Store",
      "appName": "Play Store",
      "className": "googlePlayStoreButton",
      "androidName": "com.android.vending",
      "deviceFamily": ["nvidia-shield"], },


  "hbo-max": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="2600 -200 1000 173.267" xml:space="preserve" width="1000" height="173.267"><path d="M2723.178-27.46h-46.09v-65.725h-29.817v65.725H2600V-197h47.18v63.27h29.817V-197h46.09v169.54zm211.265.727c47.18 0 85.724-39.272 85.724-87.088 0-48.544-38.544-86.088-85.724-86.088-47.817 0-71.998 34.726-77.816 48.907 0-20.999-20.999-46.089-45.361-46.089h-78.725v169.63h73.27c29.817 0 50.816-25.453 50.816-47.816 6.637 13.818 30.09 48.544 77.816 48.544zm-134.45-68.907c6.818 0 12.272 6.636 12.272 14.181 0 7.91-5.454 14.545-12.272 14.545h-23.454V-95.64zm0-63.634c6.818 0 12.272 6.636 12.272 14.181 0 7.545-5.454 14.182-12.272 14.182h-23.454v-28.363zm31 45.453c5.453-.364 14.362-6.636 17.726-10.363-1.273 4.545-1.273 18.908 0 23.453-3.727-5.545-12.273-12.09-17.727-13.09zm60.451 0c0-23.908 19.454-43.18 43.363-43.09 23.999.182 43.09 19.727 42.816 43.726-.363 23.636-19.454 42.635-43.089 42.635-23.817 0-43.09-19.272-43.09-43.271zm43 33.999c18.362 0 33.816-15.09 33.816-34 0-18.908-15.454-33.816-33.817-33.816-18.908 0-33.999 14.908-33.999 33.817 0 18.908 15.09 33.999 34 33.999z" style="stroke-width:.90906; fill: #fff"/><path d="M3333.2-130.7c-1-45.2-33-69.1-72.2-69.1-21.5 0-40.9 7.2-54.1 21.2-13.2-14-32.6-21.2-54.1-21.2-39.2 0-71.2 24-72.2 69.2V-27.2c0 9.5 7.7 17.1 17.1 17.1h16.2c1.6 0 2.9-1.3 2.9-2.9v-117.4c.7-22.3 16.5-34.1 36-34.1s35.3 11.8 36 34.1v103.1c0 9.5 7.7 17.1 17.1 17.1h16.2c1.6 0 2.9-1.3 2.9-2.9v-117.4c.7-22.3 16.5-34.1 36-34.1s35.3 11.8 36 34.1v103.1c0 9.5 7.7 17.1 17.1 17.1h16.2c1.6 0 2.9-1.3 2.9-2.9v-117.4c.1.1 0 0 0-.1zm364.7-66.2h-27.5c-7.6 0-14.7 3.8-19 10.1l-30.4 45c-4 5.9-12.6 5.9-16.6 0l-30.4-45c-4.2-6.3-11.4-10.1-19-10.1h-27.5c-1.7 0-2.7 1.9-1.8 3.3l54.2 80.4c3.9 5.8 3.9 13.4 0 19.2l-54.2 80.4c-1 1.4.1 3.3 1.8 3.3h27.5c7.6 0 14.7-3.8 19-10.1l30.4-45c4-5.9 12.6-5.9 16.6 0l30.4 45c4.2 6.3 11.4 10.1 19 10.1h27.5c1.7 0 2.7-1.9 1.8-3.3l-54.3-80.3c-3.9-5.8-3.9-13.4 0-19.2l54.2-80.4c1-1.4 0-3.4-1.7-3.4zm-184.6 0h-16.2c-8.2 0-15.1 5.8-16.8 13.5-14.4-11-32.5-16.6-52-16.6-47.4 0-85.9 33-85.9 95.3s38.4 95.3 85.9 95.3c19.4 0 37.3-5.5 51.7-16.3.8 8.7 8.1 15.6 17.1 15.6h16.2c1.6 0 2.9-1.3 2.9-2.9v-181c-.1-1.6-1.3-2.9-2.9-2.9zm-85 152.1c-28.3 0-51.3-20.7-51.3-59.8 0-39.1 23-59.8 51.3-59.8 28.3 0 51.3 20.7 51.3 59.8 0 39.1-23 59.8-51.3 59.8z" style="fill: #fff" transform="matrix(.90906 0 0 .90906 236.445 -18.188)"/></svg>',
      "friendlyName": "HBO Max",
      "appName": "com.hbo.hbonow",
      "className": "hboMaxButton",
      "androidName": "com.hbo.hbonow",
      "adbLaunchCommand": "adb shell am start -n com.hbo.hbonow/com.hbo.max.HboMaxActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "hulu": { 
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1000 329.813" width="1000" height="329.813"><path d="M-241.012 192.768c16.556 13.46 24.846 34.472 24.846 63.043V399.29h-78.882V266.37c0-5.794-2.174-10.869-6.52-15.217-4.35-4.349-9.426-6.52-15.219-6.52h-45.963c-5.803 0-10.772 2.172-14.906 6.52-4.144 4.348-6.212 9.423-6.212 15.217v132.92h-79.504V69.475h79.503V176.93c1.243-.408 4.134-1.242 8.697-2.485 4.551-1.24 10.557-1.862 18.012-1.862h50.931c26.912 0 48.652 6.734 65.217 20.186zM9.3 172.581h79.503v139.13c0 26.087-7.144 47.205-21.428 63.354C53.088 391.215 33.726 399.29 9.3 399.29h-78.26c-27.33 0-49.176-7.55-65.528-22.67-16.364-15.11-24.536-36.743-24.536-64.907v-139.13h79.503v132.92c0 5.803 2.07 10.771 6.212 14.906 4.134 4.144 9.104 6.211 14.907 6.211h45.964c5.793 0 10.868-2.067 15.217-6.21 4.35-4.136 6.521-9.105 6.521-14.908zM149.05 69.476h79.503V399.29H149.05zm387.578 103.105v139.13c0 26.087-7.144 47.205-21.429 63.354-14.285 16.15-33.646 24.224-58.074 24.224h-77.64c-27.746 0-49.797-7.55-66.149-22.67-16.363-15.11-24.534-36.743-24.534-64.907v-139.13h79.503v132.92c0 5.803 2.066 10.771 6.211 14.906 4.135 4.144 9.104 6.211 14.906 6.211h46.584c5.795 0 10.764-2.067 14.907-6.21 4.134-4.136 6.212-9.105 6.212-14.908v-132.92z" style="fill:#000;fill-opacity:1" transform="translate(463.372 -69.476)"/></svg>',
      "friendlyName": "Hulu",
      "className": "huluButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "Hulu",
          "androidName": "com.hulu.plus",
      },
      "nvidia-shield": {
          "appName": "com.hulu.livingroomplus",
          "androidName": "com.hulu.livingroomplus",
          "adbLaunchCommand": "adb shell am start -n com.hulu.livingroomplus/.WKFactivity",
      }, 
   },


  "ipvanish": {
      "button": "IP VANISH",
      "friendlyName": "IPVanish VPN",
      "className": "ipVanishButton",
      "appName": "com.ixolit.ipvanish",
      "androidName": "com.ixolit.ipvanish",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],},


  "jellyfin": {
      "button": "Jellyfin",
      "friendlyName": "Jellyfin",
      "appName": "Jellyfin",
      "androidName": "org.jellyfin.androidtv",
      "className": "jellyfinButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "nvidia-shield": {
          "adbLaunchCommand": "adb shell am start -n org.jellyfin.androidtv/org.jellyfin.androidtv.ui.startup.StartupActivity",
      }, 
   },


  "kodi": {
      "button": "KODI",
      "friendlyName": "Kodi",
      "appName": "Kodi",
      "className": "kodiButton",
      "androidName": "org.xbmc.kodi",
      "adbLaunchCommand": "adb shell am start -n org.xbmc.kodi/org.xbmc.kodi.Main",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "myCanal": {
      "button": "my CANAL",
      "friendlyName": 'my CANAL',
      "appName": "com.canal.android.canal",
      "className": "myCanalButton",
      "androidName": "com.canal.android.canal",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "netflix": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 82" width="300" height="81.387"><path d="M-203.1 771.414c1.643.159 3.283.33 4.92.508l3.615-8.927 3.437 9.75c1.763.22 3.525.452 5.282.694l-6.024-17.096 6.027-14.88h-5.104l-.053.072-3.255 8.04-2.857-8.112h-5.039l5.203 14.762-6.152 15.19zM-206.911 771.065v-29.601h-5.038v29.186c1.681.129 3.361.269 5.038.415M-244.749 769.409c1.36 0 2.718.01 4.074.021v-10.875h6.051v-4.631h-6.05v-7.825h6.968v-4.636h-12.026v27.95c.327 0 .655-.004.983-.004M-260.388 769.692c1.677-.06 3.357-.11 5.04-.151v-23.442h4.707v-4.636h-14.456v4.636h4.709v23.593zM-298.91 772.814v-17.636l5.963 16.923c1.834-.206 3.671-.4 5.513-.582v-30.055h-4.833v18.267l-6.436-18.267h-5.04v31.984h.03c1.597-.222 3.199-.432 4.802-.634M-269.953 746.099v-4.636h-12.027v29.554c3.99-.345 7.996-.634 12.017-.869v-4.64c-2.325.135-4.645.291-6.96.464v-7.415h6.051v-4.634h-6.051v-7.824h6.97zM-223.723 765.286v-23.823h-5.058v28.246c4.023.147 8.032.354 12.027.612V765.68c-2.319-.15-4.641-.28-6.969-.392" style="fill:#b81d24;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="matrix(2.54454 0 0 2.54454 772.886 -1886.68)"/></svg>',
      "friendlyName": "Netflix",
      "appName": "Netflix",
      "androidName": "com.netflix.ninja",
      "adbLaunchCommand": "adb shell am start -n com.netflix.ninja/.MainActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "className": "netflixButton",
      },
      "nvidia-shield": {
          "className": "netflixButtonShield",
      }, 
   },


  "news": {
      "button": "news",
      "friendlyName": "News by Fire TV",
      "appName": "com.amazon.hedwig",
      "className": "newsButton",
      "androidName": "com.amazon.hedwig",
      "deviceFamily": ["amazon-fire"],},


  "nordvpn": {
      "button": "NordVPN",
      "friendlyName": "Nord VPN",
      "appName": "com.nordvpn.android",
      "className": "nordVPNButton",
      "androidName": "com.nordvpn.android",
      "adbLaunchCommand": "adb shell am start -n com.nordvpn.android/.MainActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "npo": {
      "button": "NPO",
      "friendlyName": "NPO (NL)",
      "appName": "NPO",
      "className": "npoButton",
      "androidName": "nl.uitzendinggemist",
      "deviceFamily": ["nvidia-shield"], },


  "oqee-by-free": {
      "button": "OQEE",
      "friendlyName": "OQEE by Free (FR)",
      "className": "oqeeButton",
      "appName": "net.oqee.androidtv.store",
      "androidName": "net.oqee.androidtv.store",
      "adbLaunchCommand": "adb shell am start -n net.oqee.androidtv.store/net.oqee.androidtv.MainActivity",
      "deviceFamily": ["amazon-fire"], },


  "pandora": {
      "button": "pandora",
      "friendlyName": "Pandora",
      "className": "pandoraButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.pandora.android.gtv",
          "androidName": "com.pandora.android.gtv",
      },
      "nvidia-shield": {
          "appName": "com.pandora.android.atv",
          "androidName": "com.pandora.android.atv",
          "adbLaunchCommand": "adb shell am start -n com.pandora.android.atv/com.pandora.android.MainActivity",
      }, 
   },


  "paramount-plus": {
      "button": "Paramount+",
      "friendlyName": 'Paramount+',
      "appName": "com.cbs.ott",
      "androidName": "com.cbs.ott",
      "className": "paramountPlusButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "paramount-plus-de": {
      "button": "Paramount+",
      "friendlyName": 'Paramount+ (DE)',
      "appName": "com.cbs.ca",
      "className": "paramountPlusButton",
      "androidName": "com.cbs.ca",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "plex": {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="plex-logo" x="0" y="0" xml:space="preserve" viewbox="0 0 1000 460.897" width="1000" height="460.897"><style type="text/css" id="style2">.st0{fill:#fff}</style><path class="st0" d="M164.19 82.432c-39.866 0-65.541 11.487-87.163 38.514v-29.73H0v366.216s1.351.676 5.405 1.352c5.406 1.351 33.784 7.432 54.73-10.135 18.243-15.54 22.297-33.784 22.297-54.054v-52.703c22.298 23.649 47.298 33.784 82.433 33.784 75.676 0 133.784-61.487 133.784-143.244 0-88.513-56.081-150-134.46-150zm-14.866 223.65c-42.567 0-76.351-35.136-76.351-77.704 0-41.892 39.865-75.675 76.351-75.675 43.244 0 76.352 33.108 76.352 76.351s-33.784 77.027-76.352 77.027z" id="path4" style="fill:#000;stroke-width:6.75675678"/><path class="st0" d="M408.108 223.649c0 31.756 3.378 70.27 34.46 112.162.675.675 2.027 2.702 2.027 2.702C431.757 360.135 416.216 375 395.27 375c-16.216 0-32.432-8.784-45.946-23.649-14.189-16.216-20.946-37.162-20.946-59.46V0h79.054z" id="path6" style="fill:#000;stroke-width:6.75675678"/><path id="polygon8" style="fill:#ebaf00" transform="scale(6.75676)" d="m117.9 33.9-13.8-20.4h14.2L132 33.9l-13.7 20.3h-14.2z"/><path class="st0" id="polygon10" style="fill:#000" transform="scale(6.75676)" d="M135.7 31.6 148 13.5h-14.2l-5.1 7.5z"/><path class="st0" d="m869.595 316.216 16.216 22.298C901.35 362.838 921.62 375 945.27 375c25-.676 42.567-22.297 49.324-30.405 0 0-12.163-10.811-27.703-29.054-20.946-24.325-48.649-68.92-49.324-70.946z" id="path12" style="fill:#000;stroke-width:6.75675678"/><path style="fill:#000;stroke-width:6.75675678" id="path16" d="M632.432 287.162c-16.216 14.865-27.027 22.973-49.324 22.973-39.865 0-62.838-28.378-66.216-59.46h211.486c1.352-4.053 2.027-9.459 2.027-18.243 0-85.81-62.837-150-145.27-150-78.378 0-142.567 65.541-142.567 147.298 0 81.08 64.189 145.27 144.594 145.27 56.081 0 104.73-31.757 131.081-87.838zm-46.621-139.865c35.135 0 61.486 22.973 67.567 53.379H519.595c6.756-31.757 31.756-53.379 66.216-53.379z" class="st0"/></svg>',
      "friendlyName": "plex",
      "appName": "Plex",
      "className": "plexButton",
      "androidName": "com.plexapp.android",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "prime-video" : {
      "button": '<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 801 247" width="800.3" height="246.3" style="enable-background:new 0 0 800.3 246.3" xml:space="preserve"><path style="fill:#fff" d="M396.5 246.3v-.4c.4-.5 1.1-.8 1.7-.7 2.9-.1 5.7-.1 8.6 0 .6 0 1.3.2 1.7.7v.4h-12z"/><path style="fill:#fff" d="M408.5 245.9c-4-.1-8-.1-12 0-5.5-.3-11-.5-16.5-.9-14.6-1.1-29.1-3.3-43.3-6.6-49.1-11.4-92.2-34.3-129.8-67.6-3.5-3.1-6.8-6.3-10.2-9.5-.8-.7-1.5-1.7-1.9-2.7-.6-1.4-.3-2.9.7-4s2.6-1.5 4-.9c.9.4 1.8.8 2.6 1.3 35.9 22.2 75.1 38.4 116.2 48 13.8 3.2 27.7 5.7 41.7 7.5 20.1 2.5 40.4 3.4 60.6 2.7 10.9-.3 21.7-1.3 32.5-2.7 25.2-3.2 50.1-8.9 74.2-16.9 12.7-4.2 25.1-9 37.2-14.6 1.8-1 4-1.3 6-.8 3.3.8 5.3 4.2 4.5 7.5-.1.4-.3.9-.5 1.3-.8 1.5-1.9 2.8-3.3 3.8-11.5 9-23.9 16.9-37 23.5-24.7 12.5-51.1 21.4-78.3 26.5-15.7 2.8-31.5 4.5-47.4 5.1zM260.4 43.2c2.5-1.5 5.1-3.1 7.8-4.5 7-3.6 14.8-5.4 22.7-5 5.7.3 10.9 1.9 14.9 6.1 3.8 3.9 5.2 8.7 5.6 13.9.1 1.1.1 2.2.1 3.4v51.8c0 4.5-.6 5.1-5.1 5.1h-12.2c-.8 0-1.6 0-2.4-.1-1.2-.1-2.2-1.1-2.4-2.3-.2-1.1-.2-2.2-.2-3.3V62c.1-1.9-.1-3.7-.6-5.5-.8-3.1-3.6-5.3-6.8-5.5-5.9-.4-11.8.8-17.2 3.3-.8.2-1.3 1-1.2 1.8v52.6c0 1 0 1.9-.2 2.9 0 1.4-1.1 2.4-2.5 2.4-1.5.1-3 .1-4.6.1h-10.6c-3.7 0-4.5-.9-4.5-4.6V62.2c0-1.7-.1-3.5-.5-5.2-.7-3.4-3.6-5.8-7-6-6-.4-12.1.8-17.5 3.4-.8.2-1.3 1.1-1.1 1.9v53.3c0 3.7-.8 4.5-4.5 4.5H197c-3.5 0-4.4-1-4.4-4.4V40.3c0-.8.1-1.6.3-2.4.4-1.2 1.6-1.9 2.8-1.9h12.5c1.8 0 2.9 1.1 3.5 2.8.5 1.4.8 2.7 1.3 4.2 1 0 1.6-.7 2.3-1.1 5.5-3.4 11.3-6.3 17.8-7.5 5-1 10-1 15 0 4.7 1 8.9 3.8 11.6 7.8.2.3.4.5.6.7-.1.1 0 .1.1.3z"/><path style="fill:#fff" d="M467.7 93c.6-2 1.2-3.9 1.8-5.9 4.6-15.5 9.2-30.9 13.8-46.4l.6-1.8c.5-1.8 2.2-2.9 4-2.9h15.2c3.8 0 4.6 1.1 3.3 4.7l-6 15.9c-6.7 17.4-13.4 34.9-20.1 52.3-.2.6-.5 1.2-.7 1.8-.7 2.1-2.8 3.5-5 3.3-4.4-.1-8.8-.1-13.2 0-3.1.1-4.9-1.3-6-4.1-2.5-6.6-5.1-13.3-7.6-19.9-6-15.7-12.1-31.4-18.1-47.2-.6-1.2-1-2.6-1.3-3.9-.3-2 .4-3 2.4-3 5.7-.1 11.4 0 17 0 2.4 0 3.5 1.6 4.1 3.7 1.1 3.8 2.2 7.7 3.4 11.5 4.1 13.9 8.1 27.9 12.2 41.8-.1.1 0 .1.2.1z"/><path style="fill:#fff" d="M112.6 47c.7-.2 1.3-.6 1.7-1.2 1.8-1.8 3.7-3.5 5.7-5.1 5.2-4 11.7-6 18.2-5.5 2.6.1 3.5.9 3.7 3.4.2 3.4.1 6.9.1 10.3.1 1.4 0 2.7-.2 4.1-.4 1.8-1.1 2.5-2.9 2.7-1.4.1-2.7 0-4.1-.1-6.7-.6-13.2.7-19.5 2.8-1.4.5-1.4 1.5-1.4 2.6v48c0 .9 0 1.7-.1 2.6-.1 1.3-1.1 2.3-2.4 2.3-.7.1-1.5.1-2.2.1h-13c-.7 0-1.5 0-2.2-.1-1.3-.1-2.3-1.2-2.4-2.5-.1-.8-.1-1.6-.1-2.4V41c0-4.6.5-5.1 5.1-5.1h9.6c2.6 0 3.8.9 4.5 3.4s1.3 5 1.9 7.7zM580.4 148.4c6.6.2 13.1.6 19.5 2.3 1.8.5 3.5 1.1 5.2 1.9 2.3.9 3.8 3.1 4.1 5.5.4 2.8.5 5.7.3 8.6-1.3 17.1-6.6 33.6-15.4 48.3-3.2 5.3-7.1 10.1-11.6 14.3-.9.9-2 1.6-3.2 2-1.9.5-3.1-.5-3.2-2.4.1-1 .3-2 .7-3 3.5-9.4 6.9-18.7 9.6-28.4 1.6-5.3 2.7-10.7 3.4-16.2.2-2 .3-4 .1-6-.1-3.4-2.3-6.3-5.6-7.3-3.1-1-6.3-1.6-9.6-1.8-9.2-.4-18.4 0-27.5 1.2l-12.1 1.5c-1.3.1-2.5 0-3.2-1.2s-.4-2.4.3-3.6c.8-1.1 1.8-2.1 3-2.8 7.4-5.3 15.7-8.5 24.5-10.6 6.8-1.4 13.7-2.1 20.7-2.3z"/><path style="fill:#fff" d="M538.5 75v36c-.2 2-1.1 2.9-3.1 3-5.4.1-10.7.1-16.1 0-2 0-2.9-1-3.1-2.9-.1-.6-.1-1.3-.1-1.9V40c.1-3.1.9-4 4-4h14.4c3.1 0 4 .9 4 4v35z"/><path style="fill:#fff" d="M151.6 74.8V39.3c.1-2.4 1-3.3 3.4-3.4 5.2-.1 10.4-.1 15.6 0 2.3 0 3 .7 3.2 3 .1.9.1 1.7.1 2.6v66.6c0 1.1-.1 2.2-.2 3.3-.1 1.3-1.1 2.2-2.4 2.3-.6.1-1.1.1-1.7.1h-13.9c-.5 0-.9 0-1.4-.1-1.4-.1-2.6-1.2-2.7-2.6-.1-.8-.1-1.6-.1-2.4.1-11.1.1-22.5.1-33.9zM163.2.1c1.6-.1 3.2.2 4.7.7 5.4 1.8 8.2 6.5 7.7 12.6-.4 5.2-4.3 9.4-9.5 10.2-2.2.4-4.5.4-6.7 0-5.7-1.1-9.9-5.3-9.5-12.5.6-7.1 5.3-11 13.3-11z"/><path style="fill:#fff" d="M527.4.1c2-.2 4 .2 5.9 1 3.9 1.5 6.6 5.1 6.8 9.3.8 9.1-5.3 13.7-13.4 13.5-1.1 0-2.2-.2-3.3-.4-6.2-1.5-9.4-6.3-8.8-13.2.5-5.5 4.8-9.6 10.7-10.1.7-.1 1.4-.2 2.1-.1z"/><path style="fill:#fff" d="M76.7 66.6c-.4-5.2-1.8-10.3-3.9-15-4.1-8.6-10.4-14.9-20-17.1-11-2.4-20.9 0-29.9 6.7-.6.6-1.3 1.1-2.1 1.5-.2-.1-.4-.2-.4-.3-.3-1-.5-2-.8-3-.8-2.5-1.8-3.4-4.5-3.4-3 0-6.1.1-9.1 0-2.3-.1-4.4.2-6 2 0 35 0 70.1.1 105 1.3 2.1 3.3 2.5 5.6 2.4 3.6-.1 7.2 0 10.8 0 6.3 0 6.3 0 6.3-6.2v-28.5c0-.7-.3-1.5.4-2.1 5 3.9 11.1 6.3 17.4 6.9 8.8.9 16.8-1.3 23.5-7.3 4.9-4.5 8.5-10.3 10.4-16.7 2.7-8.2 2.9-16.5 2.2-24.9zM52.8 87.3c-.7 3.1-2.3 5.9-4.6 8-2.6 2.2-5.8 3.5-9.2 3.5-5.1.3-10.1-.8-14.6-3.2-1.1-.5-1.8-1.6-1.7-2.8V74.7c0-6 .1-12 0-18-.1-1.4.7-2.6 2-3.1 5.5-2.6 11.2-3.8 17.2-2.6 4.2.6 7.8 3.3 9.5 7.2 1.5 3.2 2.4 6.7 2.6 10.2.6 6.4.6 12.8-1.2 18.9z"/><path style="fill:#fff" d="M800.1 82.2s0-.1 0 0c0-.1 0-.1 0 0zM800.2 68.8v.4c-.4-.4-.6-1-.4-1.5v-.8s0-.1.1-.1h-.1v-1h.2c0-.1-.1-.1-.1-.2-.2-1.9-.6-3.8-1.1-5.6-3.7-13.2-12-21.9-25.5-25.3-6.3-1.5-12.7-1.7-19.1-.7-13.5 2-23.2 9.2-27.9 22-4.6 12.2-4.5 25.6.1 37.8 4 11.1 12 18.1 23.5 21 6.1 1.5 12.5 1.9 18.8 1 21-2.5 29.7-18.4 31.1-32.2h-.1v-1.4c-.1-.6-.2-1.1.4-1.5v.2c0-.1.1-.3.2-.4V69c0-.1-.1-.1-.1-.2zm-24 19c-.6 2.1-1.5 4-2.8 5.8-2.2 3.1-5.7 5.1-9.5 5.4-1.9.2-3.8.2-5.7-.2-4.2-.8-7.7-3.6-9.4-7.5-1.5-3.1-2.4-6.5-2.7-9.9-.5-5.9-.6-11.8.8-17.6.5-2.3 1.5-4.6 2.7-6.6 2.2-3.6 6-5.9 10.2-6.2 1.9-.2 3.8-.2 5.7.2 4 .8 7.3 3.4 9.1 7.1 1.7 3.5 2.7 7.4 2.9 11.3.1 1.8.2 3.6.1 5.4.3 4.4-.2 8.7-1.4 12.8zM624.9.8H611c-3.8 0-4.5.7-4.5 4.5v32.4c0 .7.3 1.4-.2 2.1-.9-.1-1.4-.7-2.1-1.1-10.4-6.1-21.3-7.2-32.3-2.1-7.7 3.6-12.5 10.1-15.6 17.8-3 7.4-3.7 15.2-3.5 23.1 0 7.4 1.7 14.7 5 21.3 3.8 7.3 9.3 12.9 17.3 15.3 10.9 3.4 21.1 1.7 30.4-5.2.7-.4 1.1-1.1 2-1.3.5 1.1.9 2.3 1.1 3.5.4 1.6 1.8 2.7 3.5 2.7h2.4c3.6 0 7.1.1 10.6 0 2.8 0 3.6-.9 3.7-3.8V4.6c-.1-3.1-.9-3.8-3.9-3.8zm-18.3 73.6v18.2c.2 1.2-.5 2.3-1.6 2.8-4.8 2.7-10.3 3.8-15.7 3-4.6-.5-8.6-3.3-10.7-7.4-1.6-3.2-2.5-6.6-2.8-10.1-.8-6.3-.3-12.7 1.2-18.8.5-1.7 1.1-3.3 2-4.9 2.1-3.9 6.1-6.4 10.5-6.7 5.3-.5 10.6.5 15.4 2.7 1.2.4 1.9 1.6 1.8 2.9-.2 6.2-.1 12.2-.1 18.3z"/><path style="fill:#fff" d="M348 81.3c7.5 1.4 15.2 1.5 22.7.3 4.4-.6 8.6-1.9 12.5-4 4.5-2.6 7.8-6.2 9.2-11.2 3.5-12.6-1.9-25.3-15-30-6.4-2.1-13.2-2.8-19.9-1.9-15.8 1.8-26.1 10.5-30.8 25.6-3.3 10.3-2.9 20.8-.2 31.2 3.5 13.3 12.3 21.2 25.6 24 7.6 1.7 15.3 1.4 22.9.2 4-.7 8-1.7 11.8-3.2 2.3-.9 3.5-2.3 3.4-4.9-.1-2.4 0-4.9 0-7.4 0-3-1.2-3.9-4.1-3.2s-5.7 1.3-8.6 1.9c-6.2 1.3-12.6 1.3-18.8.2-8.5-1.7-14-9-13.5-18 .9.1 1.9.2 2.8.4zM345.5 66c.3-2.4 1-4.7 1.9-6.9 3-7.3 9.3-9.8 15.7-9.4 1.8.1 3.6.5 5.3 1.2 2.6 1.1 4.3 3.5 4.6 6.3.3 1.7.2 3.5-.3 5.2-1.2 3.6-4.1 5.1-7.6 5.8-2.1.5-4.3.7-6.5.5-3.9 0-7.9-.3-11.8-.9-1.5-.2-1.5-.2-1.3-1.8z"/><path style="fill:#fff" d="M685.3 82.3c5.8-.4 11.6-1.5 16.8-4.3 5.3-2.6 9-7.5 10.1-13.3.7-3.6.7-7.4-.1-11-2.1-9-7.8-14.6-16.4-17.5-4.8-1.5-9.9-2.1-14.9-1.9-16.8.4-29.6 8.9-34.8 25.7-3.5 11.1-3 22.4.4 33.5 3.5 11.4 11.5 18.3 22.9 21.4 4.9 1.2 10 1.7 15 1.5 7.3-.1 14.6-1.5 21.5-4.1 2.9-1.1 3.6-2.1 3.6-5.2v-7.2c-.1-2.9-1.3-3.9-4.2-3.2-2.2.6-4.3 1.1-6.5 1.6-6.7 1.6-13.7 1.9-20.5.7-6.8-1.3-11.4-5.2-13.2-12-.5-2-.9-4-1.1-6.1.5 0 1 0 1.4.2 6.6 1.2 13.3 1.7 20 1.2zm-20.9-16c.7-3.9 1.6-7.7 4-10.9 3.7-4.9 8.8-6.3 14.6-5.7.5 0 .9.2 1.4.2 7 1.1 8.7 6.7 7.4 12.1-1 4-4.3 5.5-8 6.2-2 .4-4.1.6-6.2.5-4.1-.1-8.1-.4-12.1-1-.9-.1-1.3-.5-1.1-1.4z"/></svg>',
      "friendlyName": "Prime Video",
      "className": "primeButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "Prime Video (FireTV)",
          "androidName": "com.amazon.avod",
          "androidName2": "com.amazon.firebat",
          "adbLaunchCommand": "adb shell am start com.amazon.firebat/.deeplink.DeepLinkRoutingActivity",
      },
      "nvidia-shield": {
          "appName": "Prime Video",
          "androidName": "com.amazon.amazonvideo.livingroom",
          "adbLaunchCommand": "adb shell am start com.amazon.amazonvideo.livingroom/com.amazon.ignition.IgnitionActivity",
      }, 
   },


  "private-internet-access": {
      "button": "PIA",
      "friendlyName": "Private Internet Access",
      "appName": "com.privateinternetaccess.android",
      "className": "privateInternetAccessButton",
      "androidName": "com.privateinternetaccess.android",
      "deviceFamily": ["nvidia-shield"], },


  "raiplay": {
      "button": "RaiPlay",
      "friendlyName": "RaiPlay (IT)",
      "appName": "it.rainet.androidtv",
      "className": "raiPlayButton",
      "androidName": "it.rainet.androidtv",
      "adbLaunchCommand": "adb shell am start -n it.rainet.androidtv/.ui.MainLeanbackActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "shophq": {
      "button": "ShopHQ",
      "friendlyName": "ShopHQ",
      "appName": "com.amazon.rialto.cordova.webapp.webappb656e5788fd9475ea16e928d2c034d68",
      "className": "shopHQButton",
      "androidName": "com.amazon.rialto.cordova.webapp.webappb656e5788fd9475ea16e928d2c034d68",
      "adbLaunchCommand": "adb shell am start -n com.amazon.rialto.cordova.webapp.webappb656e5788fd9475ea16e928d2c034d68/.MainActivity",
      "deviceFamily": ["amazon-fire"], },


  "showtime": {
      "button": "SHOWTIME",
      "friendlyName": "Showtime",
      "appName": "com.showtime.standalone",
      "className": "showtimeButton",
      "androidName": "com.showtime.standalone",
      "adbLaunchCommand": "adb shell am start -n com.showtime.standalone/com.showtime.showtimeanytime.activities.IntroActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "sky-news" : {
      "button": "sky news",
      "friendlyName": "Sky News",
      "className": "skyNewsButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.onemainstream.skynews.android",
          "androidName": "com.onemainstream.skynews.android",
      },
      "nvidia-shield": {
          "appName": "com.sky.news.androidtv",
          "androidName": "com.sky.news.androidtv",
      },
   },

  "smart-tube-next": {
      "button": "STN",
      "friendlyName": "SmartTubeNext",
      "className": "smartTubeNextButton",
      "appName": "com.teamsmart.videomanager.tv",
      "androidName": "com.teamsmart.videomanager.tv",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "spotify": {
      "button": "Spotify",
      "friendlyName": "Spotify",
      "appName": "com.spotify.tv.android",
      "className": "spotifyButton",
      "androidName": "com.spotify.tv.android",
      "adbLaunchCommand": "adb shell am start -n com.spotify.tv.android/com.spotify.tv.android.SpotifyTVActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "starz": {
      "button": "STARZ",
      "friendlyName": "Starz",
      "className": "starzButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.starz.starzplay.firetv",
          "androidName": "com.starz.starzplay.firetv",
      },
      "nvidia-shield": {
          "appName": "com.bydeluxe.d3.android.program.starz",
          "androidName": "com.bydeluxe.d3.android.program.starz",
      }, 
   },


  "streamz": {
      "button": "streamz",
      "friendlyName": "streamz (BE)",
      "className": "streamzButton",
      "appName": "be.dpgmedia.streamz",
      "androidName": "be.dpgmedia.streamz",
      "deviceFamily": ["nvidia-shield"], },


  "stremio": {
      "button": "Stremio",
      "friendlyName": "Stremio",
      "className": "stremioButton",
      "appName": "com.stremio.one",
      "androidName": "com.stremio.one",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "adbLaunchCommand": "adb shell am start -n com.stremio.one/com.stremio.MainActivity",
      },
      "nvidia-shield": {
          "adbLaunchCommand": "adb shell am start -n com.stremio.one/com.stremio.tv.MainActivity",
      },
  },


  "surfshark-vpn": {
      "button": "Surfshark",
      "friendlyName": "Surfshark VPN",
      "className": "surfsharkButton",
      "appName": "com.surfshark.vpnclient.android",
      "androidName": "com.surfshark.vpnclient.android",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "tennis-channel": {
      "button": "TENNIS CHANNEL",
      "friendlyName": "Tennis Channel",
      "appName": "com.tennischannel.tceverywhere.amazon",
      "className": "tennisChannelButton",
      "androidName": "com.tennischannel.tceverywhere.amazon",
      "deviceFamily": ["amazon-fire"], },


  "threenow": {
      "button": "Three Now",
      "friendlyName": "Three Now (NZ)",
      "appName": "com.mediaworks.android.tv",
      "className": "threenowButton",
      "androidName": "com.mediaworks.android.tv",
      "deviceFamily": ["amazon-fire"], },


  "tivimate": {
      "button": "TiviMate",
      "friendlyName": "TiviMate IPTV Player",
      "className": "tiviMateButton",
      "appName": "ar.tvplayer.tv",
      "androidName": "ar.tvplayer.tv",
      "adbLaunchCommand": "adb shell am start -n ar.tvplayer.tv/ar.tvplayer.tv.ui.MainActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"], },


  "tvnz-plus": {
      "button": "tvnz+",
      "friendlyName": "TVNZ+ (NZ)",
      "appName": "nz.co.tvnz.ondemand.tv",
      "className": "tvnzPlusButton",
      "androidName": "nz.co.tvnz.ondemand.tv",
      "adbLaunchCommand": "adb shell am start -n nz.co.tvnz.ondemand.tv/nz.co.tvnz.ondemand.MainTVActivity",
      "deviceFamily": ["amazon-fire"], },


  "twitch": {
      "button": "Twitch",
      "friendlyName": 'Twitch',
      "className": "twitchButton",
      "adbLaunchCommand": "adb shell am start -n tv.twitch.android.viewer/tv.twitch.starshot64.app.StarshotActivity",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "Twitch (FireTV)",
          "androidName": "tv.twitch.android.viewer",
      },
      "nvidia-shield": {
          "appName": "Twitch",
          "androidName": "tv.twitch.android.app",
      }, 
   },


  "videoland": {
      "button": "videoland.",
      "friendlyName": "Videoland (NL)",
      "className": "videolandButton",
      "deviceFamily": ["nvidia-shield"],
      "amazon-fire": {
          "appName": "nl.rtl.videoland.v2.firetv",
          "androidName": "nl.rtl.videoland.v2.firetv",
          "adbLaunchCommand": "adb shell am start -n nl.rtl.videoland.v2.firetv/fr.m6.m6replay.tv.feature.home.HomeActivity",
      },
      "nvidia-shield": {
          "appName": "nl.rtl.videoland.v2",
          "androidName": "nl.rtl.videoland.v2",
      }, 
   },


  "vtm-go": {
      "button": "VTM GO",
      "friendlyName": "VTM GO (BE)",
      "className": "vtmGoButton",
      "appName": "be.vmma.vtm.zenderapp",
      "androidName": "be.vmma.vtm.zenderapp",
      "deviceFamily": ["nvidia-shield"], },

  "vrt-max": {
      "button": "vrt max",
      "friendlyName": "VRT MAX (BE)",
      "className": "vrtMaxButton",
      "appName": "be.vrt.vrtnu",
      "androidName": "be.vrt.vrtnu",
      "deviceFamily": ["nvidia-shield"], },


  "vlc": {
      "button": "VLC",
      "friendlyName": "VLC",
      "appName": "org.videolan.vlc",
      "className": "vlcButton",
      "androidName": "org.videolan.vlc",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],},


  "waipuTV": {
      "button": "Waipu TV",
      "friendlyName": "Waipu TV (DE)",
      "appName": "Waipu TV",
      "className": "waipuTVButton",
      "androidName": "de.exaring.waipu.firetv.live",
      "deviceFamily": ["amazon-fire"], },


  "xfinityStream": {
      "button": "Xfinity Stream",
      "friendlyName": "Xfinity Stream",
      "appName": "com.xfinity.cloudtvr.tenfoot",
      "className": "xfinityStreamButton",
      "androidName": "com.xfinity.cloudtvr.tenfoot",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],},


  "youtube": {
      "button": "YouTube",
      "friendlyName": "YouTube",
      "className": "youtubeButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "YouTube (FireTV)",
          "androidName": "com.amazon.firetv.youtube",
          "adbLaunchCommand": "adb shell am start -n com.amazon.firetv.youtube/dev.cobalt.app.MainActivity",
      },
      "nvidia-shield": {
          "appName": "YouTube",
          "androidName": "com.google.android.youtube.tv",
      },
  },


  "youtubekids": {
      "button": "YouTube Kids",
      "friendlyName": "YouTube Kids",
      "className": "youtubekidsButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.google.android.youtube.tvkids",
          "androidName": "com.amazon.firetv.youtube.kids",
          "adbLaunchCommand": "adb shell am start -n com.amazon.firetv.youtube.kids/dev.cobalt.app.MainActivity",
      },
      "nvidia-shield": {
          "appName" : "YouTube Kids",
          "androidName": "com.google.android.youtube.tvkids",
          "adbLaunchCommand": "adb shell am start -n com.google.android.youtube.tvkids/com.google.android.apps.youtube.tvkids.activity.MainActivity",
      },
  },


  "youtubeTV": {
      "button": "YouTubeTV",
      "friendlyName": "YouTubeTV",
      "className": "youtubeTVButton",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],
      "amazon-fire": {
          "appName": "com.amazon.firetv.youtube.tv",
          "androidName": "com.amazon.firetv.youtube.tv",
          "adbLaunchCommand": "adb shell am start -n com.amazon.firetv.youtube.tv/dev.cobalt.app.MainActivity",
      },
      "nvidia-shield": {
          "appName" : "YouTube TV",
          "androidName": "com.google.android.youtube.tvunplugged",
          "adbLaunchCommand": "adb shell am start -n com.google.android.youtube.tvunplugged/com.google.android.apps.youtube.tvunplugged.activity.MainActivity",
      },
  },


  "zattoo": {
      "button": "Zattoo",
      "friendlyName": "Zattoo",
      "appName": "com.zattoo.player.firetv",
      "className": "zattooButton",
      "androidName": "com.zattoo.player.firetv",
      "deviceFamily": ["amazon-fire"],},


  "function-app-switch": {
      "button": "<ha-icon icon=\"mdi:file-multiple-outline\"></ha-icon> App Switch",
      "friendlyName": "Function: App Switch",
      "className": "functionAppSwitchButton",
      "adbLaunchCommand": "adb shell input keyevent KEYCODE_APP_SWITCH",
      "deviceFamily": ["nvidia-shield"], },


  "function-find-my-remote": {
      "button": "<ha-icon icon=\"mdi:shield-search\"></ha-icon>&nbsp;Find Remote",
      "friendlyName": "Function: Find My Remote",
      "className": "functionFindRemoteButton",
      "appName": "com.nvidia.remotelocator",
      "androidName": "com.nvidia.remotelocator",
      "adbLaunchCommand": "adb shell am start -a android.intent.action.VIEW -d -n com.nvidia.remotelocator/.ShieldRemoteLocatorActivity",
      "deviceFamily": ["nvidia-shield"],},


  "function-reboot": {
      "button": "<ha-icon icon=\"mdi:restart\"></ha-icon>Reboot",
      "friendlyName": "Function: Reboot",
      "className": "functionRebootButton",
      "adbLaunchCommand": "adb shell reboot",
      "deviceFamily": ["amazon-fire", "nvidia-shield"],},

};
const appmap = new Map(Object.entries(fastappchoices));


function deviceAttributeQuery(deviceAttribute, configvar){
  var deviceTypeRef = configvar.device_type;
  if(configvar[deviceAttribute+'_override']) {
    if(configvar[deviceAttribute+'_override'] != 'none') {
        return configvar[deviceAttribute+'_override'];
    }
  }
  var attributeValue = '';
  var deviceSearch = function(deviceName, jsonData) {
    for (var key in jsonData) {
      if(typeof(jsonData[key]) === 'object') {
        if(key == deviceName) {
          attributeValue = String(jsonData[key][deviceAttribute]);
        }
        else {
          deviceSearch(deviceName, jsonData[key]);
        }
      } 
    }
    return attributeValue;
  }
  return String(deviceSearch(deviceTypeRef, devices));
}


function truncate(str, length) {
  return str.length > length ? str.substr(0, length) : str;
}

function handlehdmi(config, inputs = 0) {
  appmap.delete('hdmi_1');
  appmap.delete('hdmi_2');
  appmap.delete('hdmi_3');
  appmap.delete('hdmi_4');
  if( inputs == 1) {
    if( config.hdmi_1 ) {
      const inputname = truncate(config.hdmi_1, 8);
      appmap.set("hdmi_1", {"button": truncate(inputname, 8), "friendlyName": "HDMI - "+inputname, "androidName": "", "adbLaunchCommand": "adb shell am start -n com.amazon.tv.inputpreference.service/com.amazon.tv.inputpreference.player.InputChooserActivity"});
    }
  }
  if( inputs == 4 ) {
    if( config.hdmi_1 ) {
      const inputname = truncate(config.hdmi_1, 8);
      appmap.set("hdmi_1", {"button": truncate(inputname, 8), "friendlyName": "HDMI 1 - "+inputname, "androidName": "", "adbLaunchCommand": "HDMI1"});
    }
    if( config.hdmi_2 ) {
      const inputname = config.hdmi_2;
      appmap.set("hdmi_2", {"button": truncate(inputname, 8), "friendlyName": "HDMI 2 - "+inputname, "androidName": "", "adbLaunchCommand": "HDMI2"});
    }
    if( config.hdmi_3 ) {
      const inputname = config.hdmi_3;
      appmap.set("hdmi_3", {"button": truncate(inputname, 8), "friendlyName": "HDMI 3 - "+inputname, "androidName": "", "adbLaunchCommand": "HDMI3"});
    }
    if( config.hdmi_4 ) {
      const inputname = config.hdmi_4;
      appmap.set("hdmi_4", {"button": truncate(inputname, 8), "friendlyName": "HDMI 4 - "+inputname, "androidName": "", "adbLaunchCommand": "HDMI4"});
    }
  }
}



class FiremoteCard extends LitElement {

  static getConfigElement() {
    // Create and return an editor element
    return document.createElement("firemote-card-editor");
  }


  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  static getStubConfig(e) {
    // Return a minimal configuration that will result in a working card configuration=
    var mediaPlayerEntities = Object.keys(e.entities).filter(
        (eid) => e.entities[eid].platform === 'androidtv'
    );
    var defaultEntity = mediaPlayerEntities[0] || '';
    return { 'entity': defaultEntity,
             'device_family': 'amazon-fire',
             'device_type': 'fire_tv_4_series',
             'compatibility_mode': 'default',
             'app_launch_1': 'prime-video',
             'app_launch_2': 'netflix',
             'app_launch_3': 'disney-plus',
             'app_launch_4': 'hulu',
           };
  }

  setConfig(config) {
    if (!config.entity) {
     throw new Error('You need to define a Fire TV, NVIDIA Shield, or other Android TV entity');
    }
    this._config = config;
  }

  static styles = css`

          ha-card {
            background: rgba(30,30,30,0); 
            width: max-content; 
            padding: 0; 
            margin: auto;
            box-shadow: none;
            border: 0;
            outline: 0;
          }

          .hidden {
            display: none !important;
          }

          .shield-remote-body {
            background: linear-gradient(90deg, rgba(22,21,21,1) 0%, rgba(37,37,37,1) 10%, rgba(37,37,37,1) 90%, rgba(22,21,21,1) 100%); 
            border: solid #252525 calc(var(--sz) * 0.14rem);
            padding: calc(var(--sz) * 1.428rem) calc(var(--sz) * 0.714rem) calc(var(--sz) * 2.143rem) calc(var(--sz) * 0.714rem);
            display: grid;
            justify-items: center;
            align-content: flex-start;
            grid-column-gap: calc(var(--sz) * 1.2rem);
            grid-row-gap: calc(var(--sz) * 0.5rem);
            grid-template-columns: 1fr 1fr;
            width: calc(var(--sz) * 8.286rem);
            min-height: calc(var(--sz) * 45rem);
          }

          .shield-remote-body.ns1-body {
            background: linear-gradient(90deg, rgb(28 28 28) 0%, rgb(37, 37, 37) 8%, rgb(40 40 40) 50%, rgb(37, 37, 37) 92%, rgb(28, 28, 28) 100%);
            border: solid #1c1c1c calc(var(--sz) * 0.14rem);
            border-radius: calc(var(--sz) * 1.2rem);
          }

          .remote-body {
            background: linear-gradient(90deg, rgba(27,27,27,1) 0%, rgba(37,37,37,1) 8%, rgba(55,55,55,1) 50%, 
                                               rgba(37,37,37,1) 92%, rgba(27,27,27,1) 100%); 
            border: solid #252525 calc(var(--sz) * 0.14rem);
            border-radius: calc(var(--sz) * 8rem) calc(var(--sz) * 8rem) calc(var(--sz) * 8rem) calc(var(--sz) * 8rem) / calc(var(--sz) * 2.5rem) calc(var(--sz) * 2.5rem) calc(var(--sz) * 2.5rem) calc(var(--sz) * 2.5rem);
            padding: calc(var(--sz) * 1.428rem) calc(var(--sz) * 0.714rem) calc(var(--sz) * 2.143rem) calc(var(--sz) * 0.714rem);
            display: grid;
            justify-items: center;
            grid-column-gap: calc(var(--sz) * 0.14rem);
            grid-row-gap: calc(var(--sz) * 0.5rem);
            grid-template-columns: 1fr 1fr 1fr;
            width: calc(var(--sz) * 12.286rem);
          }

          .two-col-span {
            grid-column-start: 1;
            grid-column-end: 3;
            width: 100%;
            display: grid;
            justify-content: center;
            grid-row-gap: calc(var(--sz) * 0.143rem);
            align-content: center;
          }

          .three-col-span {
            grid-column-start: 1;
            grid-column-end: 4;
            width: 100%;
            display: grid;
            grid-column-gap: calc(var(--sz) * 0.143rem);
            grid-template-columns: 50% 50%;
            align-content: center;
          }

          .nsappsgrid {
            display: grid;
            grid-row-gap: calc(var(--sz) * 0.6rem);
          }

          .afappsgrid {
            display: grid;
            margin-top: calc(var(--sz) * 0.57rem);
            row-gap: calc(var(--sz) * 0.9rem);
            justify-items: center;
            justify-content: space-evenly;
          }

          .ns1-wings {
            grid-column-start: 1;
            grid-column-end: 3;
            width: 100%;
            height: calc(var(--sz) * 25rem);
            margin-top: calc(var(--sz) * -1rem);
            display: grid;
            grid-template-columns: 1fr 27% 1fr;
          }

          #ns1spine {
            display: grid;
            padding: calc(var(--sz) * 4rem) 0;
          }

          #ns1spine button {
            all: unset;
            background: transparent;
          }

          #ns1spine button:active {
            background: #363636;
          }

          #wingL {
            background: rgb(28 28 28);
            -webkit-clip-path: polygon(100% 15%, 100% 85%, 0 100%, 0 0);
            clip-path: polygon(100% 15%, 100% 85%, 0 100%, 0 0);
            margin-left: calc(var(--sz) *-.714rem);
            border-right: solid #121212 calc(var(--sz) * .15rem);
          }

          #wingR {
            background: rgb(28 28 28);
            -webkit-clip-path: polygon(100% 0, 100% 100%, 0 85%, 0 15%);
            clip-path: polygon(100% 0, 100% 100%, 0 85%, 0 15%);
            margin-right: calc(var(--sz) *-.714rem);
            border-left: solid #121212 calc(var(--sz) * .15rem);
          }

          .remote-button {
            height: calc(var(--sz) * 3.572rem);
            width: calc(var(--sz) * 3.572rem);
            border: solid black calc(var(--sz) * 0.0714rem);
            border-radius: 100%;
            display: grid;
            justify-content: center;
            align-content: center;
            color: rgb(198 198 198);
            background: rgb(33 33 33);
            box-shadow: rgb(0 0 0 / 13%) 0 calc(var(--sz) * 0.214rem) calc(var(--sz) * 0.143rem 0);
            cursor: pointer;
            line-height: normal;
            user-select: none;
            padding: calc(var(--sz) * 0.2857rem);
          }

          #power-button {
            height: calc(var(--sz) * 2.8rem);
            width: calc(var(--sz) * 2.8rem);
            margin-bottom: calc(var(--sz) * -0.643rem);
          }

          .shield-remote-body .remote-button {
            height: calc(var(--sz) * 3rem);
            width: calc(var(--sz) * 3rem);
          }

          .shield-remote-body #power-button {
            height: calc(var(--sz) * 3rem);
            width: calc(var(--sz) * 3rem);
          }

          .shield-remote-body #power-button > ha-icon {
            color: #851313;
          }

          .shield-remote-body #home-button {
            --mdc-icon-size: 17px;
          }

          .shield-remote-body.ns1-body #home-button {
            --mdc-icon-size: 23px;
          }

          .shield-remote-body #back-button {
            --mdc-icon-size: 41px;
          }

          .notch {
            background: #181818;
            height: calc(var(--sz) * 1rem);
            width: calc(var(--sz) * 0.4rem);
            margin-top: calc(var(--sz) * -0.5rem);
            border-radius: calc(var(--sz) * 0.2rem);
          }

          .shieldNotch {
            grid-column: 1 / 3;
            background: rgb(24, 24, 24);
            height: calc(var(--sz) * 0.3rem);
            width: calc(var(--sz) * 0.75rem);
            margin-top: calc(var(--sz) * -0.5rem);
            border-radius: calc(var(--sz) * 0.2rem);
          }

          .notchtall {
            margin-bottom: calc(var(--sz) * 1.65rem);
          }

          .ns1-body .shieldNotch {
            height: calc(var(--sz) * 0.75rem);
            width: calc(var(--sz) * 2.2rem);
            border: solid #282828 calc(var(--sz) * 0.12rem);
            border-radius: calc(var(--sz) * 0.5rem);
          }

          #keyboard-button {
            height: calc(var(--sz) * 3rem);
            width: calc(var(--sz) * 3rem);
          }

          .teal {
            background: #09727e;
          }

          .dpadContainer{
            grid-column: 1 / 4;
            display: grid;
            margin-bottom: calc(var(--sz) * 0.65rem);
            width: calc(var(--sz) * 11.286rem);
            height: calc(var(--sz) * 11.286rem);
          }

          .shieldDpad {
            grid-column: 1 / 3;
            width: calc(var(--sz) * 8.2rem);
            height: calc(var(--sz) * 8.2rem);
            position: relative;
          }

          .centerbutton{
            all: unset;
            cursor: pointer;
            border: solid black calc(var(--sz) * 0.0714rem);
            margin-left: calc(var(--sz) * 2.357rem);
            margin-top: calc(var(--sz) * 2.357rem);
            width: calc(var(--sz) * 6.428rem);
            height: calc(var(--sz) * 6.428rem);
            border-radius: 100%;
            position: absolute;
            background: rgba(55,55,55,1);
            box-shadow: inset 0 0.calc(var(--sz) * 2857rem) calc(var(--sz) * 0.1428rem) calc(var(--sz) * -0.1428rem) #000000d9;
            z-index: 2;
          }

          .directionButtonContainer{
            transform: rotate(45deg);
            border: calc(var(--sz) * 0.0714rem) solid black;
            display: grid;
            grid-template-columns: auto auto;
            border-radius: 100%;
            overflow: hidden;
            box-shadow: rgb(20 20 20) calc(var(--sz) * 0.1428rem) calc(var(--sz) * 0.1428rem) calc(var(--sz) * 0.4285rem);
            position: relative;
          }

          .dpadbutton{
            all: unset;
            cursor: pointer;
            width: calc(var(--sz) * 5.5714rem);
            height: calc(var(--sz) * 5.5714rem);
            background: #141414;
            color: white;
            outline: solid #2e2e2e calc(var(--sz) * 0.0714rem);
          }

          .dpadbutton:active {
            background: #282828;
          }

          .dpadbuttonShield {
            width: calc(var(--sz) * 4.101rem);
            height: calc(var(--sz) * 4.101rem);
          }

          .centerbuttonShield {
            width: calc(var(--sz) * 5rem);
            height: calc(var(--sz) * 5rem);
            margin: 0px;
            padding: 0px;
            place-self: center;
            position: absolute;
            background: rgba(37,37,37,1);
            background: radial-gradient(circle, rgba(28,28,28,1) 0%, rgba(37,37,37,1) 100%);
          }

          .centerbutton:active {
            transform: scale(95%);
          }

          .remote-button:active {
            box-shadow: inset rgb(0 0 0 / 13%) 0 calc(var(--sz) * 0.2857rem) calc(var(--sz) * 0.1428rem) 0;
          }

          .remote-button > ha-icon {
            color: #c6c6c6;
          }

          .remote-button:active > ha-icon {
            color: #bcbcbc;
            transform: scale(calc(var(--sz) * 0.85));
          }

          .square {
            border-radius: 0;
            border: 0;
            padding: 0;
          }

          .round-top {
            border-radius: 100% 100% 0 0;
            border-bottom: 0;
            box-shadow: none;
            height: calc(var(--sz) * 3.92857rem);
            margin-bottom: calc(var(--sz) * -0.5rem);
          }

          .round-bottom {
            border-radius: 0 0 100% 100%;
            border-top: 0;
            height: calc(var(--sz) * 3.92857rem);
            margin-top: calc(var(--sz) * -0.5rem);
          }

          .square:active, .round-bottom:active {
              box-shadow: none;
          }

          .srcButton {
            height: calc(var(--sz) * 2rem);
            width: calc(var(--sz) * 5.714rem);
            border: solid #090909 calc(var(--sz) * 0.0714rem);
            border-radius: calc(var(--sz) * 2rem);
            display: grid;
            justify-items: center;
            align-content: center;
            color: rgb(198 198 198);
            background: rgb(33 33 33);
            box-shadow: rgb(0 0 0 / 13%) 0 calc(var(--sz) * 0.214rem) calc(var(--sz) * 0.1428rem) 0;
            cursor: pointer;
            line-height: normal;
            user-select: none;
            font-size: calc(var(--sz) * 1.14rem);
            padding: calc(var(--sz) * 0.285rem);
            white-space: nowrap;
            overflow: hidden;
          }

          .shield-remote-body .srcButton {
            height: calc(var(--sz) * 3rem);
            width: calc(var(--sz) * 8rem);
          }

          .srcButton:active {
            transform: scale(0.9);
            box-shadow: none !important;
          }

          .srcButton svg {
            pointer-events: none;
          }

          .deviceNameTop {
            white-space: nowrap;
            font-size: calc(var(--sz) * 1rem);
            overflow: hidden;
            color: var(--devicenamecolor);
            margin-left: -1rem;
            text-align: center;
            display: grid;
            height: calc(var(--sz) * 2rem);
            align-items: center;
            align-content: center;
            justify-items: center;
          }

          .shield-remote-body .deviceNameTop {
            display: unset;
            align-items: unset;
            align-content: unset;
            justify-items: unset;
            margin-left: 0;
            margin-top: -1rem;
          }

          .shield-remote-body.ns1-body .deviceNameTop {
            margin-top: 0rem;
            margin-bottom: -0.75rem;
          }

          .deviceNameBottom {
            grid-column: 1/4;
            color: var(--devicenamecolor);
            font-size: calc(var(--sz) * 1.25rem);
            margin-bottom: calc(var(--sz) * -2.5rem);
            margin-top: calc(var(--sz) * 1rem);
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-align: center;
          }

          .shield-remote-body .deviceNameBottom {
            grid-column: 1 / 3;
            font-size: calc(var(--sz) * 1rem);
            margin-top: 0px;
            margin-bottom: 0px;
            position: absolute;
            bottom: calc(var(--sz) * 0.3rem);
          }

          .amcPlusButton {
            font-size: calc(var(--sz) * 1.25rem);
            color: #51ceff;
            font-weight: bold;
            background: #091c3d;
            filter: grayscale(50%) brightness(80%);
          }
          .amcPlusButton:active, .amcPlusButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .appOpenerButton {
            font-size: calc(var(--sz) * .75rem);
            color: #ffffff;
            background: #400080;
            filter: grayscale(50%) brightness(80%);
          }
          .appOpenerButton:active, .appOpenerButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .appleTvButton {
            background: rgb(46, 46, 46);
            filter: brightness(50%);
          }
          .appleTvButton svg {
            width: calc(var(--sz) * 2.8rem);
            height: calc(var(--sz) * 2.8rem);
          }
          .shield-remote-body .appleTvButton svg {
            width: calc(var(--sz) * 3.5rem);
            height: calc(var(--sz) * 3.5rem);
          }
          .appleTvButton:active, .appleTvButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .bbciplayerButton {
            color: rgb(255 255 255);
            font-size: calc(var(--sz) * 0.78rem);
            background: linear-gradient(120deg, rgba(52,3,61,1) 0%, rgba(183,14,209,1) 100%);
            filter: grayscale(10%) brightness(80%);
          }
          .bbciplayerButton:active, .bbciplayerButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .bellFibeTVButton {
            color: rgb(255 255 255);
            font-size: calc(var(--sz) * 0.78rem);
            background: linear-gradient(180deg, rgba(71,86,255,1) 0%, rgba(46,62,234,1) 100%);
            filter: grayscale(10%) brightness(80%);
          }
          .bellFibeTVButton:active, .bellFibeTVButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .cnnButton {
            color: rgb(255 255 255);
            font-size: calc(var(--sz) * 1.25rem);
            background: linear-gradient(0deg, rgba(110,0,0,1) 0%, rgba(227,0,0,1) 100%);
            filter: grayscale(10%) brightness(80%);
          }
          .cnnButton:active, .cnnButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .craveTVButton {
            color: #00c1f3;
            background: #0a2aaa;
            font-size: calc(var(--sz) * 1.3rem);
            font-weight: bold;
            filter: grayscale(20%) brightness(60%);
          }
          .craveTVButton:active, .craveTVButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .cyberghostButton {
            font-size: calc(var(--sz) * 0.8rem);
            background: #242538;
            color: #fc0;
            filter: grayscale(20%) brightness(60%);
          }
          .cyberghostButton:active, .cyberghostButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .direcTVStreamButton {
            font-size: calc(var(--sz) * .9rem);
            font-weight: bold;
            color: #337ace;
            background: #ffffff;
            filter: brightness(60%);
          }
          .direcTVStreamButton:active, .direcTVStreamButton.appActive {
            color: #337ace;
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .disneyPlusButton {
            background: #07183f;
            filter: brightness(60%);
          }
          .disneyPlusButton svg {
            width: calc(var(--sz) * 3.6rem);
            height: calc(var(--sz) * 3.6rem);
          }
          .shield-remote-body .disneyPlusButton svg {
            width: calc(var(--sz) * 4.8rem);
            height: calc(var(--sz) * 4.8rem);
          }
          .disneyPlusButton:active, .disneyPlusButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .embyButton {
            font-size: calc(var(--sz) * 1.2rem);
            color: #FFF;
            font-weight: bold;
            background: #4CAF50;
            text-shadow: black 0px 1px 1px, black 1px 0px 1px, black 0px 0px 2px;
            filter: grayscale(20%) brightness(60%);
          }
          .embyButton:active, .embyButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .espnButton {
            color: #fff;
            font-size: calc(var(--sz) * 1.15rem);
            font-weight: bold;
            font-style: italic;
            filter: grayscale(50%) brightness(50%);
            background: #ff0000;
          }
          .espnButton:active, .espnButton.appActive {
            color: #fff;
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .freeveeButton {
            color: #6b00ff;
            font-size: calc(var(--sz) * 1.15rem);
            font-weight: bold;
            filter: grayscale(30%) brightness(40%);
            background: #D8FF03;
          }
          .freeveeButton:active, .freeveeButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .googlePlayStoreButton {
            display: grid;
            grid-template-columns: auto auto;
            align-items: center;
            justify-content: center;
            color: rgb(12 12 12);
            font-size: calc(var(--sz) * 1rem);
            font-weight: bold;
            filter: grayscale(30%) brightness(40%);
            background: rgb(255, 255, 255);
          }
          .shield-remote-body .googlePlayStoreButton > ha-icon {
            --mdc-icon-size: calc(var(--sz) * 1.3rem);
          }
          .shield-remote-body .googlePlayStoreButton > svg {
            display: block;
            width: calc(var(--sz) * 1.75rem);
            height: calc(var(--sz) * 1.75rem);
          }
          .googlePlayStoreButton:active, .googlePlayStoreButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .hboMaxButton {
            background: linear-gradient(90deg, #8d28e8 0%, #440cc3 50%, #4076d6 100%);
            filter: grayscale(20%) brightness(50%);
          }
          .hboMaxButton svg {
            width: calc(var(--sz) * 4rem);
            height: calc(var(--sz) * 4rem);
          }
          .shield-remote-body .hboMaxButton svg {
            width: calc(var(--sz) * 5.25rem);
            height: calc(var(--sz) * 5.25rem);
          }
          .hboMaxButton:active, .hboMaxButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .huluButton {
            background: #1ce783;
            filter: grayscale(30%) brightness(40%);
          }
          .huluButton svg {
            width: calc(var(--sz) * 2.8rem);
            height: calc(var(--sz) * 2.8rem);
          }
          .huluButton:active, .huluButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .ipVanishButton {
            color: #70bb44;
            font-size: calc(var(--sz) * 0.8rem);
            font-weight: bold;
            background: #000;
            border: solid #364a2a calc(var(--sz) * 0.0714rem);
            filter: grayscale(20%) brightness(80%);
          }
          .ipVanishButton:active, .ipVanishButton.appActive {
            filter: none;
            border: solid #3f7a1d calc(var(--sz) * 0.0714rem);
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .jellyfinButton {
            color: #c6c6c6;
            background: linear-gradient(90deg, rgba(62,34,71,1) 0%, rgba(0,60,80,1) 100%);
          }
          .jellyfinButton:active, .jellyfinButton.appActive {
            color: #fff;
            background: linear-gradient(90deg, rgba(112,62,128,1) 0%, rgba(0,108,144,1) 100%);
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .kodiButton {
            color: #fff;
            background: rgba(27,67,82,1);
            filter: brightness(80%);
          }
          .kodiButton:active, .kodiButton.appActive {
            color: #fff;
            background: #17b2e7;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .myCanalButton {
            font-weight: bold;
            font-size: calc(var(--sz) * 0.8rem);
            color: #adadad;
            background: #181818;
          }
          .myCanalButton:active, .myCanalButton.appActive {
            color: #ffffff;
            background: #232227;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 15%);
          }

          .netflixButton {
            background: #fff;
            filter: brightness(50%);
          }
          .netflixButton > svg {
            width: calc(var(--sz) * 3.8rem);
          }
          .netflixButton:active, .netflixButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 15%);
          }

          .netflixButtonShield {
            background: #252525;
            filter: grayscale(30%) brightness(80%);
          }
          .netflixButtonShield > svg {
            width: calc(var(--sz) * 4rem);
          }
          .netflixButtonShield:active, .netflixButtonShield.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 87 87 / 15%);
            border: solid #480a0a calc(var(--sz) * 0.0714rem);
          }

          .newsButton {
            font-weight: bold;
            font-size: calc(var(--sz) * 1.4rem);
            text-shadow: 0 0 calc(var(--sz) * 0.5rem) black;
            color: #ffffff;
            background: linear-gradient(45deg, rgba(255,184,81,1) 31%, rgba(202,21,205,1) 100%);
            filter: brightness(75%);
          }
          .newsButton:active, .newsButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 15%);
            filter: none;
          }

          .nordVPNButton {
            font-weight: bold;
            font-size: calc(var(--sz) * 1rem);
            text-shadow: 0 0 calc(var(--sz) * 0.5rem) black;
            color: #ffffff;
            background: #64c1ff;
            filter: grayscale(20%) brightness(50%);
          }
          .nordVPNButton:active, .nordVPNButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 15%);
            filter: none;
          }

          .npoButton {
            font-weight: bold;
            font-size: calc(var(--sz) * 1.3rem);
            color: #ff6600;
            background: #ffffff;
            filter: grayscale(20%) brightness(50%);
          }
          .npoButton:active, .npoButton.appActive {
            color: #ffffff;
            background: #ff6600;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 15%);
            filter: none;
          }

          .oqeeButton {
            font-weight: bold;
            font-size: calc(var(--sz) * 1.3rem);
            color: #ff0000;
            background: #ffffff;
            filter: grayscale(20%) brightness(50%);
          }
          .oqeeButton:active, .oqeeButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 15%);
            filter: none;
          }

          .pandoraButton {
            font-size: calc(var(--sz) * 1rem);
            color: #919191;
            font-weight: bold;
            background: #304b9b
          }
          .pandoraButton:active, .pandoraButton.appActive {
            color: #fff;
            background: #3668ff;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .paramountPlusButton {
            font-size: calc(var(--sz) * 0.7857rem);
            color: #fff;
            font-weight: bold;
            background: #0667fc;
            filter: grayscale(50%) brightness(80%);
          }
          .paramountPlusButton:active, .paramountPlusButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .plexButton {
            background: #fff;
            filter: grayscale(30%) brightness(50%);
          }
          .plexButton svg {
            height: calc(var(--sz) * 2.5rem);
            width: calc(var(--sz) * 2.5rem);
          }
          .shield-remote-body .plexButton svg {
            height: calc(var(--sz) * 3.5rem);
            width: calc(var(--sz) * 3.5rem);
          }
          .plexButton:active, .plexButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .primeButton {
            background: rgb(58 94 114);
            filter: grayscale(30%) brightness(65%);
          }
          .primeButton svg {
            height: calc(var(--sz) * 3.8rem);
            width: calc(var(--sz) * 3.8rem);
          }
          .shield-remote-body .primeButton > svg {
            height: calc(var(--sz) * 5rem);
            width: calc(var(--sz) * 5rem);
          }
          .primeButton:active, .primeButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.1428rem) rgb(255 255 255 / 15%);
          }

          .privateInternetAccessButton {
            font-size: calc(var(--sz) * 1.2rem);
            color: #fff;
            font-weight: bold;
            background: #56b14d;
            filter: grayscale(50%) brightness(80%);
          }
          .privateInternetAccessButton:active, .privateInternetAccessButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .raiPlayButton {
            color: #ffffff;
            background: linear-gradient(0deg, rgba(133,207,249,1) 21%, rgba(0,159,249,1) 100%);;
            font-weight: bold;
            text-shadow: 0 0 calc(var(--sz) * 0.214rem) black;
            filter: brightness(60%);
            font-size: calc(var(--sz) * 1rem);
          }
          .raiPlayButton:active, .raiPlayButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .shopHQButton {
            color: yellow;
            background: #000;
            font-weight: bold;
            filter: grayscale(30%) brightness(70%);
            font-size: calc(var(--sz) * 0.857rem);
          }
          .shopHQButton:active, .shopHQButton.appActive {
            color: #000;
            background: yellow;
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .showtimeButton {
            color: #6d0000;
            font-size: calc(var(--sz) * 0.7857rem);
            background: black;
          }
          .showtimeButton:active, .showtimeButton.appActive {
            color: #b10000;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .skyNewsButton {
            color: #ffffff;
            font-size: calc(var(--sz) * 1rem);
            filter: grayscale(30%) brightness(70%);
            background: linear-gradient(358deg, rgba(233,14,16,1) 0%, rgba(205,5,6,1) 53%, rgba(224,73,74,1) 54%, rgba(188,0,0,1) 95%);
          }
          .skyNewsButton:active, .skyNewsButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .smartTubeNextButton {
            color: #fff;
            background: #088db7;
            font-size: calc(var(--sz) * 1.25rem);
            filter: grayscale(30%) brightness(70%);
          }
          .smartTubeNextButton:active, .smartTubeNextButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .spotifyButton {
            color: #000;
            background: #fff;
            filter: brightness(50%);
            font-weight: bold;
          }
          .spotifyButton:active, .spotifyButton.appActive {
            color: rgb(23 163 73);
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .starzButton {
            font-size: calc(var(--sz) * 1rem);
            color: #9abc00;
            background: linear-gradient(99deg, rgba(16,65,69,1) 0%, rgba(8,31,33,1) 40%, rgba(13,71,75,1) 80%, rgba(16,60,64,1) 100%);
          }
          .starzButton:active, .starzButton.appActive {
            color: #d2ff00;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            background: linear-gradient(99deg, rgba(26,101,107,1) 0%, rgba(16,62,66,1) 40%, rgba(22,122,130,1) 80%, rgba(26,101,107,1) 100%);
          }

          .streamzButton {
            font-size: calc(var(--sz) * 1.2rem);
            font-weight: bold;
            color: #fff;
            background: linear-gradient(90deg, #f20d3a, #ff0a5a 52%, #cc0243);
            filter: grayscale(30%) brightness(50%);
          }
          .streamzButton:active, .streamzButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .stremioButton {
            font-size: calc(var(--sz) * 1rem);
            color: #fff;
            background: #8959ab;
            filter: grayscale(30%) brightness(50%);
          }
          .stremioButton:active, .stremioButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .surfsharkButton {
            font-size: calc(var(--sz) * 0.8rem);
            font-weight: bold;
            color: #fff;
            background: linear-gradient(45deg,#1bb4b7 0,#1f3c6a 100%);
            filter: grayscale(30%) brightness(50%);
          }
          .surfsharkButton:active, .surfsharkButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .tennisChannelButton {
            color: #919191;
            font-size: calc(var(--sz) * 0.57rem);
            font-weight: bold;
            background: linear-gradient(180deg, rgba(24,74,49,1) 0%, rgba(8,36,21,1) 100%);
          }
          .tennisChannelButton:active, .tennisChannelButton.appActive {
            color: #fff;
            background: linear-gradient(180deg, rgba(40,131,85,1) 0%, rgba(16,73,43,1) 100%);
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .threenowButton {
            font-size: calc(var(--sz) * .9rem);
            color: #fff;
            font-weight: bold;
            background: #ff004f;
            filter: grayscale(30%) brightness(70%);
          }
          .threenowButton:active, .threenowButton.appActive {
            color: #fff;
            background: #ff004f;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            text-shadow: 0 0 calc(var(--sz) * 0.2857rem) black;
            filter: none;
          }

          .tiviMateButton {
            font-size: calc(var(--sz) * 1rem);
            color: #33a8ff;
            font-weight: bold;
            background: #fff;
            filter: grayscale(30%) brightness(50%);
          }
          .tiviMateButton:active, .tiviMateButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .tvnzPlusButton {
            font-size: calc(var(--sz) * 1rem);
            color: #919191;
            font-weight: bold;
            background: linear-gradient(191deg, rgba(28,49,156,1) 0%, rgba(17,19,36,1) 100%);
          }
          .tvnzPlusButton:active, .tvnzPlusButton.appActive {
            color: #ffffff;
            background: linear-gradient(191deg, rgba(0,243,255,1) 0%, rgba(0,232,255,1) 38%, rgba(1,106,255,1) 100%);
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            text-shadow: 0 0 calc(var(--sz) * 0.2857rem) black;
          }

          .twitchButton {
            font-size: calc(var(--sz) * 1rem);
            color: #fff;
            font-weight: bold;
            background: #6441a5;
            filter: brightness(50%);
          }
          .twitchButton:active, .twitchButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .videolandButton {
            font-size: calc(var(--sz) * 1rem);
            font-weight: bold;
            color: #fff;
            background: #ff3746;
            filter: grayscale(30%) brightness(50%);
          }
          .videolandButton:active, .videolandButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .vlcButton {
            font-size: calc(var(--sz) * 1.25rem);
            color: #FFF;
            font-weight: bold;
            background: #f48b00;
            text-shadow: black 0px 1px 1px, black 1px 0px 1px, black 0px 0px 2px;
            filter: grayscale(20%) brightness(70%);
          }
          .vlcButton:active, .vlcButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .vrtMaxButton {
            font-size: calc(var(--sz) * 1.25rem);
            color: #FFF;
            font-weight: bold;
            background: #FF484C;
            filter: grayscale(30%) brightness(70%);
          }
          .vrtMaxButton:active, .vrtMaxButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .vtmGoButton {
            font-size: calc(var(--sz) * 1.25rem);
            color: #FFF;
            font-weight: bold;
            background: hsl(300deg 100% 60%);
            filter: grayscale(30%) brightness(70%);
          }
          .vtmGoButton:active, .vtmGoButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .waipuTVButton {
            font-size: calc(var(--sz) * 0.85rem);
            line-height: 0.75rem;
            color: #fff;
            font-weight: bold;
            background: linear-gradient(to right,#30182d 0,#0f2c4c 100%);
            filter: brightness(75%);
          }
          .waipuTVButton:active, .waipuTVButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .xfinityStreamButton {
            font-size: calc(var(--sz) * 0.7rem);
            color: #fff;
            font-weight: bold;
            background: linear-gradient(150deg, rgba(59,48,173,1) 0%, rgba(101,168,250,1) 100%);
            filter: brightness(75%);
          }
          .xfinityStreamButton:active, .xfinityStreamButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .youtubeButton {
            font-size: calc(var(--sz) * 1rem);
            color: #919191;
            font-weight: bold;
            background: rgb(74 0 0);
          }
          .youtubeButton:active, .youtubeButton.appActive {
            color: #ffffff;
            background: rgb(199 0 0);
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            text-shadow: 0 0 calc(var(--sz) * 0.2857rem) black;
          }

          .youtubekidsButton {
            font-size: calc(var(--sz) * 0.7rem);
            color: #919191;
            font-weight: bold;
            background: rgb(74 0 0);
          }
          .youtubekidsButton:active, .youtubekidsButton.appActive {
            color: #ffffff;
            background: rgb(199 0 0);
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            text-shadow: 0 0 calc(var(--sz) * 0.2857rem) black;
          }

          .youtubeTVButton {
            font-size: calc(var(--sz) * .8rem);
            color: #ffffff;
            font-weight: bold;
            background: #000000;
            filter: brightness(50%);
          }
          .youtubeTVButton:active, .youtubeTVButton.appActive {
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
            filter: none;
          }

          .zattooButton {
            font-size: calc(var(--sz) * 1rem);
            color: #FFF;
            font-weight: bold;
            background: #000;
            filter: brightness(60%);
          }
          .zattooButton:active, .zattooButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .functionFindRemoteButton {
            font-size: calc(var(--sz) * .75rem);
            display: block;
            color: #99e700;
            border: solid calc(var(--sz) * 0.1rem) #456800;
            font-weight: bold;
            background: #000;
            filter: brightness(60%);
          }
          .shield-remote-body .functionFindRemoteButton > ha-icon {
            --mdc-icon-size: calc(var(--sz) * 1.4rem);
          }
          .functionFindRemoteButton:active, .functionFindRemoteButton.appActive {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%) !important;
          }

          .remote-body .functionRebootButton {
            font-size: calc(var(--sz) * 1rem);
            color: #ff0000;
            font-weight: bold;
            background: #000;
            filter: brightness(80%);
          }
          .remote-body .functionRebootButton > ha-icon {
            display: none;
          }
          .remote-body .functionRebootButton:active {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%);
          }

          .shield-remote-body .functionRebootButton {
            font-size: calc(var(--sz) * 1rem);
            color: rgb(153, 231, 0);
            border: solid calc(var(--sz) * 0.1rem) #456800;
            font-weight: bold;
            background: rgb(0, 0, 0);
            filter: brightness(60%);
            display: block;
          }
          .shield-remote-body .functionRebootButton > ha-icon {
            --mdc-icon-size: calc(var(--sz) * 1.6rem);
          }
          .shield-remote-body .functionRebootButton:active {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%) !important;
          }

          .shield-remote-body .functionAppSwitchButton {
            font-size: calc(var(--sz) * 0.86rem);
            color: rgb(153, 231, 0);
            border: solid calc(var(--sz) * 0.1rem) #456800;
            font-weight: bold;
            background: rgb(0, 0, 0);
            filter: brightness(60%);
            display: block;
          }
          .shield-remote-body .functionAppSwitchButton > ha-icon {
            --mdc-icon-size: calc(var(--sz) * 1rem);
          }
          .shield-remote-body .functionAppSwitchButton:active {
            filter: none;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.142rem) rgb(255 255 255 / 20%) !important;
          }


          .remote-logo {
            grid-column-start: 1;
            grid-column-end: 4;
            padding: calc(var(--sz) * 2.5rem) calc(var(--sz) * 2.357rem) 0 calc(var(--sz) * 2.357rem);
            width: calc(var(--sz) * 7.5714rem);
          }

          .ns1-body #keyboard-button {
            margin-top: calc(var(--sz) * 1rem);
            height: calc(var(--sz) * 5rem);
            width: calc(var(--sz) * 5rem);
            --mdc-icon-size: 34px;
          }

          .ns1-body .remote-button:active {
            border: solid #395600 0.0714rem;
            box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(153 231 0 / 20%);
          }

          .ns1-body .remote-button:active > ha-icon {
            color: #99e700 !important;
          }

          .litbutton {
              border: solid #4b4c3c 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 255 25 / 15%);
          }
          .litbutton > ha-icon {
            color: yellow !important;
          }

          .shield-remote-body .litbutton {
              border: solid #500101 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 25 25 / 15%);
          }

          .shield-remote-body .litbutton > ha-icon {
            color: red !important;
          }

          .shield-remote-body.ns1-body .litbutton {
              border: solid #395600 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(153 231 0 / 20%);
          }

          .shield-remote-body.ns1-body .litbutton > ha-icon {
            color: #99e700 !important;
          }

          .dimlitbutton {
              border: solid #34342b calc(var(--sz) * 0.0714rem);
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 255 116 / 15%);
          }
          .dimlitbutton > ha-icon {
            color: #e5e59a !important;
          }

          .shield-remote-body .dimlitbutton {
              border: solid #3c1818 0.0714rem;
              box-shadow: 0 0 calc(var(--sz) * 0.857rem) calc(var(--sz) * 0.0714rem) rgb(255 25 25 / 11%);
          }

          .shield-remote-body .dimlitbutton > ha-icon {
            color: #ff7575 !important;
          }

          ha-icon {
            pointer-events: none;
            transform: scale(var(--sz));
          }
 
          .eightygap {
            height: calc(var(--sz) * 5.7143rem);
          }
  `;


    getOpenAppID() {
      return this.hass.states[this._config.entity].attributes.app_id;
    }


   render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return html` <ha-card>Unknown entity: ${this._config.entity}</ha-card> `;
    }

    const entityId = this._config.entity;
    const state = this.hass.states[entityId];
    const stateStr = state ? state.state : 'off';
    const appId = state.attributes.app_id;
    const deviceType = this._config.device_type;
    const scale = (parseInt(this._config.scale) || 100)/100;
    const overrides = this._config.button_overrides;
    var buttonHidingCss = '';
    if(overrides && typeof overrides === 'object') {
      for (let [key, value] of Object.entries(overrides)) {
        if(value && typeof value === 'object') {
          for (let [action, actionvalue] of Object.entries(value)) {
            if(action == 'hidden' && actionvalue == true) {
              buttonHidingCss += '#'+key+' { opacity: 0; pointer-events: none; } ';
            }
          }
        }
      }
    }
    const devicenamecolor = this._config.visible_name_text_color || '#000000';
    const cssVars = html `<style> :host { --sz: ${scale}; --devicenamecolor: ${devicenamecolor} } ${buttonHidingCss} </style>`;

    // Determine Power On/Off Status
    var powerStatusClass = ''
    if(stateStr != 'off' && stateStr != 'unavailable') {
      powerStatusClass = ' litbutton';
    }
    if(stateStr == 'standby') {
      powerStatusClass = ' dimlitbutton';
    }

    // Determine Home Status
    var homeStatusClass = '';
    if(appId == 'com.amazon.tv.launcher' || appId == 'com.google.android.tvlauncher') {
      homeStatusClass = ' litbutton';
    }

    // Determine Play/Pause
    var playingStatusClass = '';
    if(stateStr == 'playing' && appId != 'com.amazon.firebat' && appId != 'com.android.systemui' && appId != 'com.android.vending') {
      playingStatusClass = ' litbutton';
    }

    // Get current device's Attributes AND use any applicable overrides from user conf
    var confRef = this._config;
    function getDeviceAttribute(deviceAttribute){
      return deviceAttributeQuery(deviceAttribute, confRef);
    }

    // allow hdmi inputs where appropriate
    handlehdmi(this._config, getDeviceAttribute('hdmiInputs'))

    // get app button details from appmap json
    function getAppButtonData(config, configvalue, want) {
      if(appmap.has(configvalue)) {
        var deviceFamily = config["device_family"];
        var familySpecificAppData = appmap.get(configvalue)[deviceFamily];
        if(want=="active") {
          if (typeof appId != 'string') { return };
          if(familySpecificAppData && !(appmap.get(configvalue).androidName) && !(appmap.get(configvalue).androidName2)) {
            return (appId == familySpecificAppData["androidName"] || appId == familySpecificAppData["androidName2"]) ? "appActive" : "";
          }
          else {
            return (appId == appmap.get(configvalue).androidName || appId == appmap.get(configvalue).androidName2) ? "appActive" : "";
          }
        }
        else {
          if (appmap.get(configvalue)[want]) {
            return appmap.get(configvalue)[want];
          }
          else if(familySpecificAppData) {
            return familySpecificAppData[want];
          }
        }
      }
      else {
        return ' ';
      }
    }

    function drawAppLaunchButtons(e, config, cols=3, max=6) {
        var spanclass = "three-col-span afappsgrid";
        if(cols == 2) {
          spanclass = "two-col-span nsappsgrid";
        }
        function showHide(buttonKey) {
          if (buttonKey === '') {
            return 'hidden';
          }
        }
        if(config.defaultRemoteStyle_override == 'NS1' || config.defaultRemoteStyle_override == 'NS2' ||
           config.device_type == 'shield-tv-pro-2019' || config.device_type == 'shield-tv-2019') {
          var confBtnOne =   config.app_launch_1 || 'netflix';
          var confBtnTwo =   config.app_launch_2 || '';
          var confBtnThree = config.app_launch_3 || '';
          var confBtnFour =  config.app_launch_4 || '';
          var fiveAndSix = '';
        }
        else {
          var confBtnOne =   config.app_launch_1 || 'prime-video';
          var confBtnTwo =   config.app_launch_2 || 'netflix';
          var confBtnThree = config.app_launch_3 || 'disney-plus';
          var confBtnFour =  config.app_launch_4 || 'hulu';
          var fiveAndSix = '';
        }
        var confBtnFive = config.app_launch_5 || '';
        var confBtnSix =  config.app_launch_6 || '';
        return html`
          <div class="${spanclass}">
            <button class="srcButton ${getAppButtonData(config, confBtnOne, 'className')} ${getAppButtonData(config, confBtnOne, 'active')} ${showHide(confBtnOne)}"
                    id="${confBtnOne}-button" @click=${e.buttonClicked}>
              ${unsafeHTML(getAppButtonData(config, confBtnOne, 'button'))}
            </button>
            <button class="srcButton ${getAppButtonData(config, confBtnTwo, 'className')} ${getAppButtonData(config, confBtnTwo, 'active')} ${showHide(confBtnTwo)}"
                    id="${confBtnTwo}-button" @click=${e.buttonClicked}>
              ${unsafeHTML(getAppButtonData(config, confBtnTwo, 'button'))}
            </button>
            <button class="srcButton ${getAppButtonData(config, confBtnThree, 'className')} ${getAppButtonData(config, confBtnThree, 'active')} ${showHide(confBtnThree)}"
                    id="${confBtnThree}-button" @click=${e.buttonClicked}>
              ${unsafeHTML(getAppButtonData(config, confBtnThree, 'button'))}
            </button>
            <button class="srcButton ${getAppButtonData(config, confBtnFour, 'className')} ${getAppButtonData(config, confBtnFour, 'active')} ${showHide(confBtnFour)}"
                    id="${confBtnFour}-button" @click=${e.buttonClicked}>
              ${unsafeHTML(getAppButtonData(config, confBtnFour, 'button'))}
            </button>
            <button class="srcButton ${getAppButtonData(config, confBtnFive, 'className')} ${getAppButtonData(config, confBtnFive, 'active')} ${showHide(confBtnFive)}"
                    id="${confBtnFive}-button" @click=${e.buttonClicked}>
              ${unsafeHTML(getAppButtonData(config, confBtnFive, 'button'))}
            </button>
            <button class="srcButton ${getAppButtonData(config, confBtnSix, 'className')} ${getAppButtonData(config, confBtnSix, 'active')} ${showHide(confBtnSix)}"
                    id="${confBtnSix}-button" @click=${e.buttonClicked}>
              ${unsafeHTML(getAppButtonData(config, confBtnSix, 'button'))}
            </button>
          </div>
        `;
    }

    // Draw optional device name
    function drawDeviceName(e, config, section){
      if(!config.visible_name_text) { return };
      if(config.name_position=='bottom' && section=='bottom') {
        return html`<div class="deviceNameBottom">${config.visible_name_text}</div>`;
      }
      else if(config.name_position=='top' && section=='top') {
        return html`<div class="deviceNameTop">${config.visible_name_text}</div>`;
      }
      return;
    }


    // Reused SVG Logos
    function renderfiretvlogo() {
      return html`
          <!-- <div class="three-col-span">Remote name</div> -->
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 viewBox="0 0 1276 712" style="enable-background:new 0 0 1276 712;" xml:space="preserve" class="remote-logo">
            <style type="text/css">
            	.st0{fill:#0f0f0f;}
            </style>
           <g id="Layer_7">
          	<path class="st0" d="M168.6,30.3c0.3,0.6,0.8,0.5,1.3,0.5c10,0.7,19.9,2.4,29.6,5c1.2,0.3,2.3,0.7,3.4,1.2c3.5,1.5,5.8,4,6.2,7.9
          		c0.2,1.7,0.5,3.4,0.5,5.1c0.1,4.7,0.1,9.5,0,14.2c0,1.4-0.2,2.8-0.6,4.2c-0.5,2.9-3.1,5-6,4.9c-2,0.1-4,0-6-0.2
          		c-4-0.5-7.9-1.3-11.9-1.8c-7.1-1-14.2-1.2-21.3-0.6c-4.3,0.3-8.6,1-12.8,2.1c-2.4,0.7-4.8,1.6-7,2.7c-5.8,2.9-9.4,7.7-11.6,13.7
          		c-1.4,4-2.2,8.1-2.5,12.3c-0.4,4.8-0.3,9.6-0.3,14.5c0,11.3,0,22.5,0,33.8v3.2c0.7,0.2,1.4,0.3,2.1,0.3c4.1,0,8.2,0,12.4,0h51.3
          		c1.2,0,2.4,0,3.6,0.1c4.7,0.4,7.2,3.6,7.6,7.9c0,0.6,0,1.2,0,1.8c0,6.3,0,12.7,0,19c0.1,0.9,0,1.8-0.1,2.7c-1,4.9-3.6,6.5-7.8,7.2
          		c-1.1,0.1-2.2,0.2-3.3,0.1h-62.2h-3.3c-0.1,0.5-0.3,1.1-0.3,1.6c0,0.9,0,1.8,0,2.7c0,65.7,0,131.3,0,197c0,1.3,0,2.6-0.1,3.9
          		c-0.4,4.4-3.1,7.2-7.5,7.7c-0.6,0.1-1.2,0.1-1.8,0.1c-10.2,0-20.3,0-30.5,0c-1.3,0-2.6-0.2-3.8-0.6c-3.3-1.1-5-3.6-5.4-6.9
          		c-0.1-1.3-0.1-2.6-0.1-3.9c0-65.9,0-131.8,0-197.7v-3.8c-1-0.1-1.9-0.2-2.8-0.2c-11.2,0-22.3,0-33.5,0c-1.4,0-2.8-0.2-4.2-0.5
          		c-3.2-0.6-5.6-3.2-6-6.4c-0.1-0.3-0.1-0.6-0.2-0.9c0.1-0.4,0.1-0.8,0.2-1.2c0-4.1,0-8.2-0.1-12.3c0-1.2-0.1-2.4-0.1-3.6
          		c0.5-4.5,3.1-7,7.5-7.9c1.8-0.4,3.5-0.8,5.3-1c4-0.5,8-0.9,12-1.4c6.3-0.8,12.5-1.6,18.8-2.4c1-0.1,1.9-0.4,3.1-0.6v-3.1
          		c0-12.4,0-24.7,0-37.1c-0.1-8,0.5-16.1,1.9-24c1.2-7.6,3.5-15.1,6.7-22.1c3.9-8.5,9.7-16,17-21.8c9.6-7.6,20.7-11.7,32.7-13.7
          		c3.7-0.7,7.5-1.2,11.3-1.4c0.4-0.1,0.7-0.2,1-0.5H168.6z"/>
          	<path class="st0" d="M573.7,678c0-0.2,0-0.4-0.1-0.5c1.5,0,3-0.1,4.5-0.1h97.7c1.4,0,2.8,0.1,4.2,0.1c0,0.2-0.1,0.3-0.1,0.5
          		L573.7,678z"/>
          	<path class="st0" d="M32.7,167.3l0.9-0.1c0,1.2,0.1,2.4,0.1,3.6c0,4.1,0,8.2,0.1,12.3c0,0.4-0.1,0.8-0.2,1.2l-0.9-0.1V167.3z"/>
          	<path class="st0" d="M680,677.4c-1.4,0-2.8-0.1-4.2-0.1h-97.7c-1.5,0-3,0-4.5,0.1c-4.5-0.3-9-0.7-13.5-1.1
          		c-2.4-0.2-4.8-0.5-7.2-0.7c-8.1-0.8-16.2-1.9-24.2-3c-12.6-1.7-25.2-3.8-37.7-6.3c-9.3-1.8-18.7-3.9-27.9-6.1
          		c-17-4-33.8-8.7-50.4-14.1c-15.3-4.9-30.4-10.4-45.3-16.3c-14.9-6-29.6-12.4-44.1-19.5c-32.2-15.6-63.2-33.6-92.6-54
          		c-14-9.7-27.6-19.9-40.8-30.6c-9.3-7.5-18.4-15.3-27.3-23.3c-1.2-1.1-2.3-2.2-3.4-3.4c-1.4-1.7-2.2-3.9-2.2-6.1
          		c0-3.9,2.9-7.2,6.8-7.6c2.4-0.3,4.9,0.1,7,1.3c2.7,1.4,5.2,3,7.9,4.4c8.6,4.7,17.2,9.6,25.9,14.1s17.3,8.9,26.1,13.2
          		c14.4,7,28.9,13.5,43.7,19.7c15,6.3,30.2,12.2,45.5,17.7c17,6.1,34.2,11.7,51.5,16.8c16.8,5,33.8,9.5,50.9,13.5
          		c14.8,3.5,29.6,6.7,44.5,9.3c9.5,1.7,19,3.3,28.5,4.8c7.7,1.2,15.5,2.4,23.2,3.4c6,0.8,12,1.4,18,2c4.8,0.5,9.6,1.1,14.4,1.6
          		c2.8,0.3,5.6,0.5,8.4,0.7c4.3,0.4,8.6,0.8,12.9,1.1c4.6,0.3,9.2,0.6,13.8,0.8c6.6,0.4,13.2,0.7,19.9,1c3.1,0.1,6.2,0.1,9.3,0.2
          		c3.5,0,7,0.1,10.6,0.1c6,0.1,12.1,0.3,18.1,0.3c9.1-0.1,18.3-0.3,27.4-0.6c4.1-0.1,8.2-0.3,12.3-0.6c7.5-0.5,15-1,22.5-1.6
          		c3.6-0.3,7.2-0.5,10.8-0.8c5.1-0.5,10.2-1.1,15.3-1.6c2.2-0.2,4.4-0.4,6.6-0.7c4.6-0.5,9.2-1.1,13.7-1.7c3.8-0.5,7.6-0.9,11.4-1.4
          		c3.2-0.4,6.4-0.9,9.5-1.4c5.6-0.9,11.1-1.8,16.6-2.7c5.1-0.9,10.3-1.7,15.4-2.7c8.5-1.6,16.9-3.4,25.4-5.2
          		c7.2-1.5,14.3-3.2,21.4-4.8c16.6-3.9,33.1-8.4,49.4-13.3c28.7-8.5,56.9-18.5,84.6-29.8c3.3-1.4,6.7-2.8,10-4.2
          		c2.8-1.2,5.8-1.8,8.8-1.6c4.7,0.3,8.8,2.1,11.6,6.1c3.2,4.5,3,9.2,0.4,13.9c-1.5,2.4-3.4,4.5-5.8,6.1c-9.7,7.2-19.7,13.9-29.9,20.3
          		c-12.5,7.8-25.4,15.1-38.6,21.8c-18.5,9.5-37.5,18-56.8,25.6c-12.1,4.8-24.4,9.2-36.8,13.2c-16.4,5.3-33,10.1-49.7,14.3
          		c-11.3,2.8-22.6,5.4-34.1,7.7c-8.3,1.7-16.6,3-24.9,4.4c-5.9,1-11.9,2-17.8,2.8c-5.5,0.8-11,1.4-16.4,2c-4.6,0.6-9.2,1.1-13.8,1.6
          		C688.3,676.9,684.2,677.2,680,677.4z"/>
          	<path class="st0" d="M564.2,290c0.2,3.7,0.2,7.2,0.5,10.7c0.4,4.1,1,8.2,1.7,12.2c2,11.2,5.5,21.8,11.8,31.3
          		c6.1,9.2,14.7,16.5,24.8,20.9c6.8,3,14,5.1,21.3,6.3c9.2,1.5,18.6,2.1,27.9,1.8c4.7-0.1,9.4-0.3,14.1-0.8
          		c8.7-0.7,17.3-2.2,25.8-4.4c7.8-2.1,15.7-4.4,23.5-6.6c1.9-0.6,3.9-0.9,5.9-1c2.5,0,4.7,1.6,5.4,4c0.4,1,0.6,2.1,0.6,3.2
          		c0.1,6.2,0.1,12.5,0,18.7c0.1,3.9-2,7.6-5.5,9.4c-3.6,2-7.3,3.8-11.2,5.1c-9.6,3.4-19.5,6.1-29.6,8c-6.3,1.2-12.7,2.1-19,2.8
          		c-3.7,0.4-7.4,0.6-11.1,0.8c-3,0.2-6,0.4-9,0.4c-8.5,0-17.1-0.4-25.5-1.5c-10.6-1.2-21-3.7-31-7.3c-15.4-5.5-29.1-14.9-39.9-27.2
          		c-7.9-9.2-14.1-19.6-18.4-30.9c-3.7-9.5-6.4-19.5-8-29.6c-1.2-7.3-2-14.7-2.5-22.1c-0.5-8.8-0.6-17.7-0.2-26.5
          		c0.2-6.2,0.8-12.4,1.7-18.6c2.4-16.8,6.9-33,15.1-48c9.4-17.2,22.4-31,39.6-40.8c9.1-5.1,18.9-8.8,29.2-11.1
          		c7.2-1.6,14.6-2.6,22-3.1c6.1-0.4,12.2-0.5,18.4-0.2c8.9,0.3,17.8,1.7,26.4,4c13.3,3.6,25.2,9.7,35.4,19.1
          		c6.2,5.7,11.4,12.4,15.6,19.8c5.2,9.4,8.8,19.6,10.7,30.2c2.1,11.1,2.9,22.3,2.4,33.6c-0.2,4.7-0.3,9.4-0.7,14.1
          		c-0.3,5.4-1.1,10.8-2.2,16.1c-1.3,5.3-3.4,6.9-8.9,7.2c-1.1,0-2.2,0-3.3,0H567.6C566.5,289.9,565.4,290,564.2,290z M687.7,256.8
          		c0.2-2.4,0.5-4.5,0.5-6.6c0.3-7.1-0.1-14.3-1-21.3c-0.9-6.5-2.7-12.8-5.4-18.7c-5.2-11.4-15-20.1-26.9-23.8
          		c-6.5-2-13.3-3.1-20.1-3.3c-3.4-0.1-6.8,0-10.2,0.4c-5,0.4-9.9,1.3-14.8,2.6c-13.1,3.6-24.5,12-31.9,23.4c-4.4,7-7.7,14.6-9.8,22.5
          		c-1.5,6-2.7,12.1-3.4,18.3c-0.1,1-0.2,2-0.2,3c0,1.1-0.4,2.2,0.1,3.2c0.3,0.1,0.6,0.2,0.9,0.2L687.7,256.8z"/>
          	<path class="st0" d="M847.4,192.2c-1.3,0-2.3-0.1-3.3-0.1c-10.6,0-21.1,0-31.7,0c-1.5,0-3-0.2-4.5-0.5c-3.5-0.8-5.4-3.3-6-6.8
          		c-0.1-0.9-0.2-1.8-0.2-2.7c0-4.2,0-8.4,0-12.7c0-0.7,0-1.4,0.1-2.1c0.4-3.6,2.1-6.3,5.7-7.3c2-0.6,4.1-1.1,6.1-1.5
          		c4-0.6,8-0.9,12-1.4c4.2-0.5,8.4-1.1,12.5-1.6c2.2-0.3,4.4-0.5,6.6-0.8c1.3-0.2,2.6-0.4,4-0.6c0.2-1.5,0.5-2.8,0.7-4.2
          		c0.5-4.8,0.9-9.6,1.4-14.4s1.1-9.4,1.6-14.1c0.3-2.7,0.5-5.4,0.8-8.1c0.5-4.9,1.1-9.8,1.6-14.7c0.3-2.4,0.5-4.8,0.7-7.2
          		c0.2-1.5,0.6-3,1.4-4.3c1.2-2.4,3.5-4,6.2-4.3c1.8-0.3,3.6-0.4,5.4-0.4c4.6-0.1,9.3-0.1,13.9,0c2.2,0,4.4,0.1,6.6,0.3
          		c4.5,0.4,7.3,3.3,7.7,7.8c0.1,1,0.1,2,0.1,3v55.8c0,1.1,0.1,2.2,0.1,3.3c1.1,0.3,2.2,0.4,3.4,0.3c19.7,0,39.4,0,59.2,0
          		c1.6,0,3.2,0.1,4.8,0.3c3.5,0.4,6.3,3.1,6.8,6.6c0.2,1.1,0.3,2.2,0.4,3.3c0,6.2,0,12.5,0,18.7c0,1.4-0.2,2.8-0.6,4.2
          		c-0.6,2.8-2.9,5-5.8,5.5c-1.6,0.3-3.2,0.4-4.8,0.5c-19.9,0-39.9,0-59.8,0H897c-0.1,0.7-0.2,1.2-0.3,1.8s0,1.2,0,1.8
          		c0,46.6,0,93.2,0,139.7c-0.1,4.9,0.5,9.8,1.8,14.6c1.3,4.5,3.3,8.6,7,11.8c3,2.5,6.6,4.3,10.4,5.2c6.7,1.7,13.7,2.3,20.6,1.9
          		c7.8-0.5,15.6-1.5,23.3-3.1c1.7-0.3,3.4-0.6,5.1-0.8c1.4-0.2,2.8-0.1,4.2,0.3c1.7,0.4,3.1,1.7,3.5,3.4c0.4,1.3,0.7,2.7,0.7,4.1
          		c0.1,5.7,0.1,11.5,0,17.2c-0.1,1.7-0.3,3.4-0.8,5c-0.5,2.2-1.9,4.1-3.8,5.2c-1.6,1-3.4,1.8-5.2,2.4c-4.9,1.6-9.8,2.8-14.9,3.6
          		c-5.7,1-11.5,1.6-17.3,2c-6.2,0.5-12.5,0.6-18.7,0.3c-11-0.5-21.8-2.2-31.9-6.8c-12.1-5.3-21.7-15.1-26.8-27.3
          		c-3-7-4.9-14.5-5.7-22.1c-0.7-6.2-1-12.4-0.9-18.6c0-45.9,0-91.7,0-137.6L847.4,192.2z"/>
          	<path class="st0" d="M1120.6,359.9c1.1-3.1,2-5.5,2.9-7.9c6.3-18,12.6-36,18.9-54c7.9-22.4,15.7-44.9,23.6-67.3
          		c5.2-14.7,10.3-29.3,15.5-44c2.4-6.8,4.8-13.6,7.2-20.4c1-2.6,2.1-5.2,3.4-7.7c1.5-2.9,4.4-4.8,7.7-5c2.3-0.2,4.6-0.4,6.9-0.4
          		c8.2-0.1,16.3-0.1,24.4,0c1.5,0,3,0.1,4.5,0.4c2.8,0.5,4.3,2.3,4.4,5.2c0.1,2.4-0.3,4.8-1.2,7c-9.1,22.8-18.1,45.5-27,68.3
          		c-9.2,23.3-18.4,46.7-27.7,70c-6.4,16.1-12.7,32.1-19.1,48.1c-5.6,14.1-11.2,28.2-16.8,42.3c-0.5,1.3-1.2,2.5-1.8,3.8
          		c-1.9,4.4-5.5,6.5-10.2,6.8c-0.8,0.1-1.6,0.1-2.4,0.1c-9.9,0-19.7,0-29.6-0.1c-1.4-0.1-2.8-0.3-4.2-0.6c-2.8-0.4-5.3-2.2-6.6-4.8
          		c-1-1.9-2-3.7-2.8-5.7c-14.7-36.6-29.3-73.3-43.8-109.9c-8.6-21.6-17.2-43.3-25.8-64.9c-6.2-15.7-12.5-31.3-18.7-47
          		c-1-2.6-2-5.2-3-7.9c-0.7-1.7-1-3.5-0.9-5.3c0.2-3.2,1.7-5.1,4.8-5.7c1.2-0.2,2.4-0.4,3.6-0.4c9.5,0,18.9,0,28.4,0c2,0,4,0.2,6,0.5
          		c3.1,0.2,5.8,2,7.3,4.7c1.1,2,2.1,4.1,3,6.2c2.5,6.9,4.9,13.8,7.4,20.7l19.9,56.9l23.6,67l17.1,48.5
          		C1119.9,358.1,1120.1,358.6,1120.6,359.9z"/>
          	<path class="st0" d="M412.5,219.5v3.8c0,56.7,0,113.4,0,170.2c0.1,1.9-0.1,3.8-0.5,5.7c-1,3.5-3.4,5.3-6.8,6c-1,0.2-2,0.2-3,0.2
          		h-29c-1.6,0-3.2-0.2-4.7-0.7c-2.3-0.8-4.1-2.6-4.8-5c-0.4-1.4-0.6-2.7-0.6-4.2c-0.1-2.1,0-4.2,0-6.3c0-74.9,0-149.9,0-224.8
          		c-0.1-1.7,0.1-3.4,0.5-5.1c0.5-2.5,2.4-4.5,4.9-5.2c1.6-0.5,3.3-0.8,5-0.8c7-0.1,14.1-0.1,21.1,0c1.5,0,3,0.2,4.5,0.5
          		c3.3,0.6,5.9,3.1,6.6,6.3c0.5,2.1,0.9,4.3,1.2,6.5c0.6,4.4,1.1,8.8,1.7,13.1c0.3,2.4,0.5,4.8,0.8,7.2c0.1,1,0.3,1.9,0.5,3.2
          		c1.4-1.1,2.7-2.4,3.9-3.7c8.8-8.9,18-17.2,28.9-23.5c8.3-4.8,17.3-8.2,26.7-9.9c8-1.4,16.2-1.9,24.3-1.5c1.7,0.1,3.4,0.2,5.1,0.4
          		c1.2,0.2,2.4,0.4,3.5,0.9c2.8,1,4.8,3.6,4.9,6.7c0.1,0.8,0.1,1.6,0.1,2.4c0,8.3,0,16.7,0,25c0.1,1.7-0.1,3.4-0.6,5.1
          		c-0.7,2.2-2.4,3.8-4.6,4.3c-1.6,0.4-3.3,0.6-5,0.5c-7.3-0.3-14.6-1.2-22-0.9c-12.9,0.5-25.5,3.2-37.4,8.2
          		c-8.5,3.6-16.5,8.4-23.6,14.2C413.5,218.5,413.1,218.9,412.5,219.5z"/>
          	<path class="st0" d="M298.4,279.2c0,38.4,0,76.8,0,115.2c0,1.5-0.1,3-0.4,4.5c-0.9,4-3.8,5.7-7.2,6.2c-0.8,0.1-1.6,0.1-2.4,0.1
          		c-9.7,0-19.3,0-29,0c-1.5,0-3-0.2-4.5-0.6c-2.7-0.6-4.8-2.8-5.3-5.6c-0.3-1.5-0.5-3-0.6-4.5c0-0.5,0-1,0-1.5
          		c0-75.9,0-151.9,0-227.8c-0.1-1.9,0.1-3.8,0.5-5.7c0.6-3.2,3.2-5.6,6.3-6.1c1.5-0.3,3-0.4,4.5-0.4c9.1,0,18.1,0,27.2,0
          		c1.3,0,2.6,0.1,3.9,0.4c4.9,0.9,6.5,3.9,7,7.5c0.1,1.1,0.1,2.2,0.1,3.3L298.4,279.2z"/>
          	<path class="st0" d="M1036.1,466.5c6.1,0.3,12.3,0.4,18.4,0.9c10.4,0.8,20.8,2.3,30.8,5.4c2.8,0.9,5.4,2.1,8.1,3.2
          		c4.8,2,7.1,5.9,7.9,10.9c0.9,5.3,0.8,10.6,0.7,15.9c-0.3,6.9-1,13.8-2.3,20.6c-2,11.5-4.9,22.8-8.6,33.8
          		c-5.3,15.9-12.4,31.2-21.2,45.5c-5.2,8.4-11.1,16.3-17.8,23.5c-3.7,4.1-7.7,7.9-12,11.4c-1.4,1.3-3.1,2.3-4.9,2.9
          		c-1.1,0.4-2.3,0.6-3.5,0.6c-3.7,0.1-6-2.6-5.5-6.2c0.3-1.6,0.7-3.1,1.4-4.6c1.9-5.1,4-10.1,6-15.1c5.4-13.8,10.5-27.8,15-41.9
          		c3.1-9.6,5.6-19.3,7.6-29.1c0.8-3.9,1.2-7.9,1.6-11.9c0.3-3.4,0.2-6.8-0.2-10.2c-0.1-0.6-0.1-1.2-0.2-1.8c-0.8-5-4.1-9.2-8.7-11.2
          		c-4.1-1.8-8.5-3.1-13-3.8c-4.7-0.8-9.4-1.1-14.1-1.4c-6.6-0.4-13.3-0.4-19.9-0.3c-5.3,0.1-10.6,0.5-15.9,0.9
          		c-3.6,0.2-7.2,0.4-10.8,0.8c-6,0.5-12,1.1-18,1.7c-4.5,0.4-9,0.9-13.5,1.4c-2.4,0.3-4.8,0.7-7.2,0.9c-1.6,0.2-3.2,0.2-4.8,0.3
          		c-0.4,0-0.8,0-1.2-0.1c-4.3-0.7-6.2-3.5-4.6-7.8c0.5-1.2,1.2-2.3,2.1-3.3c1.2-1.3,2.6-2.5,4.1-3.5c11.2-7.7,23.5-13.7,36.4-17.8
          		c10.1-3.3,20.5-5.8,31-7.4c7.4-1.2,14.9-2,22.4-2.4C1026.3,467,1031.2,466.8,1036.1,466.5z"/>
          	<path class="st0" d="M274.1,49c4.6-0.3,9.3,0.5,13.6,2.2c7.4,2.9,13.2,9,15.5,16.6c2.3,7,2.3,14.6,0,21.6c-2.9,9.1-9,15-18.2,17.7
          		c-7.5,2.3-15.4,2.2-22.8-0.2c-9.2-2.9-15.2-9.1-17.9-18.4c-2-6.6-1.9-13.6,0.2-20.2c3.2-10.2,10.3-16.2,20.6-18.7
          		C268.1,49.1,271.1,48.8,274.1,49z"/>
              </g>
         </svg>
      `;
    }

    function renderAmazonArrowlogo() {
      return html`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0px" y="0px" viewBox="0 0 733 200" style="enable-background:new 0 0 1276 712;" xml:space="preserve" class="remote-logo"><g><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#0f0f0f;fill-rule:nonzero;opacity:1" transform="matrix(.75 0 0 .75 -112.16 -331.09)" d="M680 677.4c-1.4 0-2.8-.1-4.2-.1h-97.7c-1.5 0-3 0-4.5.1-4.5-.3-9-.7-13.5-1.1-2.4-.2-4.8-.5-7.2-.7-8.1-.8-16.2-1.9-24.2-3-12.6-1.7-25.2-3.8-37.7-6.3-9.3-1.8-18.7-3.9-27.9-6.1-17-4-33.8-8.7-50.4-14.1-15.3-4.9-30.4-10.4-45.3-16.3-14.9-6-29.6-12.4-44.1-19.5-32.2-15.6-63.2-33.6-92.6-54-14-9.7-27.6-19.9-40.8-30.6-9.3-7.5-18.4-15.3-27.3-23.3-1.2-1.1-2.3-2.2-3.4-3.4-1.4-1.7-2.2-3.9-2.2-6.1 0-3.9 2.9-7.2 6.8-7.6 2.4-.3 4.9.1 7 1.3 2.7 1.4 5.2 3 7.9 4.4 8.6 4.7 17.2 9.6 25.9 14.1s17.3 8.9 26.1 13.2c14.4 7 28.9 13.5 43.7 19.7 15 6.3 30.2 12.2 45.5 17.7 17 6.1 34.2 11.7 51.5 16.8 16.8 5 33.8 9.5 50.9 13.5 14.8 3.5 29.6 6.7 44.5 9.3 9.5 1.7 19 3.3 28.5 4.8 7.7 1.2 15.5 2.4 23.2 3.4 6 .8 12 1.4 18 2 4.8.5 9.6 1.1 14.4 1.6 2.8.3 5.6.5 8.4.7 4.3.4 8.6.8 12.9 1.1 4.6.3 9.2.6 13.8.8 6.6.4 13.2.7 19.9 1 3.1.1 6.2.1 9.3.2 3.5 0 7 .1 10.6.1 6 .1 12.1.3 18.1.3 9.1-.1 18.3-.3 27.4-.6 4.1-.1 8.2-.3 12.3-.6 7.5-.5 15-1 22.5-1.6 3.6-.3 7.2-.5 10.8-.8 5.1-.5 10.2-1.1 15.3-1.6 2.2-.2 4.4-.4 6.6-.7 4.6-.5 9.2-1.1 13.7-1.7 3.8-.5 7.6-.9 11.4-1.4 3.2-.4 6.4-.9 9.5-1.4 5.6-.9 11.1-1.8 16.6-2.7 5.1-.9 10.3-1.7 15.4-2.7 8.5-1.6 16.9-3.4 25.4-5.2 7.2-1.5 14.3-3.2 21.4-4.8 16.6-3.9 33.1-8.4 49.4-13.3 28.7-8.5 56.9-18.5 84.6-29.8 3.3-1.4 6.7-2.8 10-4.2 2.8-1.2 5.8-1.8 8.8-1.6 4.7.3 8.8 2.1 11.6 6.1 3.2 4.5 3 9.2.4 13.9-1.5 2.4-3.4 4.5-5.8 6.1-9.7 7.2-19.7 13.9-29.9 20.3-12.5 7.8-25.4 15.1-38.6 21.8-18.5 9.5-37.5 18-56.8 25.6-12.1 4.8-24.4 9.2-36.8 13.2-16.4 5.3-33 10.1-49.7 14.3-11.3 2.8-22.6 5.4-34.1 7.7-8.3 1.7-16.6 3-24.9 4.4-5.9 1-11.9 2-17.8 2.8-5.5.8-11 1.4-16.4 2-4.6.6-9.2 1.1-13.8 1.6-4.1.5-8.2.8-12.4 1z"/><path style="stroke:none;stroke-width:1;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:4;fill:#0f0f0f;fill-rule:nonzero;opacity:1" transform="matrix(.75 0 0 .75 -112.16 -331.09)" d="M1036.1 466.5c6.1.3 12.3.4 18.4.9 10.4.8 20.8 2.3 30.8 5.4 2.8.9 5.4 2.1 8.1 3.2 4.8 2 7.1 5.9 7.9 10.9.9 5.3.8 10.6.7 15.9-.3 6.9-1 13.8-2.3 20.6-2 11.5-4.9 22.8-8.6 33.8-5.3 15.9-12.4 31.2-21.2 45.5-5.2 8.4-11.1 16.3-17.8 23.5-3.7 4.1-7.7 7.9-12 11.4-1.4 1.3-3.1 2.3-4.9 2.9-1.1.4-2.3.6-3.5.6-3.7.1-6-2.6-5.5-6.2.3-1.6.7-3.1 1.4-4.6 1.9-5.1 4-10.1 6-15.1 5.4-13.8 10.5-27.8 15-41.9 3.1-9.6 5.6-19.3 7.6-29.1.8-3.9 1.2-7.9 1.6-11.9.3-3.4.2-6.8-.2-10.2-.1-.6-.1-1.2-.2-1.8-.8-5-4.1-9.2-8.7-11.2-4.1-1.8-8.5-3.1-13-3.8-4.7-.8-9.4-1.1-14.1-1.4-6.6-.4-13.3-.4-19.9-.3-5.3.1-10.6.5-15.9.9-3.6.2-7.2.4-10.8.8-6 .5-12 1.1-18 1.7-4.5.4-9 .9-13.5 1.4-2.4.3-4.8.7-7.2.9-1.6.2-3.2.2-4.8.3-.4 0-.8 0-1.2-.1-4.3-.7-6.2-3.5-4.6-7.8.5-1.2 1.2-2.3 2.1-3.3 1.2-1.3 2.6-2.5 4.1-3.5 11.2-7.7 23.5-13.7 36.4-17.8 10.1-3.3 20.5-5.8 31-7.4 7.4-1.2 14.9-2 22.4-2.4 4.6-.3 9.5-.5 14.4-.8z"/></g></svg>
      `;
    }

    function renderAmazonNameWithArrowLogo() {
      return html`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0, 0, 400,140.46511627906978" xml:space="preserve" x="0px" y="0px" class="remote-logo" style="margin-top: 90px;"><g id="svgg"><path id="path0" d="M36.047 13.922 C 25.440 15.663,18.409 21.339,16.256 29.898 C 15.386 33.355,15.944 33.716,23.234 34.417 C 30.107 35.077,29.928 35.133,31.381 31.849 C 35.652 22.191,47.907 24.668,47.907 35.188 L 47.907 38.454 43.140 39.025 C 24.310 41.281,17.443 45.404,14.649 56.130 C 9.599 75.517,31.970 87.543,47.354 73.711 C 50.201 71.152,50.324 71.150,52.031 73.631 C 56.460 80.068,57.623 80.160,64.096 74.585 C 70.037 69.467,69.989 69.602,67.234 65.658 C 64.385 61.578,64.186 60.199,64.186 44.481 C 64.186 26.725,63.554 23.541,59.226 19.494 C 54.323 14.909,44.469 12.540,36.047 13.922 M186.744 13.922 C 176.330 15.631,169.990 20.534,167.390 28.888 C 165.975 33.434,166.192 33.603,174.534 34.465 C 180.636 35.095,181.475 34.834,182.015 32.134 C 182.650 28.960,186.790 26.067,190.698 26.067 C 195.996 26.067,198.575 29.032,198.594 35.144 L 198.605 38.427 190.985 39.444 C 173.765 41.743,166.724 46.806,165.131 58.037 C 162.420 77.148,182.807 86.721,198.346 73.634 L 201.111 71.305 203.071 73.969 C 207.640 80.175,208.370 80.214,214.845 74.602 C 220.532 69.673,220.651 69.411,218.542 66.499 C 215.103 61.751,215.144 62.006,214.858 43.721 C 214.565 24.975,214.487 24.520,210.880 20.508 C 206.094 15.184,195.940 12.413,186.744 13.922 M103.899 14.583 C 99.212 15.774,95.610 18.697,93.516 23.008 L 92.605 24.884 92.581 20.847 C 92.549 15.291,92.629 15.349,84.923 15.349 C 76.242 15.349,77.209 11.371,77.209 47.058 C 77.209 82.676,76.169 78.605,85.269 78.605 C 94.395 78.605,93.488 80.962,93.488 57.232 C 93.488 45.213,93.678 36.835,93.983 35.415 C 95.655 27.619,105.435 26.650,107.490 34.077 C 107.875 35.469,108.008 42.004,107.942 56.367 C 107.830 81.094,106.905 78.605,116.207 78.605 C 125.083 78.605,124.186 80.942,124.186 57.818 C 124.186 38.303,124.445 34.648,125.977 32.558 C 129.093 28.308,135.775 28.118,138.015 32.217 C 138.762 33.584,138.849 35.710,138.967 55.581 C 139.121 81.421,138.135 78.605,147.032 78.605 C 155.910 78.605,154.946 81.978,154.786 51.460 L 154.651 25.814 153.433 23.216 C 147.911 11.442,127.228 11.472,123.487 23.259 C 123.044 24.655,122.683 24.419,121.030 21.656 C 117.442 15.657,110.671 12.862,103.899 14.583 M298.774 14.615 C 285.440 17.133,277.963 28.760,277.963 46.977 C 277.963 67.645,287.466 79.560,303.922 79.525 C 321.679 79.488,332.781 61.905,329.312 39.314 C 326.649 21.981,313.990 11.742,298.774 14.615 M365.706 14.444 C 361.132 15.347,357.594 18.136,355.118 22.791 L 353.510 25.814 353.499 21.063 C 353.490 16.848,353.387 16.257,352.589 15.830 C 351.292 15.136,339.868 15.202,339.163 15.907 C 338.059 17.010,338.392 77.528,339.504 78.123 C 341.175 79.017,352.760 78.736,353.625 77.780 C 354.279 77.057,354.391 74.526,354.535 57.199 C 354.706 36.517,354.794 35.590,356.865 32.546 C 360.199 27.648,366.045 27.784,368.605 32.821 C 369.488 34.558,369.542 35.722,369.674 55.802 C 369.840 81.258,368.901 78.605,377.747 78.605 C 387.145 78.605,386.185 81.574,385.918 53.326 C 385.653 25.244,385.460 23.888,381.050 19.006 C 377.570 15.154,371.401 13.320,365.706 14.444 M229.395 15.907 C 228.463 16.840,228.641 26.700,229.605 27.501 C 230.182 27.981,232.851 28.197,240.345 28.372 L 250.317 28.605 246.877 33.488 C 225.578 63.731,226.518 62.053,226.514 69.846 C 226.510 77.165,227.179 78.065,231.128 76.064 C 240.755 71.186,254.759 70.813,265.639 75.147 C 270.087 76.918,271.392 77.100,271.811 76.008 C 272.287 74.767,272.123 64.647,271.611 63.690 C 270.386 61.400,262.537 58.786,254.613 58.027 L 248.986 57.488 255.726 47.930 C 259.433 42.673,264.371 35.651,266.698 32.326 L 270.930 26.279 271.089 21.495 C 271.198 18.214,271.071 16.496,270.684 16.029 C 269.925 15.115,230.304 14.998,229.395 15.907 M307.428 27.202 C 313.604 30.396,314.956 57.591,309.296 64.786 C 306.278 68.623,300.348 68.160,297.847 63.893 C 293.908 57.172,293.838 34.517,297.741 29.556 C 300.024 26.654,304.340 25.605,307.428 27.202 M47.816 53.140 C 47.451 62.310,43.833 67.442,37.733 67.442 C 29.210 67.442,28.768 53.144,37.183 49.647 C 38.778 48.984,43.987 48.007,46.221 47.952 L 48.024 47.907 47.816 53.140 M198.505 53.140 C 198.109 62.691,194.321 67.858,188.093 67.341 C 183.971 66.999,181.860 64.277,181.860 59.302 C 181.860 52.235,187.225 48.191,196.919 47.952 L 198.722 47.907 198.505 53.140 M243.256 81.389 C 228.857 83.572,219.241 91.284,232.867 89.721 C 239.505 88.959,250.067 88.951,250.823 89.707 C 251.112 89.996,251.700 90.233,252.129 90.233 C 255.453 90.233,254.387 98.588,249.481 110.993 C 246.496 118.538,247.584 119.927,252.619 115.000 C 259.876 107.900,266.457 88.534,263.140 84.042 C 261.471 81.783,250.399 80.306,243.256 81.389 M66.777 85.382 C 65.908 86.252,65.914 86.189,66.554 87.536 C 66.995 88.465,68.278 89.636,73.844 94.186 C 74.469 94.698,75.378 95.483,75.863 95.930 C 76.348 96.378,76.871 96.744,77.026 96.744 C 77.182 96.744,78.314 97.529,79.543 98.488 C 80.771 99.448,83.151 101.070,84.832 102.093 C 86.512 103.116,87.891 104.227,87.897 104.562 C 87.902 104.897,88.107 105.048,88.351 104.897 C 88.595 104.746,90.741 105.739,93.119 107.103 C 95.496 108.468,98.119 109.859,98.948 110.195 C 99.776 110.531,100.319 111.023,100.155 111.289 C 99.985 111.563,100.081 111.633,100.377 111.450 C 100.664 111.273,101.690 111.529,102.658 112.020 C 105.733 113.580,113.579 116.674,118.146 118.128 C 120.573 118.901,122.977 119.723,123.488 119.956 C 124.000 120.188,126.721 120.842,129.535 121.409 C 132.349 121.976,134.965 122.547,135.349 122.680 C 136.342 123.022,136.653 123.073,144.651 124.221 C 158.125 126.156,179.965 125.596,191.395 123.024 C 192.930 122.678,195.442 122.251,196.977 122.074 C 198.512 121.897,199.872 121.608,200.000 121.432 C 200.260 121.075,204.016 120.062,206.512 119.676 C 207.407 119.538,208.380 119.232,208.673 118.997 C 208.967 118.762,209.681 118.478,210.259 118.367 C 214.875 117.478,232.958 109.228,238.456 105.503 C 239.525 104.779,240.624 104.186,240.898 104.186 C 241.171 104.186,241.395 103.991,241.395 103.752 C 241.395 103.514,241.784 103.195,242.258 103.045 C 243.660 102.600,246.512 99.463,246.512 98.367 C 246.512 96.103,242.980 94.880,240.285 96.210 C 238.420 97.131,232.318 99.484,229.767 100.266 C 228.360 100.697,225.463 101.652,223.328 102.388 C 221.193 103.124,217.635 104.150,215.421 104.668 C 213.207 105.187,210.663 105.808,209.767 106.048 C 207.561 106.641,199.114 108.222,195.116 108.790 C 193.326 109.045,190.500 109.469,188.836 109.733 C 184.407 110.436,166.615 111.237,161.689 110.955 C 159.353 110.821,155.244 110.594,152.558 110.450 C 147.383 110.173,144.247 109.792,134.884 108.299 C 128.517 107.284,125.738 106.752,123.256 106.072 C 122.360 105.827,120.058 105.276,118.140 104.847 C 111.693 103.407,99.606 99.408,92.326 96.306 C 91.814 96.088,90.244 95.449,88.837 94.886 C 86.674 94.020,74.114 87.849,69.535 85.402 C 67.808 84.480,67.681 84.479,66.777 85.382 " stroke="none" fill="#0f0f0f" fill-rule="evenodd"></path></g></svg>`;
    }

    // Render Amazon Fire Remote Style AF1
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF1' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <div> </div>
          <div class="notch notchtall"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderAmazonNameWithArrowLogo()}
      </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF2
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF2' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <div> </div>
          <div class="notch notchtall"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <div> </div>
          <button class="remote-button" id="tv-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:television-classic"></ha-icon>
          </button>
          <div> </div>

          <div class="eightygap"> </div>
          <div> </div>
          <div> </div>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderAmazonArrowlogo()}

      </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF3
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF3' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="notch"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <div> </div>
          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-plus"></ha-icon>
          </button>
          <div> </div>

          <div> </div>
          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-minus"></ha-icon>
          </button>
          <div> </div>

          <div> </div>
          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-mute"></ha-icon>
          </button>
          <div> </div>

          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderAmazonArrowlogo()}

      </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF4
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF4' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="notch"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button teal" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-mute"></ha-icon>
          </button>
          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-plus"></ha-icon>
          </button>
          <button class="remote-button" id="tv-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:television-classic"></ha-icon>
          </button>


          <div> </div>
          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-minus"></ha-icon>
          </button>
          <div></div>

          ${drawAppLaunchButtons(this, this._config)}
          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderfiretvlogo()}

        </div>

      </ha-card>
    `;
    }


    // Render Amazon Fire Remote Style AF5
    if ( getDeviceAttribute('defaultRemoteStyle') == 'AF5' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="remote-body">

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="notch"> </div>
          <div style="display: inherit;"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div> </div>
          <button class="remote-button keyboard-button teal" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>
          <div> </div>

          <div class="dpadContainer">
            <button class="centerbutton" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>

          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:arrow-u-left-top"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:home-outline"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>

          <button class="remote-button round-top" id="volume-up-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-plus"></ha-icon>
          </button>
          <div> </div>
          <button class="remote-button round-top" id="channel-up-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-up"></ha-icon>
          </button>

          <button class="remote-button round-bottom" id="volume-down-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-minus"></ha-icon>
          </button>
          <button class="remote-button" id="tv-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:television-classic"></ha-icon>
          </button>
          <button class="remote-button round-bottom" id="channel-down-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-down"></ha-icon>
          </button>

          <button class="remote-button" id="mute-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-mute"></ha-icon>
          </button>
          <button class="remote-button" id="settings-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:cog"></ha-icon>
          </button>
          <button class="remote-button" id="app-switch-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:file-multiple-outline"></ha-icon>
          </button>

          ${drawAppLaunchButtons(this, this._config)}
          ${drawDeviceName(this, this._config, 'bottom')}
          ${renderfiretvlogo()}

      </div>

      </ha-card>
    `;
    }


    // Render NVIDIA Shield Remote Style NS1
    if ( getDeviceAttribute('defaultRemoteStyle') == 'NS1' ) {
    return html`
      <ha-card>

      ${cssVars}

      <div class="shield-remote-body ns1-body">

          <div class="shieldNotch"> </div>

          <div class="two-col-span"> ${drawDeviceName(this, this._config, 'top')} </div>

          <div class="dpadContainer shieldDpad">
            <button class="centerbutton centerbuttonShield" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton dpadbuttonShield" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>


          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-left-outline"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:circle-outline"></ha-icon>
          </button>

          <div class="two-col-span">
            <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
              <ha-icon icon="mdi:keyboard-outline"></ha-icon>
            </button>
          </div>

          <div class="ns1-wings">
            <div id="wingL"> </div>
            <div id="ns1spine">
              <button class="ns1volume" id="volume-up-button" @click=${this.buttonClicked}></button>
              <button class="ns1volume" id="volume-down-button" @click=${this.buttonClicked}></button>
            </div>
            <div id="wingR"> </div>
          </div>

          ${drawDeviceName(this, this._config, 'bottom')}

      </div>

      </ha-card>
    `;
    }


    // Render NVIDIA Shield Remote Style NS2
    if ( getDeviceAttribute('defaultRemoteStyle') == 'NS2' ) {
    return html`
      <ha-card>

      ${cssVars}

        <div class="shield-remote-body">

          <div class="shieldNotch notchtall"> </div>

          <div class="two-col-span"> ${drawDeviceName(this, this._config, 'top')} </div>

          <button class="remote-button${powerStatusClass}" id="power-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <button class="remote-button" id="hamburger-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu"></ha-icon>
          </button>


          <div class="dpadContainer shieldDpad">
            <button class="centerbutton centerbuttonShield" id="center-button" @click=${this.buttonClicked}> </button>
            <div class="directionButtonContainer">
              <button class="dpadbutton dpadbuttonShield" id="up-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="right-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="left-button" @click=${this.buttonClicked}></button>
              <button class="dpadbutton dpadbuttonShield" id="down-button" @click=${this.buttonClicked}></button>
            </div>
          </div>


          <button class="remote-button" id="back-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:menu-left"></ha-icon>
          </button>
          <button class="remote-button${homeStatusClass}" id="home-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:circle"></ha-icon>
          </button>

          <button class="remote-button" id="fastforward-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:fast-forward"></ha-icon>
          </button>
          <button class="remote-button keyboard-button" id="keyboard-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:keyboard-outline"></ha-icon>
          </button>

          <button class="remote-button${playingStatusClass}" id="playpause-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:play-pause"></ha-icon>
          </button>
          <button class="remote-button" id="volume-up-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-high"></ha-icon>
          </button>

          <button class="remote-button" id="rewind-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:rewind"></ha-icon>
          </button>
          <button class="remote-button" id="volume-down-button" @click=${this.buttonClicked}>
            <ha-icon icon="mdi:volume-medium"></ha-icon>
          </button>

          ${drawAppLaunchButtons(this, this._config, 2, 6)}
          ${drawDeviceName(this, this._config, 'bottom')}

        </div>

      </ha-card>
    `;
    }

  }


  // Remote Button Click Handler
  buttonClicked(clicked) {

    // Refresh the appmap with any configured HDMI inputs (max 4)
    handlehdmi(this._config, 4)

    // Inspect user prefs
    const deviceType = this._config.device_type;
    const compatibility_mode = this._config.compatibility_mode || 'default';
    const overrides = this._config.button_overrides;

    // Check for button override before proceeding
    if(typeof overrides !== 'undefined' && overrides !== null) {
        if(typeof overrides[clicked.target.id] !== 'undefined') {
            const overrideDef = overrides[clicked.target.id];
            if(overrideDef !== null) {
              if(typeof overrideDef.script !== 'undefined') {
                // handle overrides via external script
                try{ this.hass.callService("script", overrideDef.script) }
                catch { return; }
                fireEvent(this, 'haptic', 'light'); // haptic feedback on success
                return;
              }
              else if(typeof overrideDef.service !== 'undefined' && typeof overrideDef.target !== 'undefined') {
                // handle overrides via yaml instructions
                const svcarray = overrideDef.service.split(".");
                var data = Object;
                if(typeof overrideDef.data !== 'undefined') {
                  var extraData = JSON.parse(JSON.stringify(overrideDef.data));
                  var target = JSON.parse(JSON.stringify(overrideDef.target));
                  data = Object.assign(target, extraData);
                }
                else {
                  data = Object.assign(overrideDef.target);
                }
                try{ this.hass.callService(svcarray[0], svcarray[1], data) }
                catch { return; }
                fireEvent(this, 'haptic', 'light'); // haptic feedback on success
                return;
              }
            }
        }
    }

    // provide haptic feedback for button press
    fireEvent(this, 'haptic', 'light')

    // Choose event listener path for client android device
    var eventListenerBinPath = '';
    if(compatibility_mode == 'default' || compatibility_mode == 'strong' || compatibility_mode == '') {
        eventListenerBinPath = deviceAttributeQuery("defaultEventListenerBinPath", this._config);
    }
    else {
        var eventListenerBinPath = '/dev/input/'+compatibility_mode;
    }

    // Power Button
    if(clicked.target.id == 'power-button') {
      const state = this.hass.states[this._config.entity];
      const stateStr = state ? state.state : 'off';
      if (compatibility_mode == 'strong' && eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'POWER' });
      }
      else if(compatibility_mode == 'strong') {
        this.hass.callService("media_player", "toggle", { entity_id: this._config.entity});
      }
      else if(deviceType == 'fire_stick_4k'   || deviceType == 'fire_tv_stick_4k_max' || 
              deviceType == 'fire_tv_3rd_gen' || deviceType =='fire_stick_second_gen') {
        if(stateStr != 'off' && stateStr != 'unavailable') {
          this.hass.callService("media_player", "turn_off", { entity_id: this._config.entity});
        }
        else {
          this.hass.callService("media_player", "turn_on", { entity_id: this._config.entity});
        }
      }
      else if (deviceType == 'fire_tv_cube_third_gen') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 116 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 116 0 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent /dev/input/event2 1 9 1 && sendevent /dev/input/event2 0 0 0 && sendevent /dev/input/event2 1 9 0 && sendevent /dev/input/event2 0 0 0' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'POWER' });
      }
      return;
      // 116 is the power command for the 4k max
    }


    // Keyboard button
    if(clicked.target.id == 'keyboard-button') {
      var text = prompt("Enter text to send");
      if (text && text != '') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'input text "'+text+'"' });
      }
      return;
    };

    // Up Button
    if(clicked.target.id == 'up-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'UP' });
      }
      else {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 103 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 103 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Left Button
    if(clicked.target.id == 'left-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'LEFT' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 105 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 105 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Center Button
    if(clicked.target.id == 'center-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'CENTER' });
      }
      else {
        if(deviceType == 'fire_tv_4_series' || deviceType == 'fire_tv_toshiba_v35') {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 28 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 28 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
        else {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 96 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 96 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
      }
      return;
    }

    // Right Button
    if(clicked.target.id == 'right-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'RIGHT' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 106 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 106 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Down Button
    if(clicked.target.id == 'down-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'DOWN' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 108 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 108 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Back Button
    if(clicked.target.id == 'back-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'BACK' });
      return;
    }

    // Home Button
    if(clicked.target.id == 'home-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'HOME' });
      return;
    }

    // Hamburger Button
    if(clicked.target.id == 'hamburger-button') {
      if(deviceType == 'shield-tv-pro-2019' || deviceType == 'shield-tv-2019') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'am start -a android.settings.SETTINGS' });
      }
      else if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'MENU' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 139 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 139 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Rewind Button
    if(clicked.target.id == 'rewind-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'REWIND' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 168 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 168 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Play/Pause Button
    if(clicked.target.id == 'playpause-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("media_player", "media_play_pause", { entity_id: this._config.entity});
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 164 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 164 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Fast Forward Button
    if(clicked.target.id == 'fastforward-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'FAST_FORWARD' });
      }
      else {
        if(deviceType == 'fire_tv_4_series' || deviceType == 'fire_tv_toshiba_v35') {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 159 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 159 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
        else {
          this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 208 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 208 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
        }
      }
      return;
    }

    // Volume Up Button
    if(clicked.target.id == 'volume-up-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'VOLUME_UP' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 115 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 115 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Channel Up Button
    if(clicked.target.id == 'channel-up-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 402 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 402 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      return;
    }

    // Volume Down Button
    if(clicked.target.id == 'volume-down-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'VOLUME_DOWN' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 114 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 114 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // TV Button
    if(clicked.target.id == 'tv-button') {
      if (deviceType == 'fire_tv_cube_third_gen') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent 297'});
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 362 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 362 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
    }

    // Channel Down Button
    if(clicked.target.id == 'channel-down-button') {
      this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 403 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 403 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      return;
    }

    // Mute Button
    if(clicked.target.id == 'mute-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'MUTE' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 113 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 113 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // Settings Button
    if(clicked.target.id == 'settings-button') {
      if(compatibility_mode == 'strong'  || eventListenerBinPath == 'undefined' || deviceType == 'fire_tv_cube_third_gen') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'SETTINGS' });
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 249 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 249 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }

    // App Switch (recents) Button
    if(clicked.target.id == 'app-switch-button') {
      if(compatibility_mode == 'strong' || eventListenerBinPath == 'undefined') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'RECENTS' });
      }
      else if (deviceType == 'fire_tv_cube_third_gen') {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'adb shell input keyevent 304'});
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: 'sendevent '+eventListenerBinPath+' 1 757 1 && sendevent '+eventListenerBinPath+' 0 0 0 && sendevent '+eventListenerBinPath+' 1 757 0 && sendevent '+eventListenerBinPath+' 0 0 0' });
      }
      return;
    }


    // App launch button (existing in JSON map)
    const clickedAppButtonID = clicked.target.id;
    const appkey = clickedAppButtonID.substr(0, clickedAppButtonID.indexOf("-button"));
    if(appmap.has(appkey)) {
      var deviceFamily = this._config.device_family;
      var familySpecificAppData = appmap.get(appkey)[deviceFamily];
      if(familySpecificAppData && (familySpecificAppData.adbLaunchCommand || familySpecificAppData.appName)) {
        var adbcommand = familySpecificAppData.adbLaunchCommand;
        var sourceName = familySpecificAppData.appName;
      }
      else {
        var adbcommand = appmap.get(appkey).adbLaunchCommand;
        var sourceName = appmap.get(appkey).appName;
      }

      if (typeof adbcommand == 'undefined') {
        this.hass.callService("media_player", "select_source", { entity_id: this._config.entity, source: sourceName});
      }
      else {
        this.hass.callService("androidtv", "adb_command", { entity_id: this._config.entity, command: adbcommand });
      }
      return;
    }


  }
}
customElements.define('firemote-card', FiremoteCard);


// Allow this card to appear in the card chooser menu
window.customCards = window.customCards || [];
window.customCards.push({
  type: "firemote-card",
  name: "Firemote Card",
  preview: true,
  description: "Remote control card for Amazon FireTV and NVIDIA Shield devices"
});



// Ceate and register the card editor
class FiremoteCardEditor extends LitElement {

  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  // setConfig works the same way as for the card itself
  setConfig(config) {
    this._config = config;
  }

  // This function is called when the input element of the editor loses focus or is changed
  configChanged(ev) {

    const _config = Object.assign({}, this._config);
    _config[ev.target.name.toString()] = ev.target.value;
    this._config = _config;

    // A config-changed event will tell lovelace we have made changed to the configuration
    // this make sure the changes are saved correctly later and will update the preview
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }


  getEntitiesByType(type) {
    return Object.keys(this.hass.states).filter(
      (eid) => eid.substr(0, eid.indexOf('.')) === type
    );
  }

  getEntitiesByPlatform(platformName) {
    return Object.keys(this.hass.entities).filter(
      (eid) => this.hass.entities[eid].platform === platformName
    );
  }

  getDeviceFamiliesDropdown(optionvalue){
    var familykeys = [];
    for(var [key, value] of devicemap.entries()) {
      familykeys.push(key)
    }
    return html `
      <select name="device_family" id="device_family" style="padding: .6em; font-size: 1em;"
          .value=${optionvalue}
          @focusout=${this.configChanged}
          @change=${this.configChanged}
      >
        ${familykeys.map((family) => {
          if(devicemap.get(family).meta.supported) {
            if (family == optionvalue) {
              return html`<option value="${family}" selected>${devicemap.get(family).meta.friendlyName}</option> `
            }
            else {
              return html`<option value="${family}">${devicemap.get(family).meta.friendlyName}</option> `
            }
          }
          else {
            return html`<option value="${family}" disabled>${devicemap.get(family).meta.friendlyName}</option>`
          }
        })}
      </select>
      <br>
    `;
  }


  getDeviceTypeDropdown(optionValue){
    var family = this._config.device_family;
    var optionMenu = String();
    Object.entries(devices).forEach(deviceFamily => {
      const [familyKey,familyValue] = deviceFamily;
      if(familyKey == family) {
        var blankWasDisplayed = false;
        Object.entries(familyValue).forEach(deviceCategory => {
          const [categorykey,categoryvalue] = deviceCategory;
          if(categorykey == 'meta') {return}
          if(optionValue in categoryvalue) {blankWasDisplayed = true}
          if(!(optionValue in categoryvalue) && !(blankWasDisplayed)){
            optionMenu += '<option value="" selected disabled> - - - choose one - - - </option>';
            blankWasDisplayed = true;
          }
          if(categorykey != 'noCategory'){optionMenu += '<optgroup label="'+ categorykey + '">'}
          Object.entries(categoryvalue).forEach(deviceEntry => {
            const [devicekey,deviceproperties] = deviceEntry;
            if(deviceproperties.supported) {
              if(devicekey == this._config.device_type) {
                optionMenu += '<option value="'+ devicekey +'" selected>'+ deviceproperties.friendlyName +'</option>';
              }
              else {
                optionMenu += '<option value="'+ devicekey +'">'+ deviceproperties.friendlyName +'</option>';
              }
            }
            else {
              optionMenu += '<option value="'+ devicekey +'" disabled>'+ deviceproperties.friendlyName +'</option>';
            }
          })
          if(categorykey != 'noCategory'){optionMenu += '</optgroup>'}
        })
      }
    })
    return html `
      <select name="device_type" id="device_type" style="padding: .6em; font-size: 1em;"
        .value=${this._config.device_type} 
        @focusout=${this.configChanged}
        @change=${this.configChanged}
      >
        ${unsafeHTML(optionMenu)}
      </select>
      <br>
    `;
  }


  getAppChoices(buttonIndex, optionvalue, remoteStyle) {
    var family = this._config.device_family;
    // if(remoteStyle == "NS2" && (buttonIndex == 5 || buttonIndex == 6) ) { return }
    if(remoteStyle == "AF4" || remoteStyle == "AF5" || remoteStyle == "NS2") {
      var appkeys = [];
      for (var [key, value] of appmap.entries()) {
        appkeys.push(key)
      }
      var blankOption = html `<option value=""> - - - - </option>`;
      var spacer = '';
      if(!(appmap.has(optionvalue))){
        blankOption = html `<option value="" selected> - - - - </option>`;
      }
      if(buttonIndex == 1) {
        spacer = html `<br>`;
      }

      return html `
        ${spacer}
        App Launch Button ${buttonIndex}:
        <select name="app_launch_${buttonIndex}" id="app_launch_${buttonIndex}" style="padding: .6em; font-size: 1em;"
          .value=${optionvalue}
          @focusout=${this.configChanged}
          @change=${this.configChanged}
        >
          ${blankOption}
          ${appkeys.map((app) => {
           if ((appmap.get(app).deviceFamily && appmap.get(app).deviceFamily.includes(family)) || !(appmap.get(app).deviceFamily)) {
            if (app != optionvalue) {
              return html`<option value="${app}">${appmap.get(app).friendlyName}</option> `
            }
            else {
              return html`<option value="${app}" selected>${appmap.get(app).friendlyName}</option> `
            }
           }
          })}
        </select>
        <br>
      `;
    }
  }

 

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }
    const mediaPlayerEntities = this.getEntitiesByPlatform('androidtv');
    var blankEntity = '';
    if(this._config.entity == '') {
      blankEntity = html `<option value="" selected> - - - - </option> `;
    }

    if(!this._config.device_family) {
        this._config.device_family = devicemap.keys().next().value;
    }


    // Get current device's Attributes AND use any applicable overrides from user conf
    var confRef = this._config;
    function getDeviceAttribute(deviceAttribute){
      return deviceAttributeQuery(deviceAttribute, confRef);
    }

    // Show and hide HDMI inputs if the device has them
    handlehdmi(this._config, getDeviceAttribute('hdmiInputs'));
    return html`
          Android TV Entity:<br>
          <select name="entity" id="entity" style="padding: .6em; font-size: 1em;" .value="${this._config.entity}"
            @focusout=${this.configChanged}
            @change=${this.configChanged} >
            ${blankEntity}
            ${mediaPlayerEntities.map((eid) => {
              if (eid != this._config.entity) {
                return html`<option value="${eid}">${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
              }
              else {
                return html`<option value="${eid}" selected>${this.hass.states[eid].attributes.friendly_name || eid}</option> `;
              }
            })}
          </select>
        <br>
        <br>

        Device Family:<br>
        ${this.getDeviceFamiliesDropdown(this._config.device_family)}
        <br>

        ${devicemap.get(this._config.device_family).meta.friendlyName} Device Type:<br>
        ${this.getDeviceTypeDropdown(this._config.device_type)}
        <br>

        <hr>

        <br>
        <label for="fader">Scale:&nbsp;
          <input type="range" min="20" max="120" .value=${this._config.scale} id="scale" name="scale" @change=${this.configChanged} style="width: 40ch;">
        </label>
        <br>

        <br>
        Remote Style:<br>
        <select name="defaultRemoteStyle_override" id="defaultRemoteStyle_override" style="padding: .6em; font-size: 1em;"
          .value=${this._config.defaultRemoteStyle_override || ''} 
          @focusout=${this.configChanged}
          @change=${this.configChanged}
        >
          <option value="">Default for ${getDeviceAttribute('friendlyName')}</option>
          <option value="AF1">Amazon Fire Style 1</option>
          <option value="AF2">Amazon Fire Style 2</option>
          <option value="AF3">Amazon Fire Style 3</option>
          <option value="AF4">Amazon Fire Style 4</option>
          <option value="AF5">Amazon Fire Style 5</option>
          <option value="NS1">NVIDIA Shield Style 1</option>
          <option value="NS2">NVIDIA Shield Style 2</option>
        </select>
        <br>

        <br>
        Compatibility Mode:<br>
        <select name="compatibility_mode" id="compatibility_mode" style="padding: .6em; font-size: 1em;"
          .value=${this._config.compatibility_mode} 
          @focusout=${this.configChanged}
          @change=${this.configChanged}
        >
          <option value="default">Default for ${getDeviceAttribute('friendlyName')}</option>
          <option value="strong">Strong (Slower)</option>
          <option value="event0">event0</option>
          <option value="event1">event1</option>
          <option value="event2">event2</option>
          <option value="event3">event3</option>
          <option value="event4">event4</option>
          <option value="event5">event5</option>
          <option value="event6">event6</option>
          <option value="event7">event7</option>
          <option value="event8">event8</option>
          <option value="event9">event9</option>
          <option value="event10">event10</option>
          <option value="event11">event11</option>
          <option value="event12">event12</option>
          <option value="event13">event13</option>
        </select>
        <br>
        <br>

        ${this.getAppChoices("1", this._config.app_launch_1, getDeviceAttribute("defaultRemoteStyle"))}
        ${this.getAppChoices("2", this._config.app_launch_2, getDeviceAttribute("defaultRemoteStyle"))}
        ${this.getAppChoices("3", this._config.app_launch_3, getDeviceAttribute("defaultRemoteStyle"))}
        ${this.getAppChoices("4", this._config.app_launch_4, getDeviceAttribute("defaultRemoteStyle"))}
        ${this.getAppChoices("5", this._config.app_launch_5, getDeviceAttribute("defaultRemoteStyle"))}
        ${this.getAppChoices("6", this._config.app_launch_6, getDeviceAttribute("defaultRemoteStyle"))}
        <br>

        <hr>

        <br>
        <label for="visible_name_text">Visible Device Name:<br>
          <input type="text" maxlength="15" .value=${ this._config.visible_name_text || ''} id="visible_name_text" name="visible_name_text" @change=${this.configChanged} @focusout=${this.configChanged} @keyup=${this.configChanged} style="padding: .6em; font-size: 1em; width: 10rem;">
        </label>
        <br>
        <br>
        Name Position:<br>
        <select name="name_position" id="name_position" .value=${this._config.name_position || 'hidden'} @focusout=${this.configChanged} @change=${this.configChanged}  style="padding: .6em; font-size: 1em;">
          <option value="hidden" selected>hidden</option>
          <option value="top">top</option>
          <option value="bottom">bottom</option>
        </select><br>
        <br>
        <label for="visible_name_text_color">Device Name Text Color:<br><input type="color" name="visible_name_text_color" id="visible_name_text_color" .value=${this._config.visible_name_text_color || '#000000'} @change=${this.configChanged}></label>
    `;
  }
}

customElements.define("firemote-card-editor", FiremoteCardEditor);
