// ... : 모든 나머지 인자를 대체하기 위한 표현
// function f (arguments, b, ...c) {
// }


function printnums(n1, n2) {
    console.log(n1, n2);
    console.log(arguments); //함수로 전달된 모든(초과된) 인수를 argument 객체가 저장
}
printnums(1,2,3,4,5);


function printrest(n1, ...n2) {
    console.log(n1, n2)
}

printrest(1,2,3,4,5);