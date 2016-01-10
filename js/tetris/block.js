'use strict';

class Block extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    copy() {
        return new Block(this.x, this.y, this.color.slice());
    }
}