/*
* morph from one pic into another in ascii art.
*
* usage node main.js first.jpg second.png
*/

var fs = require('fs');
eval(fs.readFileSync(__dirname + '/asciiMorph.js') +'');
eval(fs.readFileSync(__dirname + '/object-watch.js') +'');
var parseImageToAscii = require('image-to-ascii');

var parseOptions = {
    colored: false,
    reverse: true
};

parseImageToAscii(process.argv[2], parseOptions, function(err, picA) {
  parseImageToAscii(process.argv[3], parseOptions, function(err, picB) {
    var picALines = picA.split('\n')
    var picBLines = picB.split('\n')
    var element = {};
    AsciiMorph(element, {x: picALines[0].length,y: picALines.length});

    element.watch('innerHTML', function(v, o, n){
      console.info((n.trim() + '').substr('undefined'.length)); // urgh
    })
    AsciiMorph.render(picALines);
    AsciiMorph.morph(picBLines);
  });
});
