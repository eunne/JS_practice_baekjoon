let fs = require('fs');
let input = (process.platform === 'linux' ?
    fs.readFileSync('/dev/stdin').toString() :
    `5
1 1
2 3
3 4
9 8
5 2
`.split('\n'));

for(let i = 1 ; i <= input[0]; i++){
    let num = input[i].split(' ').map((el)=> +el);
    console.log(`Case #${i}: ${(num[0] + num[1])}`);
}