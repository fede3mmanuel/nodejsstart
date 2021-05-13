const { readFile, readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

readFile('./hello.txt', 'utf8', (err,txt) => {
    console.log(txt);
});
console.log('finish line');