var c = require('chalk');
var colors = ['black','red','green','yellow','blue','magenta','cyan','white','gray']
var width = 140;
var height = 100;

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function random() {
  return c[randomColor()]('█');
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
