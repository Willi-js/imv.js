var GAME_WIDTH = window.innerWidth;
var GAME_HEIGHT = window.innerHeight;

function update_screen_size() {
    GAME_WIDTH = window.innerWidth;
    GAME_HEIGHT = window.innerHeight;
    requestAnimationFrame(update_screen_size);
};

export {

    GAME_WIDTH,
    GAME_HEIGHT,
    update_screen_size

};