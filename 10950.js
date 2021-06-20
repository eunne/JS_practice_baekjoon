let fs = require('fs');
let input = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
2 3
3 4
9 8
5 2
`
).split('\n');



input = ['1 1', '2 3']

// for문 내에서 let변수 사용
for(let i=1; i<=input[0]; i++){
  let data = input[i].split(' ').map((el) => +el);
}
console.log(data[0]+data[1]);
//ReferenceError: data is not defined

// for문 내에서 let변수 사용
let data = [];

for(let i=1; i<=input[0]; i++){
  let data = input[i].split(' ').map((el) => +el);
}
console.log(data[0]+data[1]);
//ReferenceError: data is not defined


// for문 내에서 var변수 사용
for(let i=1; i<=input[0]; i++){
  var data = input[i].split(' ').map((el) => +el);
}
console.log(data[0]+data[1]);
//5 (가장 마지막 값만 나옴)


// for문 내에서 let변수 사용, for문 내 출력
for(let i=1; i<=input[0]; i++){
  let data = input[i].split(' ').map((el) => +el);
  console.log(data[0]+data[1]);
}
//2 
//5
//모든 값이 다 나옴


// for문 내에서 var변수 사용, for문 내 출력
for(let i=1; i<=input[0]; i++){
  var data = input[i].split(' ').map((el) => +el);
  console.log(data[0]+data[1]);
}
//2
//5
//모든 값이 다 나옴