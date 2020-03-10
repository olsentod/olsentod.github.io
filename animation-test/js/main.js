import Player from "./player.js";

export default class Game {
    constructor() {
        this.player = new Player();

        this.animationFrameId = window.requestAnimationFrame(() => {
            this.update();
        });

        this.init();
    }

    init() {
        window.addEventListener('keyup', (event)=>{
            this.player.key.onKeyup(event);
        }, false);
        window.addEventListener('keydown', (event)=>{
            this.player.key.onKeydown(event);
        }, false);
    }

    update() {
        this.player.update();

        this.animationFrameId = window.requestAnimationFrame(() => {
            this.update();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Game();
});