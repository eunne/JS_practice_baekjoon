let priorities = [1, 2, 3, 1, 3]
let location = 1


//해시로 만들어 보자

// 전체대기목록 중 중요도가 큰 값 찾기
// 배열이니까 ... 써주기 또는 max.apply 써주기
let max = Math.max(...priorities)
// 가장 처음나오는 최대값 찾아서 기준으로 배열 나누기
let splice = priorities.splice(0,priorities.indexOf(max))
// 배열의 가장 마지막에 넣기
let arr = priorities.push(splice)


console.log(arr)