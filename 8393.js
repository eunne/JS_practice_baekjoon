let fs = require('fs');
let input = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString() : `5`.split(' '));

let n = parseInt(input);

//solution1
console.log((n * (n+1))/2);


//solution2
let sum = 0;

for(i=0; i<=n; i++){
    sum += i //sum = sum + i; 
}
console.log(sum);