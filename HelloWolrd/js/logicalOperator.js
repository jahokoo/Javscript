// 논리 연산자.

// OR 연산자 
console.log( true || true ); //true
console.log( false || true ); //true
console.log( true || false ); //true
console.log( false || false ); //false

// 평가를 위해 불리언으로 변환 숫자 1 = true,  0 = false
if ( 1 || 0 ) console.log('truthy');

// let hour = 9;
// if(hour < 10 || hour > 18) // hour이 10보다 작거나 18보다 크면
// 	console.log('영업시간이 아닙니다'); // 반환

//     let hour = 12;
// let isWeekend = true;

// if(hour < 10 || hour > 18 || isWeekend){ // 주말이기 때문에 반환
// 	console.log('영업 시간이 아닙니다.'); // 주말 = true 임으로 반환
// }

// 첫번째 truthy를 찾는 OR연산자
// console.log(1 || 0); // 1; 1은 true
// console.log( null || 1 ); // 1;  1은 true
// console.log( null || 0 || 1); // 1; 왼쪽 피연산자 두개는 false고 1은 true
// console.log(undefined || null || 0); // 0; 모두 false이므로, 마지막 값을 반환

// // 변수 or 표현식으로 구성된 목록에서 첫번째 truthy 얻기
// let firstName = "";
// let lastName = "";
// let nickName = "아구몬";

// console.log(firstName || lastName || nickName || "익명");
// // 아구몬; 만약 전부 false였다면 '익명'이 출력

// // 단락 평가
// true || console.log('값이 안나올거임');
// false || console.log('값이 나온다~');

// console.log( true && true );   // true
// console.log( false && true );  // false
// console.log( true && false );  // false
// console.log( false && false ); // false

//AND (&&) 연산자
let hour = 12;
let minute = 30;

if(hour == 12 && minute == 30){ // hour이 12이고 minute이 30 일 때
	console.log('현재 시간은 12시 30분입니다.'); // 반환한다.
}

// OR과 마찬가지로 타입에 제약이 없다.
if(1 && 0) { // 피연산자가 숫자형이지만 논리형으로 바뀌어 true && false가 됩니다.
    console.log("if 문 안에 falsy가 들어가 있으므로 alert창은 실행되지 않습니다.");
   }

//AND연산자  true false 반환 예시

// // 첫 번째 피연산자가 true라면 두 번째(즉 뒤에있는 피연산자) 피연산자를 반환
// console.log(1 && 0); // 0
// console.log(1 && 5); // 5

// //첫 번째 피연산자가 false라면 첫 번째 피연산자를 반환하고 뒤에 내용은 무시한다.
// console.log(null && 5); // null
// console.log(0 && "나는 반환되지 않아"); // 0

// // 피연산자 여러 개를 전달해 보자.
// console.log(1 && 2 && null && 3); //null

// console.log(1 && 2&& 3); // 전부 true = 마지막 값 3

// //NOT 연산자
// // 불리언형으로 변환 후 반대로 반환한다.
// console.log(!true); //false
// console.log(!false); //true

// // !! 두 개 연달아 사용하면 불리언형으로 변환할 수 있다.
// console.log(!!'non-empty string'); //true
// console.log(!!null); //false

// // alert메소드는 값을 반환하지않는다 = undefined
// // 처음 ||은 왼쪽 alert(1)을 평가 후 모달창을 띄운다.
// // alert는 undefined를 반환하기 때문에 다음 피연산자를 평가
// // 2는 truthy이므로 실행이 멈추고 2를 반환하고 반환된 2는 제일 바깥 alert의 피연산자가 되어 두 번째 alert창에 출력된다.
// // alert( alert(1) || 2 || alert(3) );


// alert( alert(1) && alert(2) );

// let age;
// if(!(age >= 14 && age <= 90)){

// }
// if(age < 14 || age > 90){

// }

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );