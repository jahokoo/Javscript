// 문자열

// 따옴표
// 문자열은 작은따옴표,큰따옴표, 백틱으로 감쌀수 있따.
// let single = '작은따옴표';
// let double = "큰따옴표";
// let backticks = `백틱`;


// // 백틱의 기능 템플릿 리터럴(template literal)
// function sum(a,b){
//     return a+b;
// }

// alert(`1 + 2 = ${sum(1,2)}`); // 1+ 2 = 3


// //백틱을 사용하면 문자열을 여러 줄에 걸쳐 작성할 수도 있다.

// let guestList = `손님:
// * John
// * Pete
// * Mary
// `;

// alert(guestList); // // 손님 리스트를 여러 줄에 걸쳐 작성함

// 작은,큰따옴표는 위와 같은 방식으로 여러줄에 걸쳐 문자열을 만들 수 없다.
// let guestList2 = "손님:
// *john"; // Error: Invalid or unexpected token

// // 특수기호 \n을 사용하여 여러 줄의 문자열을 만들어 보자.
// let guestList3 = "손님 :\n * John\n * Pete\n * Mary";
// alert(guestList3); // 손님 리스트를 여러 줄에 걸쳐 작성함

// // 따옴표를 이용해 만든 여러줄 문자열과 백틱을 이용해 만든 문자열은 표현방식만 다를 뿐 차이가 없다.
// let str1 = "Hello\nWorld";

// // 백틱과 일반적인 줄 바꿈을 사용해 두 줄짜리 문자열을 만듦

// let str2 = `Hello
// World`;

// alert(str1 == str2); // true

// 유니코드를 사용한 예시
// alert( "\u00A9" ); // ©
// alert( "\u{20331}" ); // 佫, 중국어(긴 유니코드)
// alert( "\u{1F60D}" ); // 😍, 웃는 얼굴 기호(긴 유니코드)

// alert('I\'m groot'); // I'm groot

// // 백틱을 사용하여 더 깔끔하게 표현해 보기
// alert(`I'm groot`);

// // 역슬래시 '\'를 '\\'처럼 두개를 붙이면 역슬래시를 보여줄 수 있다.
// alert(`역슬래시야 \\`)


// 문자열의 길이
// length 프로퍼티에는 문자열의 길이가 저장된다.
// alert(`My\n`.length); // 3 , \n은 특수문자 하나(1)로 취급되기 때문에 길이는 3이다.


// 특정 글자에 접근하기

// let str = 'hello';

// // 첫 번째 글자
// console.log(str[0]); // h
// console.log(str.charAt(0)); // h

// // 마지막 글자
// console.log(str[str.length -1]) // o
// console.log(str.charAt(str.length -1)) // o
// console.log(str.at(-1)) // JS 2022.06 에 출시된 기능

// 접근하려는 위치에 글자가 없는 경우 []는 undefined를 , charAt은 빈 문자열을 반환한다.

// let str = `Hello`;

// console.log(str[1000]); // undefined
// console.log(str.charAt(1000)); // '' (빈 문자열)
// console.log(str.at(1000)) // []와 마찬가지로 undefined

// // for..of를 사용하면 문자열을 구성하는 글자를 반복작업할 수 있따.
// for(let char of "hello"){
//     console.log(char); // H,e,l,l,o (char는 순차적으로 H, e, l, l, o가 됩니다.)
// }



// 문자열의 불변성
// 문자열은 수정할 수 없다. 모던자바스크립트에서 수정하려 한다면 에러가 발생한다고 하였지만 에러는 발생하지않고 변경내용을 무시한다.
// let str = 'hi';

// str[0] = 'z'; 
// console.log(str[0]) // h  // 변경 내용을 무시함

let str = 'hi';

str = 'z' + str[1]; // 문자열 전체를 교체함

console.log( str ); // zi