//함수 표현식

// function sayHi() {
//     console.log( "Hello" );
//   }
  
//   alert( sayHi ); // 함수 코드가 보임


//함수도 변수처럼 복사하여 할당할 수 있다.
// function sayHi() {   // (1) 함수 생성
//     console.log( "Hello" );
// }

// let func = sayHi;    // (2) 함수 복사

// func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
// sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.


// 콜백함수
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "동의하셨습니다." );
//   }
  
//   function showCancel() {
//     alert( "취소 버튼을 누르셨습니다." );
//   }
  
//   // 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
//   ask("동의하십니까?", showOk, showCancel);

// 아래와 같이 함수 표현식을 사용하면 코드 길이를 줄일 수 있다.

// function ask(question, yes, no){
// 	if (confirm(question)) yes()
// 	else no();
// }

// ask(
// 	"동의하십니까?",
// 	function() { alert("동의하셨습니다.");},
// 	function() { alert("취소 버튼을 누르셨습니다.");}
// );


// 함수 선언문 vs 함수 표현식

//함수 선언문은 스크립트 전역에서 함수에 접근할 수 있다.
// sayHi('John'); //Hello, John

// function sayHi(name){
// 	console.log(`Hello ${name}`);
// }


//함수 표현식은 함수가 선언되기 전에 접근 불가능
// sayHi('John'); // error

// let sayHi = function(name){
// 	console.log(`Hello ${name}`);
// }

// let age = prompt("나이를 알려주세요.", 18);

// // 조건에 따라 함수를 선언함
// if (age < 18) {

//   function welcome() {
//     alert("안녕!");
//   }

// } else {

//   function welcome() {
//     alert("안녕하세요!");
//   }

// }

// // 함수를 나중에 호출합니다.
// welcome(); // Error: welcome is not defined