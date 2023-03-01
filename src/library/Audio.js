import { GAME_HEIGHT, GAME_WIDTH, Root } from "../imv.js";

export default class IMVAudio {
    constructor(audiofile, loop = true) {
        this.audioFile = audiofile;
        this.loop = loop;
        this.audio = new Audio(this.audioFile);

        this.audio.loop = this.loop;
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }


}