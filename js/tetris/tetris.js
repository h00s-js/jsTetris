var block1 = new Block(2, 3, [22, 33, 44]);
//var block2 = block1.copy();
//var block3 = new Block(2, 3, [22, 33, 44]);
block1.addPoint(new Point(4, 8));
block1.subtractPoint(new Point(4, 8));

var ttetrimino = new TTetrimino(new Point(0, 0));
ttetrimino = ttetrimino.setPosition(new Point(4, 6));
//var newttetrimino = ttetrimino.copy();
//var moved = ttetrimino.offsetPosition(new Point(2, 3));
var rotated = ttetrimino.rotate(true);
console.log("");