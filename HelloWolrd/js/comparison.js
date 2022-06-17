//비교 연산자 


// // boolean
// console.log( 2 > 1 );  // true
// console.log( 2 == 1 ); // false
// console.log( 2 != 1 ); // true

//변수에 할당 가능
// let result = 5 > 4; // 비교 결과를 변수에 할당
// console.log( result ); // true

// //서로 다른 형을 가진 값 비교
// console.log( '2' > 1 ); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
// console.log( '01' == 1 ); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.

// console.log( 0 == false ); // true
// console.log( '' == false ); // true
// //false == false  =  true

// //일치 연산자 '==='
// console.log( 0 === false ); // false, 피연산자의 형이 다르기 때문입니다.

// null & undefined 비교
// console.log( null === undefined ); // false

// null과 0비교하기
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null <= 0);// true
console.log(null == 0); // false

//undefined는 비교가 불가능
console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

// 과제
/* 비교
아래 표현식들의 결과를 예측 해보자.
*/
const question = ()=>{
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
}

/*
1. true
2. false 
3. false 틀렸다. 해답: 문자열 비교할때는 사전순으로 비교하며 2는 1보다 크기에 true
4. true
5. false
6.true 틀렸다. 해답 : null 은 오직 undefined와 같다. (null == undefined)
7.false
*/

