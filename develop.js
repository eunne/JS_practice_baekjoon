let progresses = [93, 30, 55]
let speeds = [1, 30, 5]

// 완성까지 남은 기간
function toduedays(progress, speed) {
    
    let duedays = parseInt((100 - progress) / speed )

    if((100 - progress) % speed == 0) return duedays;
    else return duedays + 1;

}


// 배열에서 하나씩 꺼내기
// 각 기능의 완성일수

let publish = [];
let compare = 0;

while (progresses.length > 0) {

    let progress = progresses.shift()
    let speed = speeds.shift()
    let duedays = toduedays(progress, speed)

    if(compare <= duedays) {
        publish.push(duedays)
        compare = duedays
    } else publish.push(compare)    
}

console.log(publish)

let hashed = []

let result = publish.reduce((arr,hashed) => {
        arr[hashed] = (arr[hashed] | 0) + 1
        return hashed}, hashed)

console.log(result);