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

// let str = 'hi';

// str = 'z' + str[1]; // 문자열 전체를 교체함

// console.log( str ); // zi


// 대-소문자 변경하기

// 소문자로 변경해주는 toLowerCase
// console.log('Interface'.toLowerCase()); // interface

// // 대문자로 변경해주는 toUpperCase
// console.log('Interface'.toUpperCase()); // INTERFACE

// // 글자 하나의 케이스 변경하기
// console.log('Interface'[0].toLowerCase()); // i

// 부분 문자열 찾기

// indexOf를 이용하여 부분 문자열의 위치를 찾아보자.
// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); // 0, str은 'Widget'으로 시작함
// alert( str.indexOf('widget') ); // -1, indexOf는 대·소문자를 따지므로 원하는 문자열을 찾지 못함

// alert( str.indexOf("id") ); // 1, "id"는 첫 번째 위치에서 발견됨 (Widget에서 id)
// // indexOf의 2번째 인수를 작성해 사용해 보자.
// alert(str.indexOf('id',2)); // 12


// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // as를 찾아보자.

// let pos = 0;
// while(true){
//     let foundPos = str.indexOf(target,pos);
//     if(foundPos == -1) break;

//     alert(`위치 : ${foundPos}`);
//     pos = foundPos + 1; // 다음 위치를 기준으로 검색을 이어간다.
// }

// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as';

// let pos = -1;
// while((pos = str.indexOf(target,pos + 1)) != -1){
// 	alert(`위치 : ${pos}`);
// }

// let str = 'Widget with id';

// // Widget의 위치는 0 이다.
// // if문에서 0은 'false'로 간주하기 때문에 console.log는 반환되지 않는다.
// if(str.indexOf('Widget')){
//     console.log('찾음') // 의도한 대로 동작하지 않는다.
// }

// // 따라서 0 이 아닌 -1과 비교를 해야한다.
// if (str.indexOf('Widget') != -1){
//     console.log('찾았다...') // 의도한 대로 동작한다.
// }


// 비트 NOT 연산자
// 피연산자를 32비트 정수로 바꾼 후 모든 비트를 반전한다.
// alert( ~2 ); // -3, -(2+1)과 같음
// alert( ~1 ); // -2, -(1+1)과 같음
// alert( ~0 ); // -1, -(0+1)과 같음
// alert( ~-1 ); // 0, -(-1+1)과 같음

// 위에서 -1과 비교한 코드 대신 NOT연산자를 이용해 더 짧게 구현할 수 있다.

// let str = "Widget";

// if(~str.indexOf("Widget")){
//     alert('찾았다.'); // 잘 동작한다.
// }


// 부분 문자열을 포함하고 있는지 알려주는 includes

// console.log( "Widget with id".includes("Widget") ); // true
// console.log( "Hello".includes("Bye") ); // false

// // indexOf와 마찬가지로 문자열 검색 위치를 설정할 수 있다.
// alert( "Widget".includes("id") ); // true
// alert( "Widget".includes("id", 3) ); // false, 세 번째 위치 이후엔 "id"가 없습니다.

// // 특정 문자열로 시작하는지 여부를 확인하는 startsWith()
// // 특정 문자열로 끝나는지 여부를 확인하는 endWith()
// alert( "Widget".startsWith("Wid") ); // true, "Widget"은 "Wid"로 시작합니다.
// alert( "Widget".endsWith("get") ); // true, "Widget"은 "get"으로 끝납니다.


// 부분 문자열 추출하기
// slice()를 이용하여 문자열 추출하기

// let str = 'stringify';
// console.log(str.slice(0,5)); // strin , 5번째 위치는 포함되지 않는다. (0부터 4번째 위치까지만)
// console.log(str.slice(0,1)); // s , 마찬가지로 1번째 위치는 제외 

// // 두 번째 인수를 생략할 경우 시작 위치 부터 문자열 끝까지 반환한다.

// console.log(str.slice(2)); // ringify, 2번째 부터 끝까지


// // 끝에서 4번째부터 시작해 끝에서 1번째 위치 까지 반환
// console.log(str.slice(-4,-1)); //gif 



// substring()을 이용하여 문자열 추출하기
// let str = 'stringify';

// // 동일한 부분 문자열을 반환한다.
// console.log(str.substring(2,6)); // ring
// console.log(str.substring(6,2)); // ring
// // substring은 음수 인수를 허용하지 않는다. 음수는 0으로 처리한다.

// // slice를 사용하면 다른 결과가 나온다.
// console.log(str.slice(2,6)); // ring
// console.log(str.slice(6,2)); // '' (빈 문자열)



// substr()을 이용해 문자열 추출하기
// substr은 길이를 기준으로 문자열을 추출한다.

// let str =  'stringify';
// console.log(str.substr(2,4)); // ring , 2부터 글자 4개를 반환 

// // 음수를 사용하여 뒤에서 부터 추출할 수 있다.
// console.log(str.substr(-4,2)); // gi, 끝에서 4번째 위치부터 2글자 추출


// 문자열 비교하기

// 문자열을 비교할 떄 알파벳 순서를 기준으로 비교가 이뤄지는데 이상한 특징이 몇 가지 있다.

// 소문자는 대문자 보다 항상 크다.
// alert( 'a' > 'Z' ); // true

// // 발음 구별 기호가 붙은 문자는 알파벳 순서 기준을 따르지 않는다.
// alert( 'Österreich' > 'Zealand' ); // true (Österreich는 오스트리아를 독일어로 표기한 것임

// //codePointAt()을 이용해 글자에 연관된 코드를 알아보자.

// // 글자는 같지만 케이스는 다르므로 변환되는 코드가 다르다.
// alert( "z".codePointAt(0) ); // 122
// alert( "Z".codePointAt(0) ); // 90

// String.fromCodePoint()를 이용하여 숫자형식의 코드를 대응하는 글자를 확인해 보자.
// console.log(String.fromCodePoint(90)); // Z

// \u 뒤에 16진수로 특정글자를 만들수 있다.
// 90을 16진수로 변환하면 5a입니다.
// alert( '\u005a' ); // Z

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ