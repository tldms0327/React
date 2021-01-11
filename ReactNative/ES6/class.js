class Person {
    constructor(region_, gender_) {
        this.region = region_;
        this.gender = gender_;

    } 

    gretting(val = 'hello') {
        // console.log(val);
    }
}

let korean = new Person('Korea', 'male');
// console.log(korean); //Person {region: 'Korea', gender: 'male'}

korean.gender = 'female';
// console.log(korean); // Person {region: 'Korea', gender: 'female'}

//korean.gretting();

//상속
class American extends Person {
    constructor(region_, gender_, language_){
        super(region_, gender_); // super: 상속받은 내용을 그대로 사용한다
        this.language = language_;
    }
    grettings(val = 'hello') {
        console.log(val);
    }
}

let american = new American('USA', 'femaile', 'English')

//console.log(american); // American {region: 'USA', gender: 'femaile', language: 'English'
american.gretting(); //부모 클래스와 같은 이름의 메소드는 자식클래스로 덮어쓴다.