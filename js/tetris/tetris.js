var block1 = new Block(2, 3, [22, 33, 44]);
var block2 = block1.copy();
var block3 = new Block(2, 3, [22, 33, 44]);

var ttetrimino = new TTetrimino(new Point(2, 3));
//var newttetrimino = ttetrimino.copy();
var moved = ttetrimino.offsetPosition(new Point(2, 3));
console.log("");