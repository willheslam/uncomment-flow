var uncomment = require('./index.js');

process.stdin.setEncoding('utf8');

var overall = '';

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    overall += chunk;
  }
});

process.stdin.on('end', function() {
  process.stdout.write(uncomment(overall));
});