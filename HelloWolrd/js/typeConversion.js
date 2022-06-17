//문자형
let value = true;
console.log(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
console.log(typeof value); // string


//숫자형
let str = "123";
console.log(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환됩니다.

console.log(typeof num); // number

// 숫자 이외에 value는 NaN
let age = Number("임의의 문자열 123");

console.log(age); // NaN, 형 변환이 실패합니다.

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

console.log( Boolean(1) ); // 숫자 1(true)
console.log( Boolean(0) ); // 숫자 0(false)

console.log( Boolean("hello") ); // 문자열(true)
console.log( Boolean("") ); // 빈 문자열(false)

console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // 공백이 있는 문자열도 비어있지 않은 문자열이기 때문에 true로 변환됩니다.