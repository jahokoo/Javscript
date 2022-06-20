//nullish 병합 연산자 '??'

// 문법
// x = (a !== null && a !== undefined) ? a : b;

// || 와 ?? 비교
// let height = 0;

// console.log(height || 100); // 100
// console.log(height ?? 100); // 0

// 연산자 우선순위 5위이며 =,? 를 제외한 대부분의 연산자 보다 나중에 평가된다.
let height = null;
let width = null;

//괄호를 추가하여 제약을 피하자.
let area= (height ?? 100) * (width ?? 50);

console.log(area); // 5000

// 안정성 관련이슈 때문에 &&나 ||와 함께 사용하지 못하며 문법에러 발생
// let x = 1 && 2 ?? 3;   // syntax에러

// 괄호를 추가하면 제약을 피할수 있다.
let x = (1 && 2) ?? 3; 
console.log(x);


// height가 null이나 undefined인 경우, 100을 할당
// 아닌경우 문법에러 발생
height = height ?? 100;