var Point;
Point = function (x, y) {
    this.coordinates = [x, y]
    console.log('created point');
};

Point.prototype.getX = function() {
    return this.coordinates[0];
};

Point.prototype.setX = function(x) {
    this.coordinates[0] = x;
};

Point.prototype.getY = function() {
    return this.coordinates[1];;
};

Point.prototype.setY = function(y) {
    this.coordinates[1] = y;
};

Point.prototype.getCoordinates = function() {
    return this.coordinates;
};

Point.prototype.setCoordinates = function(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
};

Point.prototype.addPoint = function(point) {
    this.setCoordinates(this.getX() + point.getX(), this.getY() + point.getY());
    return this;
};

Point.prototype.subtractPoint = function(point) {
    this.setCoordinates(this.getX() - point.getX(), this.getY() - point.getY());
    return this;
};

Point.prototype.rotateClockwise = function() {
    this.setCoordinates(this.getY(), -1 * this.getX());
    return this;
};

Point.prototype.rotateCounterClockwise = function() {
    this.setCoordinates(-1 * this.getY(), this.getX());
    return this;
};
