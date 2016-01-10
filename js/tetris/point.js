'use strict';

class Point {
    constructor(x, y) {
        this.coordinates = [x, y];
    }

    copy() {
        return new Point(this.x, this.y);
    }

    get x() {
        return this.coordinates[0];
    }

    set x(x) {
        this.coordinates[0] = x;
    }

    get y() {
        return this.coordinates[1];
    }

    set y(y) {
        this.coordinates[1] = y;
    }

    getCoordinates() {
        return this.coordinates;
    }

    setCoordinates(x, y) {
        this.coordinates[0] = x;
        this.coordinates[1] = y;
    }

    addPoint(point) {
        this.setCoordinates(this.x + point.x, this.y + point.y);
        return this;
    }

    subtractPoint(point) {
        this.setCoordinates(this.x - point.x, this.y - point.y);
        return this;
    }

    rotateClockwise() {
        this.setCoordinates(this.y, -1 * this.x);
        return this;
    }

    rotateCounterClockwise() {
        this.setCoordinates(-1 * this.y, this.x);
        return this;
    }
}
