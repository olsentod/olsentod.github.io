export default class Animation {
    constructor(config) {
        this.ctx = config.ctx;
        this.sprite = new Image();
        this.sprite.src = config.spriteSrc;

        this.animating = false;

        this.scale = 1;
        this.width = 32;
        this.height = 32;
        this.scaledWidth = this.scale * this.width;
        this.scaledHeight = this.scale * this.height;

        this.cycleLoop = config.loop;
        this.currentLoopIndex = 0;
    }
    
    draw(x, y){
        this.drawFrame(0, this.cycleLoop[this.currentLoopIndex], x, y);
        
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {
        this.ctx.drawImage(this.sprite,
            frameX * this.width, frameY * this.height,
            this.width, this.height, canvasX, canvasY,
            this.scaledWidth, this.scaledHeight);
    }


}