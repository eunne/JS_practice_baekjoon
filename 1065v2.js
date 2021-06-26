let fs = require('fs');
let input = 1000;
console.log(input)

//등차수열구하기
function ap(num) {
    let N = num.toString().split('');

    N.reduce((arr,cur) => {
        if((cur-arr) == cur) return true
    },0)
}

ap(1);

let count = 0;
for(let i=1; i < input; i++){
    if(ap(i)) count++
}
console.log(count);