
/**

 Copyright 2023 Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

// Harshad Joshi, 2023
// Release data - 23 May 2023


module.exports = function(RED) {
    function EnergyMeterNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            try {
                var rawData = new ArrayBuffer(4);
                var intView = new Uint16Array(rawData);
                var fltView = new Float32Array(rawData);

                intView[0] = msg.payload[1]; //low
                intView[1] = msg.payload[0]; //high

                msg.payload = parseFloat(fltView[0].toFixed(1));
                node.send(msg);
                node.status({fill:"blue",shape:"ring",text:msg.topic+" : "+msg.payload});    

            } catch(err) {
                node.error('Failed processing input: ' + err);
            }
        });
    }
    RED.nodes.registerType("energy-meter", EnergyMeterNode);
}

