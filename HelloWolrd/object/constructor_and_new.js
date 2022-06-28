// new연산자와 생성자 함수


// 생성자 함수
// 생성자 함수 예시
// function User(name){
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User('보라');

// alert(user.name); //보라
// alert(user.isAdmin); //false


// new function(){...} 익명 생성자 함수
// 익명함수는 어디에도 저장되지 않고 한번만 호출할 목적으로 만들었기 때문에 재사용이 불가능하다.
// 익명 생성자 함수를 이용하면 재사용을 막고 코드를 캡슐화할 수 있다.

// let user = new function() {
//     this.name = "John";
//     this.isAdmin = false;

//     // 사용자 객체를 만들기 위한 여러 코드.
//     // 지역 변수, 복잡한 로직, 구문 등의
//     // 다양한 코드가 여기에 들어갑니다.
//   };

// new.target과 생성자 함수
// function User() {
//     alert(new.target);
//   }

//   // 'new' 없이 호출함
//   User(); // undefined

//   // 'new'를 붙여 호출함
//   new User(); // function User { ... }


// 일반적인 함수를 호출해도 new를 붙인거 같이 동작하도록 만들어보자.
// function User(name) {
//     if (!new.target) { // new 없이 호출해도
//         return new User(name); // new를 붙여줍니다.
//     }

//     this.name = name;
// }

// let bora = User("보라"); // 'new User'를 쓴 것처럼 바꿔줍니다.
// alert(bora.name); // 보라

// 생성자와 return문

// 객체를 return하면 this대신 객체가 반환된다.
// function BigUser() {

//     this.name = "원숭이";

//     return { name: "고릴라" };  // <-- this가 아닌 새로운 객체를 반환함
//   }

//   alert( new BigUser().name );  // 고릴라

// // 원시형을 return하면 return문이 무시된다.
// function SmallUser() {

//     this.name = "원숭이";

//     return; // <-- this를 반환함
// }

// alert(new SmallUser().name);  // 원숭이

// 생성자 내 메소드
// new User(...)는 프로퍼티 name과 메소드 sayHi를 가진 객체를 만들어준다.
// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//       alert( "제 이름은 " + this.name + "입니다." );
//     };
//   }
  
//   let bora = new User("이보라");
  
//   bora.sayHi(); // 제 이름은 이보라입니다.
  
  /*
  bora = {
     name: "이보라",
     sayHi: function() { ... }
  }
  */


//과제

//함수 두개로 동일한 객체 만들기
// let obj = {}; // 두 함수 에 this대신 객체를 반환하면 된다.

// function A() { return obj }
// function B() { return obj }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// 생성자 함수 계산기 만들기
// function Calculator(){
//     this.read = function(){
//         this.a = +prompt('첫 번째 숫자',1);
//         this.b = +prompt('두 번째 숫자',1);
//     };
//     this.sum = function(){
//         return this.a+this.b;
//     };
//     this.mul = function(){
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// console.log('Sum = '+ calculator.sum());
// console.log('Mul = '+ calculator.mul());


function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt('숫자를 넣어라',1);
    }
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함