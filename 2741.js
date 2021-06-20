let fs = require('fs');
let input = (process.flatform == 'linux' ?
    fs.readFileSync('/dev/stdin').toString() : `5`.split('\n'));

let num = ''

for(let i=1; i<=input; i++){
    num += (i + '\n');
}

console.log(num)