import * as imv from '../src/imv.js';

imv.update_screen_size();

const newEl = new imv.Rect(50, 50, 0, 0, imv.Root.getRoot(), 'black');
newEl.draw();

function game_loop() {
    requestAnimationFrame(game_loop);
};

game_loop();
