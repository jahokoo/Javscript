// 숫자형

/* 숫자 10억을 입력해야 한다고 가정해보자.
*/

// 분명한 방법은 10억을 직접 써주는 것
// let billion  = 1000000000;

// 0대신 0의 개수를 e로 표현한다.
// let billion = 1e9; // 10억, 1과 9개의 0
// alert(billion);
// alert(7.3e9); // 73억

// // e왼쪽수에 e오른쪽에 있는 수만큼 10의 거듭제곱을 곱하는 효과가 있다.
// // 1e3 = 1 * 1000
// // 1.23e6 = 1.23 * 1000000


// // 1마이크로초(백만 분의 1초)를 표현해 보자.
// // let ms = 0.000001;

// // 작은숫자로 'e'를 사용할 수 있다.
// let ms = 1e-6;
// alert(ms);


// 16진수
// alert(0xff); // 255
// alert(0xFF); // 255 (대 소문자를 가리지 않으며 둘 다 같은 값)

// // 2진수와 8진수

// let a = 0b11111111; // 255의 2진수
// let b = 0o377; // 255의 8진수

// alert( a == b); // true 진법은 다르지만 a와 b는 같은 수이다.

// 자바스크립트에서 지원하는 진법은 위 3개 뿐이다.


// toString(base)
// num.toString(base)메소드는 base 진법으로
// num을 표현한 후 문자형으로 반환해 반환한다.

// let num = 255;

// // base는 2 ~ 36까지 사용 가능하며 기본값은 10이다.
// alert(num.toString(16)); // ff
// alert(num.toString(2)); // 11111111

// // base36은 0~9 , A~Z를 사용해 숫자를 표현한다.
// alert(123456..toString(36)) // 2n9c ( 숫자를 대상으로 메소드를 호출하려면 점 두개를 붙이면 된다.)
// alert((123456).toString(36)) // 2n9c
// // alert(1234..valueOf());
// // alert(123456.toString(36)) // 점 하나는 소수부로 인색되기 때문에 에러가 발생


// 어림수 구하기


// 어림수의 내장함수
// Math.floor, Math.round, Math.ceil, Math.truc 등이 있다.

// 1.23456인 숫자를 1.23으로 만들고 싶다면 어떻게 해야 할까?

// // 곱하기와 나누기
// let num = 1.23456;
// alert(Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// // toFiexd사용하기 (문자형으로 반환됨 주의)
// let num2 = 12.34;
// alert(num2.toFixed(1)); // "12.3"

// // toFixed는 Math.round와 유사하게 가장 가까운 값으로 올림 혹은 버림을 해준다.
// let num3 = 12.36;
// alert(num3.toFixed(1)); // "12.4"

// // 소수부의 길이가 인수보다 작으면 끝에 0이 추가 된다.
// let num4 = 12.34;
// alert(num4.toFixed(5)); // "12.3000" , 소소부의 길이를 5로 만들기 위해 0을 추가

// // 단항 덧셈연산자를 앞에 붙이거나 Number()를 호출하면 문자형의 숫자를 숫자형으로 변환할 수 있다.
// alert(typeof +num4.toFixed(3)); // number
// alert(typeof Number(num4.toFixed(3))); //number
// alert(typeof num4.toFixed(3)); // string


//부정확한 계산

// 숫자가 너무 커지면 64비트 공간이 넘쳐 infinity로 처리된다.

// console.log(1e500); // Infinity

// // 정밀도 손실
// console.log(0.1+0.2 == 0.3); //false;
// console.log(0.1+0.2); // 0.30000000000000004

// // 작은 정밀도 손실
// console.log(0.1.toFixed(20)); // 0.10000000000000000555


// // toFixed를 사용해 어림수를 만들어 문제를 해결할 수 있다.
// let sum = 0.1 + 0.2;
// alert(sum.toFixed(2)); //0.30

// // 문자형으로 바뀐 숫자를 다시 숫자형으로 변환하려면 단항 덧셈 연산자를 사용하면 된다.
// let sum2 = 0.1 + 0.2;
// alert(+sum2.toFixed(2));

// // 10의 거듭제곱을 곱하고 다시 동일한 숫자로 나누는 전략은 오류를 줄이긴 하지만 완전히 없애지는 못한다.
// console.log( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
// console.log( (0.28 * 100 + 0.14 * 100) / 100);  // 0.4200000000000001

// // 숫자가 스스로 증가한다!
// alert( 9999999999999999 ); // 10000000000000000이 출력됩니다.


// isNaN과 isFinite

//isNaN - 인수를 숫자로 변환한 다음 NaN인지 테스트함
// console.log(isNaN(NaN)); // true
// console.log(isNaN("str")); // true

// // NaN은 자기 자신을 포함하여 그 어떤 값과도 같지 않다.
// console.log(NaN === NaN); // false

// // isFinite는 문자열이 일반 숫자인지 검증하는데 사용된다.
// let num = +prompt("숫자를 입력하시오",'');

// // 숫자가 아닌 값을 입력하거나 Infinity, -Infinity를 입력하면 false가 출력됩니다.
// console.log( isFinite(num) );



// parseInt와 parseFloat

// // 피연산자가 숫자가 아니면 형변환이 실패한다.
// alert( +"100px" ); // NaN

// // parseInt는 정수를  parseFloat는 부동 소수점 숫자를 반환한다.
// alert( parseInt('100px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5

// alert( parseInt('12.3') ); // 12, 정수 부분만 반환됩니다.
// alert( parseFloat('12.3.4') ); // 12.3, 두 번째 점에서 숫자 읽기를 멈춥니다.

// alert(parseInt('a123')); // NaN, a는 숫자가 아니므로 숫자를 읽는 게 중지된다.

// // praseInt(str, radix)의 두 번째 인수 radix는 선택적으로 사용 가능하며 원하는 진수를 지정할 수 있다.
// console.log(parseInt('0xff', 16)); // 255
// console.log(parseInt('ff', 16)); // 255, 0x가 없어도 동작한다.

// console.log(parseInt('2n9c', 36)); // 123456


// // 기타 수학 함수

// // Math.random : 0과 1 사이의 난수를 반환 (무작위 수) 
// console.log(Math.random()) // 0.9814922045590493
// console.log(Math.random()) // 0.8795144068778005
// console.log(Math.random()) //... (무작위 수)

// // Math.max & Math.min : 인수 중 최대 / 최솟값을 반환한다.
// console.log(Math.max(3,5,-10,2,1)); // 5
// console.log(Math.min(1,2,3,4)); // 1


// // Math.pow(n,power) : n을 power번 거듭제곱한 값을 반환한다.
// console.log(Math.pow(2,10)); // 2의 10제곱 = 1024


// 사용자 에게 두 수를 입력 받고, 두 수의 합을 출력해 주는 스크립트를 작성하시오
// let num1 = +prompt('숫자1',1);
// let num2 = +prompt('숫자2',2);

// alert(num1 + num2)


// 숫자를 입력할 떄 까지 반복하기
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);