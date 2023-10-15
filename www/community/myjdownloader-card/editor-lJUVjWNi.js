import{S as e,l as t,_ as a,n as s,t as i,e as o,x as l,a as n,s as r}from"./myjdownloader-card-BLWw-wdm.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=[{name:"header_title",selector:{text:{}}},{name:"sensor_name",selector:{text:{}}},{name:"default_instance",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"display_mode",selector:{select:{options:["compact","full"].map((e=>({value:e,label:t(`config.display_mode_label.${e}`)})))}}},{name:"list_mode",selector:{select:{options:["full","packages","links"].map((e=>({value:e,label:t(`config.list_mode_label.${e}`)})))}}}]},{name:"",type:"grid",schema:[{name:"hide_title",selector:{boolean:{}}},{name:"hide_instance",selector:{boolean:{}}},{name:"hide_play",selector:{boolean:{}}},{name:"hide_pause",selector:{boolean:{}}},{name:"hide_stop",selector:{boolean:{}}},{name:"hide_speed_limit",selector:{boolean:{}}}]}];let d=class extends(function(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:a,elementDefinitions:s,shadowRootOptions:i}=t;s&&!a&&(t.registry=new CustomElementRegistry,Object.entries(s).forEach((([e,a])=>t.registry.define(e,a))));const o=this.renderOptions.creationScope=this.attachShadow({...i,customElements:t.registry});return e(o,this.constructor.elementStyles),o}}}(r)){constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}render(){return this.hass&&this._helpers?l`
      <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${c}
          .computeLabel=${this._computeLabelCallback.bind(this)}
          @value-changed=${this._valueChanged}
      ></ha-form>
      <ha-device-picker .label="Label" .value="Value" .devices="Devices" .areas="Areas" .entities="Entities"></ha-device-picker>
    `:l``}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(e){console.log("ev.detail.value",e.detail.value),n(this,"config-changed",{config:e.detail.value})}_computeLabelCallback(e){return t(`config.${e.name}`)}};a([s({attribute:!1})],d.prototype,"hass",void 0),a([i()],d.prototype,"_config",void 0),a([i()],d.prototype,"_helpers",void 0),d=a([o("myjdownloader-card-editor")],d);export{d as MyJDownloaderCardEditor};
