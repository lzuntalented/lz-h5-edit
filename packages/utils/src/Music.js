export default class Music {
  constructor() {
    const audio = window.document.createElement('audio');
    audio.loop = 'loop';
    audio.autoplay = 'autoplay';
    this.audio = audio;
  }

  setSrc(src) {
    this.audio.src = src;
    this.play();
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}
