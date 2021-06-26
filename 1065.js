/*arr = [2,4,6]

console.log(arr[0]);
console.log(arr.shift()); //배열의 가장 처음수
console.log(arr.pop()); //배열의 가장 마지막수*/


//등차수열구하기
let fs = require('fs');
let input = 210;
console.log(input)

//합계버전

function ap(num) {
    let N = num.toString().split('')
    let n = Number(N.length);
    //let a1 = Number(N.shift()); //원본배열을 바꿈
    let a1 = Number(N[0])
    let an = Number(N.pop()); //원본배열을 바꿈

    let Sn = (n * (a1 + an)) /2;
    let Sn_1 = Sn - an;

    if(an == Sn - Sn_1) return true;
}

/*
//일반항버전
function ap(num) {
    let N = num.toString().split('')
    let n = Number(N.length);
    //let a1 = Number(N.shift()); //원본배열을 바꿈
    let a1 = Number(N[0])
    let d = num<10 ? Number(N[0]) : Number(N[1]-N[0])
    let an = Number(N.pop());

    if(an == a1 + (n-1)*d) return true;
}
*/

let count = 0

for(let i=1; i <= input; i++){
    if (ap(i)) count++;
};

console.log(count)