import Animation from "./animation.js";

export default class Animator {
    constructor(config) {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.animations = {
            IDLE: new Animation({
                ctx: this.ctx,
                spriteSrc: 'img/GuyIdle.png',
                loop: [0, 1],
            }),
            NORTH: new Animation({
                ctx: this.ctx,
                spriteSrc: 'img/GuyNorth.png',
                loop: [0, 1, 2, 3],
            }),
            SOUTH: new Animation({
                ctx: this.ctx,
                spriteSrc: 'img/GuySouth.png',
                loop: [0, 1, 2, 3],
            }),
            EAST: new Animation({
                ctx: this.ctx,
                spriteSrc: 'img/GuyEast.png',
                loop: [0, 1, 2, 3],
            }),
            WEST: new Animation({
                ctx: this.ctx,
                spriteSrc: 'img/GuyWest.png',
                loop: [0, 1, 2, 3],
            }),
        }

        this.currentAnimation = this.animations[config.animation];
        this.animating = false;
        this.position;

        this.init();
    }

    init() {
        this.animating = true;
    }

    update(animation) {
        this.currentAnimation = this.animations[animation];
        this.currentAnimation.currentLoopIndex = 0;
        this.currentAnimation.frameCount = 0;
        this.currentAnimation.draw(this.position.x, this.position.y);
    }
    step(position) {
        this.position = position;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.currentAnimation.draw(this.position.x, this.position.y);
        if (this.animating) {
            this.currentAnimation.frameCount++;
            if (this.currentAnimation.frameCount < 15) {
                return;
            }
            this.currentAnimation.frameCount = 0;
            this.currentAnimation.currentLoopIndex++;
            if (this.currentAnimation.currentLoopIndex >= this.currentAnimation.cycleLoop.length) {
                this.currentAnimation.currentLoopIndex = 0;
            }
        }
    }

}