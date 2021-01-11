var hello = '1'; // 전역변수
var hello = '2' // error 없이 '2' 출력 -> 바람직하지 않다.

//let은 변수를 선언한 '블록'에서만 유효하므로 var보다 let 사용을 권장한다
let let_test = '1'
// let let_test = '2' // ERROR!

//const : 변하지 않는 상수
const num = 1;
// const num = 2; //ERROR! 변수를 재정의할 수 없다

function test() {
    var hello = 'korea'; //지역변수
    console.log(hello);
}

test();

console.log(hello)

// object 객채
const drinks = {};
drinks.caffe = 'latte';
drinks.lemon = 'ade';
console.log(drinks)

//array
const arr = [1,2,3,3,4];
arr[0] = 100;
arr[4] = 500;
console.log(arr);