var fs = require('fs');

fs.appendFile('textfile.txt', 'Similarly do all the other things like open and write', function (err) {
  if (err) throw err;
  console.log('Saved!');
});