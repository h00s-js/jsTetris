'use strict';

class Board {
    constructor() {
        this.HEIGHT = 22;
        this.WIDTH = 10;
        this.blocks = [];
        for (var i = 0; i < this.HEIGHT; i++) {
            var row = []
            for (var j = 0; j < this.WIDTH; j++) {
                row.push(undefined);
            }
            this.blocks.push(row);
        }

        //RandomGenerator randomGenerator;
        this.currentTetrimino = undefined;
        this.ghostTetrimino = undefined;

        this.clearedLines = 0;
        this.valid = true;
        this.randomGenerator = new RandomGenerator();
        //spawnTetrimino();
    }

    isValidHorizontalPosition(tetrimino) {
        for (var block of tetrimino.blocks) {
            if (!this.isValidHorizontalPositionBlock(block)) {
                return false;
            }
        }
        return true;
    }

    isValidHorizontalPositionBlock(block) {
        return !((block.x < 0) ||
        (block.x > (this.WIDTH - 1)) ||
        (this.blocks[block.y][block.x] != undefined));
    }

    isValidVerticalPosition(tetrimino) {
        for (var block of tetrimino.blocks) {
            if (!this.isValidVerticalPositionBlock(block)) {
                return false;
            }
        }
        return true;
    }

    isValidVerticalPositionBlock(block) {
        return !((block.y < 0 || block.x < 0) ||
        (block.y > (this.HEIGHT - 1) || block.x > (this.WIDTH - 1)) ||
        (blocks[block.y][block.x] != null));
    }

    place(tetrimino) {
        for (var block of tetrimino.blocks) {
            this.blocks[block.y][block.x] = block;
        }
    }
}