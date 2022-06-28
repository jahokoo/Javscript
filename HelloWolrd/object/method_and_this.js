//메소드와 this

// 객체 user에게 인사할 수 있는 능력 부여하기
// let user ={
// 	name:'John',
//     age:30,
// };

// user.sayHi = function(){
//     alert('안녕하세요');
// }

// // user.sayHi = () =>{
// //     alert('안녕하세요')
// // }

// user.sayHi();

// console.log(user)


// 이미 정의된 함수를 이용해 메소드 만들수도 있다.

// user객체는 위에 코드를 그대로 사용

//함수 선언
// function sayHi(){
//     alert('안녕하세요');
// };

// // 선언된 함수를 메소드로 등록
// user.sayHi = sayHi;

// user.sayHi()



//메소드 단축 구문
// // 아래 두 객체는 동일하게 동작한다.
// user = {
//     sayHi: function() {
//       alert("Hello");
//     }
//   };
  
//   // 단축 구문을 사용하니 더 깔끔해짐
//   user = {
//     sayHi() { // "sayHi: function()"과 동일합니다.
//       alert("Hello");
//     }
//   };


//메소드와 this
// 메소드 내부에서 this를 사용해 객체에 접근할 수 있다.
// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // 'this'는 '현재 객체'를 나타냅니다.
//       alert(this.name);
//     }
  
//   };
  
//   user.sayHi(); // John

//외부 변수를 참조해 객체에 접근할 수도 있다.
// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       alert(user.name); // 'this' 대신 'user'를 이용함
//     }
  
//   };


// 외부 변수를 사용해 객체를 참조하면 예상치 못한 에러가 발생할 수 있다.
// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       alert( user.name ); // Error: Cannot read property 'name' of null
//     }
  
//   };
  
  
//   let admin = user;
//   user = null; // user를 null로 덮어씁니다.
  
//   admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.


// JS에서 모든함수에 this를 사용할 수 있다.
// 아래 코드처럼 작성하여도 문법에러가 발생하지 않는다.
// function sayHi(){
// 	alert(this.name);
// };


// 동일한 함수라도 다른객체에서 호출하면 this가 참조하는 값이 달라진다.
// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

// // 별개의 객체에서 동일한 함수를 사용함
// user.f = sayHi;
// admin.f = sayHi;

// // 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// // this 값이 달라짐
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f'](); // Admin (점과 대괄호는 동일하게 동작함)


//객체 없이 호출하기
// function sayHi(){
// 	alert(this);
// };

// sayHi(); // 엄격모드에서 실행 시 undefiend


// 화살표함수는 this를 가지고 있지않다.
// 화살표 함수에서 this를 참조하면 외부함수에서 this값을 가져온다.
// let user = {
//     firstName: "보라",
//     sayHi() {
//       let arrow = () => alert(this.firstName);  // user.sayHi()의 this
//       arrow();
//     }
//   };
  
//   user.sayHi(); // 보라

// let calculator = {
//     read(){
//         this.a= +prompt('첫 번째 값',1);
//         this.b= +prompt('두 번째 값',1);
//     },
//     sum(){
//         return this.a + this.b;
       
//     },
//     mul(){
//         return this.a * this.b;
//     }

// }
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep(); // 1