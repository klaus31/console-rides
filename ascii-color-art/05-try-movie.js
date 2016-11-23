// https://www.npmjs.com/package/cli-color
var c = require('cli-color');

var width = 30;
var height = 30;


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
var point = {x:0, y:0};
var direction = 'e';
var versatz = 0;
setInterval(function(){
  clear();

  // der punkt der laeuft
  if(direction == 'e') point.x++;
  else if(direction == 's') point.y++;
  else if(direction == 'w') point.x--;
  else if(direction == 'n') point.y--;

  if(direction == 'e' && point.x == width-versatz-1) direction = 's';
  else if(direction == 's' && point.y == height-versatz-1) direction = 'w';
  else if(direction == 'w' && point.x == versatz) direction = 'n';
  else if(direction == 'n' && point.y == versatz+1) { direction = 'e'; versatz++; }

  if(point.x < 0 || point.y < 0 || point.x > width || point.y > height) clearInterval(this);

  print(calculateFrame(i++%255), point);
},100)
