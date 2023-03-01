import * as imv from '../src/imv.js';

imv.update_screen_size();

const newEl = new imv.Rect(50, 50, 0, 0, imv.Root.getRoot(), 'black');
newEl.draw();

const newAudio = new imv.Audio('../loop.wav');

imv.Root.event_MouseDown(() => {
    //newAudio.play();
    //setTimeout(() => { newAudio.pause() }, 1000)
})

function game_loop() {
    requestAnimationFrame(game_loop);
};

game_loop();
