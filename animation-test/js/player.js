import Animator from "./animator.js";
import Key from './key.js';

export default class Player {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.size = 20;
        this.speed = 2;

        this.key = new Key();

        this.direction = '';
        this.moving = false;

        this.frameCount = 0;

        this.animator = new Animator({
            animation: 'IDLE'
        });

        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.draw();
    }

    update() {
        this.draw();

        this.move(this.getDirection());
        
        if (this.key.noKeys()) {
            this.moving = false;
            this.animate('');
        }
    }

    draw() {
        this.animator.step({
            x: this.x,
            y: this.y
        });
    }

    getDirection() {
        if (this.key.isDown(this.key.UP)) {
            if (this.key.isDown(this.key.LEFT)) {
                return 'NW';
            } else if (this.key.isDown(this.key.RIGHT)) {
                return 'NE';
            } else {
                return 'N';
            }
        }     
        if (this.key.isDown(this.key.DOWN)) {
            if (this.key.isDown(this.key.LEFT)) {
                return 'SW';
            } else if (this.key.isDown(this.key.RIGHT)) {
                return 'SE';
            } else {
                return 'S';
            }
        }
        if (this.key.isDown(this.key.LEFT)) return 'W';
        if (this.key.isDown(this.key.RIGHT)) return 'E';
        return '';
    }

    move(direction) {
        switch (direction) {
            case 'N':
                this.y -= this.speed;
                this.moving = true;
                this.animate('N');
                break;
            case 'NW':
                this.x -= this.speed;
                this.y -= this.speed;
                this.moving = true;
                this.animate('N');
                break;
            case 'NE':
                this.x += this.speed;
                this.y -= this.speed;
                this.moving = true;
                this.animate('N');
                break;
            case 'S':
                this.y += this.speed;
                this.moving = true;
                this.animate('S');
                break;
            case 'SW':
                this.x -= this.speed;
                this.y += this.speed;
                this.moving = true;
                this.animate('S');
                break;
            case 'SE':
                this.x += this.speed;
                this.y += this.speed;
                this.moving = true;
                this.animate('S');
                break;
            case 'E':
                this.x += this.speed;
                this.moving = true;
                this.animate('E');
                break;
            case 'W':
                this.x -= this.speed;
                this.moving = true;
                this.animate('W');
                break;
            default:
                console.log("not a direction");
        }
    }

    animate(command) {
        if (command == this.direction) return;
        this.direction = command;
        switch (this.direction) {
            case 'N':
                this.animator.update('NORTH');
                break;
            case 'S':
                this.animator.update('SOUTH');
                break;
            case 'E':
                this.animator.update('EAST');
                break;
            case 'W':
                this.animator.update('WEST');
                break;
            default:
                this.animator.update('IDLE');
        }
    }
}