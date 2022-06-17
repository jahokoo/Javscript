//단항 , 이항 연산자

//단항연산자
// let x = 5;
// x = -x;
// console.log( x ); // -5, 단항 마이너스 연산자는 부호를 뒤집습니다.

//이항 연산자
// let x = 1, y = 3;
// console.log( y - x ); // 2, 이항 마이너스 연산자는 뺄셈을 해줍니다.

// //나머지 연산자
// console.log( 5 % 2 ); // 5를 2로 나눈 후의 나머지인 1을 출력
// console.log( 8 % 3 ); // 8을 3으로 나눈 후의 나머지인 2를 출력

// //거듭제곱 연산자
// console.log( 2 ** 2 ); // 4  (2 * 2)
// console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
// console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

// console.log( 4 ** (1/2) ); // 2 (1/2 거듭제곱은 제곱근)
// console.log( 8 ** (1/3) ); // 2 (1/3 거듭제곱은 세제곱근)


// 이항 연산자 + 와 문자열 연결
// let s = "my" + "string";
// console.log(s); // mystring

// // 둘중 하나가 문자열이면 문자열로 반환
// console.log( '1' + 2 ); // "12"
// console.log( 2 + '1' ); // "21"

// // 왼쪽부터 연산하기 때문에 덧셈이 이뤄진후 문자열과 병합한다.
// console.log(2 + 2 + '1' ); // '221'이 아니라 '41'이 출력됩니다.

// // 뺼셈과 나눗셈연산자가 문자형 피연산자를 어떻게 다루는지 보자.
// console.log( 6 - '2' ); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
// console.log( '6' / '2' ); // 3, 두 피연산자가 숫자로 바뀐 후 연산이 진행됩니다.

// let x = 1;
// console.log( +x ); // 1

// let y = -2;
// console.log( +y ); // -2

// // 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
// console.log( +true ); // 1
// console.log( +"" );   // 0


// // 숫자에는 아무런 영향을 미치지 않습니다.
// let x = 1;
// console.log( +x ); // 1

// let y = -2;
// console.log( +y ); // -2

// // 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
// console.log( +true ); // 1
// console.log( +"" );   // 0

// let apples = "2";
// let oranges = "3";

// // 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
// console.log( +apples + +oranges ); // 5
// // `Number(...)`를 사용해서 같은 동작을 하는 코드를 작성할 수 있지만, 더 길다.
// // console.log( Number(apples) + Number(oranges) ); // 5

// //할당 연산자
// let x = 2 * 2 + 1;

// console.log( x ); // 5

// // 값을 반환 하는 할당 연산자
// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// console.log( a ); // 3
// console.log( c ); // 0

// // 복합 할당 연산자
// let n = 2;
// n += 5; // n은 7이 됩니다(n = n + 5와 동일).
// n *= 2; // n은 14가 됩니다(n = n * 2와 동일).

// console.log( n ); // 14

// //3+5 가 먼저 연산된 후 n변수와 곱해진다.
// let n = 2;

// n *= 3 + 5;

// console.log( n );

// // 증-감 연산자
// let counter = 2;
// counter++;      // counter = counter - 1과 동일하게 동작합니다. 하지만 식은 더 짧습니다.
// console.log( counter ); // 1

// let counter = 2;
// counter--;      // counter = counter - 1과 동일하게 동작합니다. 하지만 식은 더 짧습니다.
// console.log( counter ); // 1


// let counter = 0;
// counter++;
// ++counter;
// console.log( counter ); // 2, 위 두 라인은 동일한 연산을 수행합니다.

//쉼표 연산자
// let a = (1 + 2, 3 * 4);

// console.log( a ); // 7 (3 + 4의 결과)

//여러 동작을 하나의 줄에서 처리할 때 사용
// 한 줄에서 세 개의 연산이 수행됨
for (a = 1, b = 3, c = a * b; a < 10; a++) {
   }