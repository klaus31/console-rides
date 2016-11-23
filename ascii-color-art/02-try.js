// https://www.npmjs.com/package/cli-color
var c = require('cli-color');

var width = 140;
var height = 1000;

function randomColor() {
  return c.xterm(Math.floor(Math.random() * 256));
}

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
