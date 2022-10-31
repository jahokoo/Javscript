/* 배열 */

// 배열 선언 두가지 방법

// let arr = new Array();
// let arr2 = [];

// let fruits = ['apple', 'banana', 'peach'];

// 배열 내 특정 요소 얻기 (인덱싱)


// let fruits = ['apple', 'banana', 'peach'];

// // console.log(fruits[0]+'\n',fruits[1]+'\n',fruits[2]);


// // // 대괄호를 이용해 요소를 수정할 수 있다.
// // fruits[2] = 'orange';

// // console.log(fruits[2]); // orange


// // 새로운 요소 추가할 수도 있음
// fruits[3] = 'lemon';

// console.log(fruits[3]);


// // 배열에 담긴 요소 개수 출력하기
// console.log(fruits.length); // 4


// // 배열 요소의 자료형은 제약이 없다.
// let arr = [ '사과', { name: '이보라' }, true, function() { alert('안녕하세요.'); } ];

// alert(arr[1].name); // 이보라

// //인덱스 3인 요소(함수)를 실행
// arr[3](); // '안녕하세요'


// pop을 사용해 보자.

// let fruits = ['사과', '오렌지', '배'];

// console.log(fruits.pop()); // 배열에서 '배'를 제거한 후 제거된 요소를 출력
// console.log(fruits); // '사과','오렌지'

// // push를 사용해 보자.

// let fruits2 = ['사과','오렌지'];
// fruits2.push('메론');

// // fruits.push()를 호출하면 fruits.length를 호출하는 것과 같은 효과를 보인다.
// // console.log(fruits2.push('메론'));   // 3
// console.log(fruits2); // 사과,오렌지,메론


// // shift를 사용해 보자.
// let fruits = ["사과", "오렌지", "배"];

// console.log( fruits.shift() ); // 배열에서 "사과"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.

// console.log( fruits ); // 오렌지,배


// // unshift를 사용해 보자.
// let fruits2 = ["오렌지", "배"];

// fruits2.unshift('사과');

// console.log( fruits2 ); // 사과,오렌지,배


// // push와 unshift를 사용해 요소 여러개를 더해 보자.
// let fruits = ["사과"];

// fruits.push("오렌지", "배");
// fruits.unshift("파인애플", "레몬");

// // ["파인애플", "레몬", "사과", "오렌지", "배"]
// console.log( fruits );


// 배열의 내부 동작 원리


//배열은 원시자료형이 아닌 객체형에 속하기 떄문에 객체처럼 동작한다.
// let fruits = ["바나나"];
// let arr = fruits; // 참조를 복사 ( 두 변수가 같은 객체를 참조)

// alert(arr === fruits); // true

// arr.push('배'); // 참조를 이용해 배열을 수정

// alert(fruits); // 바나나,배 (요소가 두 개가 됨)

// 개발자가 배열을 일반 객체처럼 다루면 이런 기법들은 제대로 동작하지 않는다.

// let fruits = []; // 빈 배열 생성

// fruits[99999] = 5; // 배열의 길이보다 훨씬 큰 숫자를 사용해 프로퍼티를 생성

// fruits.age = 25; // 임의의 이름을 사용해 프로퍼티 생성

// console.log(fruits)



// 반복문


// for문 ( 배열을 순회할 때 쓰는 가장 오래된 방법)
// let arr = ['사과','오렌지','배',];

// for(let i = 0; i < arr.length; i++){
// 	console.log(arr[i]);
// };


// // for..of 반복문
// let fruits = ["사과", "오렌지", "자두"];

// // 배열 요소를 대상으로 반복 작업을 수행합니다.
// for (let fruit of fruits) {
//   console.log( fruit );
// } 


// // for..in 반복문
// let arr = ["사과", "오렌지", '배'];

// for(let key in arr){
// 	console.log(arr[key]); // 사과,오렌지,배
// };


// length 프로퍼티
// 배열에 조작을 가하면 length 프로퍼티가 자동으로 갱신된다.
// length 프로퍼티는 배열 내의 요소의 개수가 아닌  가장 큰 인덱스에 1을 더한 값

// let fruits = [];
// fruits[123] = "사과";

// alert(fruits.length); //124   //  123에 1을 더한 값

// 배열은 쓰기가 가능하다는 특징이 있다.
// length 값을 수동으로 증가시키면 아무일도 일어나지 않지만
// 값을 감소시키면 배열이 잘리고, 다시 되돌릴 수 없게 된다.
// let arr = [1,2,3,4,5];

// arr.length = 2; // 요소 2개만 남기고 자른다.
// console.log(arr); // [1,2]

// arr.length = 5; // 원상복구 시켜보자.
// console.log(arr[3]); // undefined => 삭제된 기존 요소들이 복구되지 않는다.


// new Array
// new Array() 문법을 사용해 배열을 만들 수 있다.

// let arr = new Array("사과","배","바나나");
// // console.log(arr); // 사과, 배, 바나나
// let arr = new Array(2);
// console.log(arr[0]); // undefined가 출력된다. 요소가 하나도 없는 배열이 만들어짐
// console.log(arr.length); // 길이는 2

// 다차원 배열
// 배열 또한 배열의 요소가 될 수 있다.
// 이러한 배열을 다차원 배열이라 부르며, 다차원 배열은 행렬을 저장하는 용도로 쓰인다.
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
// console.log( matrix[1][1] ); // 5, 중심에 있는 요소


// toString
// 배열에는 toString 메소드가 구현되어 있어 호출하면 쉼표로 구분한 문자열이 반환된다.

// let arr = [1,2,3];

// console.log(arr);
// console.log(String(arr) === '1,2,3'); // true

// console.log( [] + 1 ); // "1"
// console.log( [1] + 1 ); // "11"
// console.log( [1,2] + 1 ); // "1,21"


// // 덧셈 연산자 " + "는 피연산자 중 하나가 문자열일 경우 나머지 피연산자도 문자열로 반환한다.
// console.log( "" + 1 ); // "1"
// console.log( "1" + 1 ); // "11"
// console.log( "1,2" + 1 ); // "1,21"


styles = ['jazz','classic','rock'];

console.log(styles[Math.floor((styles.length -1 ) /2)]);
