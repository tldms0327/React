function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1,2,3));


//배열의 요소를 함수의 인자로 쓰고 싶을 땐 apply를 써야 하는데,
// spread operator를 쓰면 간편하게 쓸 수 있다.
// spread operator는 rest operator와 달라 함수를 호출할 때 쓰기 때문에 중간에 들어갈 수도 있다. 

let arr = [10, 20, 30];
console.log(sum(...arr)); // 60
console.log(sum.apply(null, arr)); //60

function sum(a,b,c,d,e) {
    return a+b+c+d+e;
}
let arr2 = [20, 30];
console.log(sum(10, ...arr2, 40, 50));

let face = ['eyes', 'nose', 'mouth'];
let head = ['heair', ...face, 'ears']; 
console.log(head); // ['heair', 'eyes', 'nose', 'mouth', 'ears']


//배열을 참조할 때, 복사할 때도 쓰인다.
//python의 copy처럼, 새로운 객체를 만들어서 할당해 주기 때문에 영향이 없다.
let arr3 = [1,2,3];
let arrCpy = [...arr3];
let arr4 = arr3;

arrCpy.push(5);
arr4.push(4);

console.log(arr4, arrCpy, arr4); // [1, 2, 3, 4], [1, 2, 3, 5],[1, 2, 3, 4]


//spread operator in Object

let drinks = {
    caffe: 'latter',
    coca: 'cola',
}
let newDrinks = {
    lemon: 'tea',
    drinks
}
let newDrinks2 = {
    lemon: 'tea',
    ...drinks
}

console.log(newDrinks);
console.log(newDrinks2);