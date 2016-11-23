// https://www.npmjs.com/package/cli-color
var c = require('cli-color');

var width = 140;
var height = 40;


function calculateFrame(color) {
  var matrix = [];
  var i = 0;
  while(i++ < height) {
    matrix.push([]);
    var j = 0;
    while(j++ < width) {
      matrix[i-1].push(color);
    }
  }
  return matrix;
}

function print(matrix) {
  var i = 0;
  var j = 0;
  while(i++ < height) {
    var line = '';
    while(j++ < width) {
      line += c.xterm(matrix[i-1][j-1])('█');
    }
    console.info(line);
    j = 0;
  }
}

function clear() {
  console.info('\033[2J');
}

//console.log(calculateFrame())

var i = 0;
setInterval(function(){
  clear();
  print(calculateFrame(i++));
  if(i == 250) process.exit();
},100)


/*
function random() {
  return randomColor()('█');
}

var i = height * width;
var picture = '';
while(i--) {
  picture += random();
  if(!(i%width)) {
    console.info(picture);
    picture = '';
  }
}
*/
