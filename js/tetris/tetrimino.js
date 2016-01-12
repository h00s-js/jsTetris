'use strict';

class Tetrimino {
    constructor(blocks, position, offsetData) {
        this.blocks = blocks;
        this.position = position;
        this.offsetData = offsetData;
        this.rotationState = 0;
    }

    copy() {
        var blocks = this.blocks.map(function (block) {
            return block.copy();
        });
        var position = this.position.copy();
        var offsetData = this.offsetData.slice();
        var tetrimino = new Tetrimino(blocks, position, offsetData);
        tetrimino.rotationState = this.rotationState;
        return tetrimino;
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
        var tetrimino = this.copy();
        for (var block of tetrimino.blocks) {
            block.addPoint(position);
        }
        tetrimino.position.addPoint(position);
        return tetrimino;
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

    rotate(clockwise) {
        var tetrimino = this.copy();
        for (var block of tetrimino.blocks) {
            block.subtractPoint(this.position);
            if (clockwise) {
                block.rotateClockwise();
            }
            else {
                block.rotateCounterClockwise();
            }
            block.addPoint(this.position);
        }
        tetrimino.rotationState = (clockwise) ? (tetrimino.rotationState + 1) % 4 : (tetrimino.rotationState + 3) % 4;
        var rotatedTetriminos = [];
        for (var i = 0; i < this.offsetData[0].length; i++) {
            var point = (this.offsetData[this.rotationState][i]).subtractPoint(this.offsetData[tetrimino.rotationState][i]);
            rotatedTetriminos.push(tetrimino.offsetPosition(point));
        }
        return rotatedTetriminos;
    }

    rotateClockwise() {
        return this.rotate(true);
    }

    rotateCounterClockwise() {
        return this.rotate(false);
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

class ITetrimino extends Tetrimino {
    constructor(position) {
        super([
            new Block(-1, 0, [29, 183, 237]),
            new Block(0, 0, [29, 183, 237]),
            new Block(1, 0, [29, 183, 237]),
            new Block(0, 1, [29, 183, 237])
        ], position, [
            [new Point(0, 0), new Point(-1, 0), new Point(2, 0), new Point(-1, 0), new Point(2, 0)],
            [new Point(0, 0), new Point(1, 0), new Point(1, -1), new Point(0, 2), new Point(1, 2)],
            [new Point(-1, 1), new Point(1, 1), new Point(-2, 1), new Point(1, 0), new Point(-2, 0)],
            [new Point(0, 1), new Point(0, 1), new Point(0, 1), new Point(0, -1), new Point(0, 2)]
        ]);
    }
}

class JTetrimino extends Tetrimino {
    constructor(position) {
        super([
            new Block(-1, 0, [112, 78, 248]),
            new Block(0, 0, [112, 78, 248]),
            new Block(1, 0, [112, 78, 248]),
            new Block(0, 1, [112, 78, 248])
        ], position, [
            [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)],
            [new Point(0, 0), new Point(1, 0), new Point(1, -1), new Point(0, 2), new Point(1, 2)],
            [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)],
            [new Point(0, 0), new Point(-1, 0), new Point(-1, -1), new Point(0, 2), new Point(-1, 2)]
        ]);
    }
}

class STetrimino extends Tetrimino {
    constructor(position) {
        super([
            new Block(-1, 0, [75, 216, 56]),
            new Block(0, 0, [75, 216, 56]),
            new Block(1, 0, [75, 216, 56]),
            new Block(0, 1, [75, 216, 56])
        ], position, [
            [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)],
            [new Point(0, 0), new Point(1, 0), new Point(1, -1), new Point(0, 2), new Point(1, 2)],
            [new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0), new Point(0, 0)],
            [new Point(0, 0), new Point(-1, 0), new Point(-1, -1), new Point(0, 2), new Point(-1, 2)]
        ]);
    }
}