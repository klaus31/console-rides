// https://www.npmjs.com/package/cli-color
var c = require('cli-color');

var width = 140;
var height = 40;


function calculateFrame(color) {
  var matrix = [];
  var y = 0;
  while(y < height) {
    matrix.push([]);
    var x = 0;
    while(x < width) {
      matrix[y].push(color);
      x++;
    }
    y++;
  }
  return matrix;
}


function print(matrix, point) {
  var y = 0;
  while(y < height) {
    var line = '';
    var x = 0;
    while(x < width) {
      if(x == point.x && y == point.y) {
        line += c.xterm(0)('█');
      } else {
        line += c.xterm(matrix[y][x])('█');
      }
      x++;
    }
    console.info(line);
    y++;
  }
}

function clear() {
  console.info('\033[2J');
}

var i = 0;
var point = {x:0, y:20};
setInterval(function(){
  clear();
  point.x++;
  print(calculateFrame(i++), point);
  if(i == 255) {
    clearInterval(this);
  }
},100)
