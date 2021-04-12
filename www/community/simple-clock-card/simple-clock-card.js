class SimpleClockCard extends HTMLElement {

  setConfig(config) {
    this.config = config;
}

  getCardSize() {
    return 1;
  }

  addZero(i){
    if (i < 10){
      i = "0" + i;
    }
    return i;
  }

  startTime() {
    var today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds(),
        p = ( h < 12 ) ? "AM" : "PM";

    m = this.addZero(m);
    s = this.addZero(s);

    let  use_military = this.config.use_military !== undefined ? this.config.use_military : true;
    let  hide_seconds = this.config.hide_seconds !== undefined ? this.config.hide_seconds : false;

    let time_str =  (use_military ? h : h % 12 ) +
                    ":" +
                    m +
                    (hide_seconds ? "" : ":" + s ) +
                    (use_military ? " " : " " + p );

    this.content.innerHTML = time_str;

  }

  set hass(hass) {

    if (!this.content) {
      const card = document.createElement('HA-card');
      this.content = document.createElement('div');
      this.content.style.padding = this.config.padding_size ? this.config.padding_size : '16px';
      this.content.style.fontSize = this.config.font_size ? this.config.font_size : '4rem' ;
      this.style.textAlign = 'center';
      this.content.style.display = 'inline-block';
      card.appendChild(this.content);
      this.appendChild(card);
    }
    this.startTime();
    setInterval(this.startTime.bind(this), 1000);
  }

}

customElements.define('simple-clock-card', SimpleClockCard);
