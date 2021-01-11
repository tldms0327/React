let array = [10,20,30,40,50];

for (let val in array) {
    console.log(val); // array key 값 출력
    console.log(array[val]); // array value 값 출력
}

for (let val of array) {
    console.log(val); // 바로 value 값에 접근!
    //for of 반복문은 key값이 자동으로 생성되는 array같은 객체에만 사용 가능
}

