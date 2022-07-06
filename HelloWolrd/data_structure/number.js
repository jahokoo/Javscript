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

let num = 255;

// base는 2 ~ 36까지 사용 가능하며 기본값은 10이다.
alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111

// base36은 0~9 , A~Z를 사용해 숫자를 표현한다.
alert(123456..toString(36)) // 2n9c ( 숫자를 대상으로 메소드를 호출하려면 점 두개를 붙이면 된다.)
alert((123456).toString(36)) // 2n9c
// alert(1234..valueOf());
// alert(123456.toString(36)) // 점 하나는 소수부로 인색되기 때문에 에러가 발생


