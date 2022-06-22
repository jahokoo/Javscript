// 화살표 함수 (arrow function)

// let sum = (a,b) => a + b;

// console.log(sum(1,2));


// // 인수가 하나 뿐이라면 인수를 감싸는 괄호를 생략가능
// let double = n => n*2;
// console.log(double(3)); //6

// // 인수가 없을 경우 괄호를 비워놓으면 된다 (괄호는 생략 불가)
// let sayHi = () => console.log('안녕하세요');

// sayHi();

// 화살표 함수는 함수 표현식과 같이 동적으로 만들 수 있다.

// let age = prompt('나이를 알려주세요',18);

// let welcome = (age < 18)?
//     () => alert('안녕') :
//     () => alert('안녕하세요');

// welcome();

// let sum = (a,b) =>{
// 	let result = a + b;
// 	return result;
// };
// console.log(sum(1,2)); // 3

//과제
/* 화살표 함수로 변경하기
함수 표현식을 사용해 만든 아래 함수를 화살표 함수로 바꿔보자.

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);
*/

// if문 대신 ? 연산자를 사용 하였다.
// let ask = (question,yes,no) =>{
//     confirm(question) ? yes() : no();
// };

// ask('동의하십니까?',
// () => {alert('동의하셨습니다.')},
// () => {alert('취소 버튼을 누르셨습니다.')}
// );


//화살표 함수에는 this가 없다.
// let group = {
// 	title: "1모둠",
// 	students: ["구찌","해","삼색이"],

// showList(){
// 	this.students.forEach(
//         students => alert(this.title + ": "+ students)
//     );
// }
// }
// group.showList();

//화살표 함수가 아닌 일반 함수를 사용하면 에러 발생
// let group = {
//     title: "1모둠",
//     students: ["구찌","해","삼색이"],
  
//     showList() {
//       this.students.forEach(function(student) {
//         // TypeError: Cannot read property 'title' of undefined
//         alert(this.title + ': ' + student)
//       });
//     }
//   };
  
//   group.showList();


// 화살표 함수에는 인수가 없다.
// function defer(f,ms){
// 	return function() {
// 		setTimeout(() => f.apply(this, arguments),ms);
// };
// }

// function sayHi(who) {
// 	alert('안녕, '+who);
// }
// let sayHiDeferred = defer(sayHi,2000);
// sayHiDeferred('철수');


// 일반 함수에서는 setTimeout에 넘겨주는 콜백함수에 사용할 변수를 반드시 만들어 줘야한다. (ctx,args)
function defer(f, ms) {
    return function(...args) {
      let ctx = this;
      setTimeout(function() {
        return f.apply(ctx, args);
      }, ms);
    };
  }

function sayHi(who) {
    	alert('안녕, '+who);
    }
    let sayHiDeferred = defer(sayHi,2000);
    sayHiDeferred('철수');