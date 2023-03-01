import { GAME_HEIGHT, GAME_WIDTH, Root } from "../imv.js";

export default class IMVAudio {
    constructor(audiofile, loop = true, volume = 100) {
        this.volume = volume * 0.01;
        this.audioFile = audiofile;
        this.loop = loop;
        this.audio = new Audio(this.audioFile);

        this.audio.loop = this.loop;
        this.audio.re
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    restart() {
        this.audio.currentTime = 0;
    }
    
    setVolume(volume) {
        this.volume = volume * 0.01;

        this.audio.volume = this.volume;
    }

    maxVolume() {
        this.volume = 1;

        this.audio.volume = this.volume;
    }

    halfVolume() {
        this.volume = 0.5;

        this.audio.volume = this.volume;
    }

    lowVolume() {
        this.volume = 0.1;

        this.audio.volume = this.volume;
    }

}