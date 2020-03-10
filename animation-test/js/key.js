export default class Key {
    constructor() {
        this._pressed = {};

        this.LEFT = 37;
        this.UP = 38;
        this.RIGHT = 39;
        this.DOWN = 40;
    }

    isDown(keyCode){
        return this._pressed[keyCode];
    }

    onKeydown(event){
        this._pressed[event.keyCode] = true;
    }

    onKeyup(){
        delete this._pressed[event.keyCode];
    }

    noKeys(){
        return !(this._pressed[this.LEFT] || this._pressed[this.UP] || this._pressed[this.RIGHT] || this._pressed[this.DOWN]);
    }
}