// //Arrow Function =>
// //표현식의 결과값을 표현하는 표현식 본문
// let arr = [1,2,3,4,5];

// let twice = arr.map(v=>v*2);
// console.log(twice)

// //arrow function이 없을 때
// // let twice = arr.map(function(val){
// //     return val * 2;
// // })

// //상태를 결정짓는 본문에 쓰이는 경우
// let twice2 = arr.map(v => {
//     if (v % 2 == 0){
//         console.log('짝수')

//     }
//     else {
//         console.log('홀수')
//     }
// })

//ex2
//map은 두 번째 인자를 index로 받는다!!
let arr = [10, 20, 30, 40, 50];
let twice3 = arr.map((v, i)=> {
    console.log(`i: ${i}, v: ${v}`)
})