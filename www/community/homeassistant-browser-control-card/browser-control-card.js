var wake_lock_supported;let wakeLock=null;"wakeLock"in navigator&&"request"in navigator.wakeLock?wake_lock_supported=!0:(wake_lock_supported=!1,console.warn("Browser Control Card: Wake Lock API not supported."));const requestWakeLock=async()=>{try{wakeLock=await navigator.wakeLock.request("screen")}catch(e){wakeLock=null}},cancelWakeLock=()=>{wakeLock.release(),wakeLock=null},handleVisibilityChange=()=>{null!==wakeLock&&"visible"===document.visibilityState&&requestWakeLock()};var the_card;const fullscreen_icon='<ha-icon icon="mdi:fullscreen"></ha-icon>',fullscreen_exit_icon='<ha-icon icon="mdi:fullscreen-exit"></ha-icon>',wake_lock_icon='<ha-icon icon="mdi:sleep"></ha-icon>',wake_unlock_icon='<ha-icon icon="mdi:sleep-off"></ha-icon>',zoom_in_icon='<ha-icon icon="mdi:magnify-plus"></ha-icon>',zoom_out_icon='<ha-icon icon="mdi:magnify-minus"></ha-icon>',refresh_icon='<ha-icon icon="mdi:refresh"></ha-icon>',buttons_css_style="border: 2px solid var(--primary-color);font-size: 2em;padding: 0.5em;display: inline-block;background: var(--primary-color);color: var(--primary-background-color);text-align: center;border-radius: var(--ha-card-border-radius, 4px);cursor: pointer;margin-right: 5px;margin-bottom: 2px;margin-top: 2px;";class BrowserControlCard extends HTMLElement{set hass(hass){this._hass=hass}setConfig(config){if(this.config=config,this.config){for(this.content=document.createElement("ha-card"),this.content.style.padding="15px",this.config.hide_fullscreen||(this.fullscreen=!1,this.fullscreenbtn=document.createElement("a"),this.fullscreenbtn.innerHTML=fullscreen_icon,this.fullscreenbtn.style.cssText=buttons_css_style,this.fullscreenbtn.onclick=function(){this.fullscreen?(document.exitFullscreen(),this.fullscreenbtn.innerHTML=fullscreen_icon):(document.documentElement.requestFullscreen(),this.fullscreenbtn.innerHTML=fullscreen_exit_icon),this.fullscreen=!this.fullscreen}.bind(this),this.content.appendChild(this.fullscreenbtn)),!this.config.hide_screenlock&&wake_lock_supported&&(this.wake_lock=!1,this.nowakebtn=document.createElement("a"),this.nowakebtn.innerHTML=wake_lock_icon,this.nowakebtn.style.cssText=buttons_css_style,this.nowakebtn.onclick=function(){this.wake_lock?(document.removeEventListener("visibilitychange",handleVisibilityChange),document.removeEventListener("fullscreenchange",handleVisibilityChange),cancelWakeLock(),this.nowakebtn.innerHTML=wake_lock_icon):(requestWakeLock(),document.addEventListener("visibilitychange",handleVisibilityChange),document.addEventListener("fullscreenchange",handleVisibilityChange),this.nowakebtn.innerHTML=wake_unlock_icon),this.wake_lock=!this.wake_lock}.bind(this),this.content.appendChild(this.nowakebtn)),this.config.hide_zoom||(this.zoom_level=1,this.zoominbtn=document.createElement("a"),this.zoominbtn.innerHTML=zoom_in_icon,this.zoominbtn.style.cssText=buttons_css_style,this.zoominbtn.onclick=function(){this.zoom_level=this.zoom_level+.1,document.body.style.zoom=this.zoom_level}.bind(this),this.content.appendChild(this.zoominbtn),this.zoomoutbtn=document.createElement("a"),this.zoomoutbtn.innerHTML=zoom_out_icon,this.zoomoutbtn.style.cssText=buttons_css_style,this.zoomoutbtn.onclick=function(){this.zoom_level=this.zoom_level-.1,this.zoom_level<0?this.zoom_level=0:document.body.style.zoom=this.zoom_level}.bind(this),this.content.appendChild(this.zoomoutbtn)),this.config.hide_refresh||(this.refreshbtn=document.createElement("a"),this.refreshbtn.innerHTML=refresh_icon,this.refreshbtn.style.cssText=buttons_css_style,this.refreshbtn.onclick=function(){document.location.reload()}.bind(this),this.content.appendChild(this.refreshbtn));this.firstChild;)this.removeChild(this.firstChild);this.appendChild(this.content),the_card=this}}static getStubConfig(){return{hide_fullscreen:!1,hide_screenlock:!1,hide_zoom:!1,hide_refresh:!1}}getCardSize(){return 2}static getConfigElement(){return document.createElement("browser-control-card-editor")}}customElements.define("browser-control-card",BrowserControlCard);import{html,css,LitElement}from"https://unpkg.com/lit?module";class BrowserControlCardEditor extends LitElement{static get properties(){return{hass:{},_config:{}}}setConfig(config){this._config=config}fireEvent(){const event=new Event("config-changed",{bubbles:!0,composed:!0});event.detail={config:this._config},this.dispatchEvent(event)}fullscreenChange(ev){this._config.hide_fullscreen=!ev.target.checked,this.fireEvent()}screenLockChange(ev){this._config.hide_screenlock=!ev.target.checked,this.fireEvent()}zoomChange(ev){this._config.hide_zoom=!ev.target.checked,this.fireEvent()}refreshChange(ev){this._config.hide_refresh=!ev.target.checked,this.fireEvent()}render(){return this.hass&&this._config?html`
      Note: some buttons may be hidden if your current browser does not support
      the feature
      <ul class="switches">
        <li class="switch">
          <ha-switch
            .checked=${!this._config.hide_fullscreen}
            @change="${this.fullscreenChange}"
          >
          </ha-switch
          ><span><ha-icon icon="mdi:fullscreen"></ha-icon></span>
        </li>
        <li class="switch">
          <ha-switch
            .checked=${!this._config.hide_screenlock}
            @change="${this.screenLockChange}"
          >
          </ha-switch
          ><span><ha-icon icon="mdi:sleep"></ha-icon></span>
        </li>
        <li class="switch">
          <ha-switch
            .checked=${!this._config.hide_zoom}
            @change="${this.zoomChange}"
          >
          </ha-switch
          ><span
            ><ha-icon icon="mdi:magnify-plus"></ha-icon> /
            <ha-icon icon="mdi:magnify-minus"></ha-icon
          ></span>
        </li>
        <li class="switch">
          <ha-switch
            .checked=${!this._config.hide_refresh}
            @change="${this.refreshChange}"
          >
          </ha-switch
          ><span><ha-icon icon="mdi:refresh"></ha-icon></span>
        </li>
      </ul>
    `:html``}static get styles(){return css`
      .switches {
        margin: 8px 0;
        list-style: none;
        padding: 0;
      }
      .switch {
        display: flex;
        align-items: center;
        height: 40px;
      }
      .switches span {
        padding: 0 16px;
      }
    `}}customElements.define("browser-control-card-editor",BrowserControlCardEditor),window.customCards=window.customCards||[],window.customCards.push({type:"browser-control-card",name:"Browser Control Card",preview:!0,description:"Card to control browser settings: full-screen, wake lock, zoom..."}),document.body.onkeydown=(event=>{"F11"==event.key&&(event.preventDefault(),the_card.fullscreenbtn.onclick())});