var point = new Point(2, 3);
point.setX(-2);
point.setY(-3);
console.log(point.getCoordinates());

point = point.rotateClockwise();
console.log(point.getCoordinates());