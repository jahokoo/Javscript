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


// push와 unshift를 사용해 요소 여러개를 더해 보자.
let fruits = ["사과"];

fruits.push("오렌지", "배");
fruits.unshift("파인애플", "레몬");

// ["파인애플", "레몬", "사과", "오렌지", "배"]
console.log( fruits );