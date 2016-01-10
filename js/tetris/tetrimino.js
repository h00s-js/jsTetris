'use strict';

class Tetrimino {
    constructor(blocks, position, offsetData) {
        this.blocks = blocks;
        this.position = position;
        this.offsetData = offsetData;
        this.rotationState = 0;
    }

    copy() {
        //var tetrimino = new TTetrimino(new Point(2, 2));
        //return tetrimino;
    }

    setPosition(position) {
        for (var block of this.blocks) {
            block.subtractPoint(this.position);
            block.addPoint(position);
        }
        this.position = position;
        return this;
    }

    offsetPosition(position) {
        for (var block of this.blocks) {
            block.addPoint(position);
        }
        this.position.addPoint(position);
        return this;
    }

    moveLeft() {
        return this.offsetPosition(new Point(-1, 0));
    }

    moveRight() {
        return this.offsetPosition(new Point(1, 0));
    }

    moveDown() {
        return this.offsetPosition(new Point(0, -1));
    }
}

class TTetrimino extends Tetrimino {
    constructor(position) {
        super([
            new Block(-1, 0, [216, 56, 203]),
            new Block(0, 0, [216, 56, 203]),
            new Block(1, 0, [216, 56, 203]),
            new Block(0, 1, [216, 56, 203])
        ], position, [
            [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)],
            [new Point(0, 0), new Point(1, 0), new Point(1, -1), new Point(0, 2), new Point(1, 2)],
            [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)],
            [new Point(0, 0), new Point(-1, 0), new Point(-1, -1), new Point(0, 2), new Point(-1, 2)]
        ]);
    }
}