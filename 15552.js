let fs = require('fs');
let input = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
12 34
5 500
40 60
1000 1000
`
).split('\n');



for (let i=1; i<=input[0]; i++){
    let number = input[i].split(' ').map((el)=>+el);
    let sum = number[0] + number[1]
    console.log(sum)
}


//하나씩 하면 시간초과되니까 한번에 넣기?

let sum = ''

for (let i=1; i<=input[0]; i++){
    let number = input[i].split(' ').map((el)=>+el);
    sum += number[0] + number[1] + '\n';
}

console.log(sum)