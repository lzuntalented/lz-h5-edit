// const audio = window.document.createElement('audio');
// audio.loop = 'loop';
// audio.autoplay = 'autoplay';

// export default function setSrc(src) {
//   audio.src = src;
//   audio.play();
// }

// export function paly() {
//   audio.play();
// }

// export function pause() {
//   audio.pause();
// }

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
