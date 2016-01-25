'use strict';

class Board {
    constructor() {
        this.HEIGHT = 22;
        this.WIDTH = 10;
        this.blocks = [];
        for (var i = 0; i < this.HEIGHT; i++) {
            var row = [];
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

    clearLines() {
        for (var i = 0; i < this.HEIGHT; i++) {
            if (this.isLineFull(this.blocks[i])) { // if line is full
                this.removeLineAt(i);
                i--; // return to position where was line that was removed
                this.clearedLines++;
            }
        }
    }

    isLineFull(blocks) {
        for (var block of blocks) {
            if (block == undefined) {
                return false;
            }
        }
        return true;
    }

    removeLineAt(index) {
        for (var i = index; i < (this.HEIGHT - 1); i++) { // move down all blocks on top of that line
            this.blocks[i] = this.blocks[i + 1];
            for (var block of this.blocks[i]) { // update Y position on all block in that line (move down)
                if (block != undefined) {
                    block.y = block.y - 1;
                }
            }
        }
        var row = [];
        for (var i = 0; i < this.WIDTH; i++) {
            row.push(undefined);
        }
        this.blocks[this.HEIGHT - 1].push(row); // initialize new line on top
    }

    moveCurrentTetriminoLeft() {
        var tetrimino = this.currentTetrimino.moveLeft();
        if (this.isValidHorizontalPosition(tetrimino)) {
            this.currentTetrimino = tetrimino;
            //updateGhostTetrimino();
        }
    }

    moveCurrentTetriminoRight() {
        var tetrimino = this.currentTetrimino.moveRight();
        if (this.isValidHorizontalPosition(tetrimino)) {
            this.currentTetrimino = tetrimino;
            //updateGhostTetrimino();
        }
    }

    moveCurrentTetriminoDown() {
        var tetrimino = this.currentTetrimino.moveDown();
        if (this.isValidVerticalPosition(tetrimino)) {
            this.currentTetrimino = tetrimino;
            return true;
        } else {
            this.place(this.currentTetrimino);
            this.clearLines();
            //spawnTetrimino();
            if (!this.isValidVerticalPosition(this.currentTetrimino)) {
                this.valid = false;
            }
            return false;
        }
    }

}