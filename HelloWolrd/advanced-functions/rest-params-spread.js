/* 나머지 매개변수 */

// 함수의 정의와는 상관없이 넘겨주는 인수의 개수는 제약이 없다.
function sum(a,b){
	return a+b;
}

console.log(sum(1,2,3,4,5)); // 3 


// 변수이름앞에 ... 을 붙여주면 나머지 매개변수들을 넣어주는 역할을한다.
function sumAll(...args){
    let sum = 0;

    for(let arg of args){
        sum += arg;
    }
    return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1,2)); // 3
console.log(sumAll(1,2,3)); // 6

// 처음 두 인수는 변수에,  나머지는 titles라는 배열에 나눠보자.
const showName = (firstName, lasName, ...titles) =>{
    console.log( firstName + ' ' + lasName) // Bora Lee

    // 나머지 인수들은 배별인 titles의 요소가 된다.
    console.log(titles[0]) // Software Engineer
    console.log(titles[1]) // Researcher
    console.log(titles.length) // 2
}

showName("Bora", "Lee", "SoftWare Engineer", "Researcher");
// 나머지 매개변수는 남아있는 인수들을 모으는 역할이기 때문에 항상 마지막에 있어야한다.
// function f(ar1, ...rest, ar2){ // 에러 }  // ...rest는 마지막에 위치해야 함


// arguments 객체
console.log('----- arguments 객체 -----')

function showName2(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    /* arguments는 이터러블 객체이기 때문에
    for(let of arguments) console.log(arg); 를 사용해 인수를 펼칠수 있다.
*/
}

showName2("Jackson","Michael"); // 2, Jackson, Michael

showName2("Jackson"); // 1 , Jackson, undefined (두 번째 인수없음)

// 화살표 함수는 arguments 객체를 지원하지 않는다.
function ff(){
	let showArg = () => console.log(arguments[0]);
	showArg();
}
ff(1); // 1


// 스프레드 문법
console.log('----- 스프레드 문법 -----');
var arr = [3,5,1];
console.log(Math.max(arr)); // Nan

// ...arr을 사용하면  iterable객체 arr이 인수목록으로 확장된다.

console.log(Math.max(...arr)); // 5 스프레드 문법이 배열을 인수 목록으로 바꿔줌)

// iterable객체 여러 개를 전달할 수도 있다.
var arr1 = [1,-2,3,4];
var arr2 = [8,3,-8,1];

console.log(Math.max(...arr1, ...arr2)); //8

// 평범한 값과 스프레드 문법을 혼합해 사용할 수 있다.
console.log(Math.max(1, ...arr1, 2, ...arr2,25)); // 25

// 배열을 합칠 때도 사용할 수 있다.
var arr = [3, 5, 1];
var arr2 = [8, 9, 15];
var merged = [0, ...arr, 2, ...arr2];

console.log(merged); //(8) [0, 3, 5, 1, 2, 8, 9, 15]

// iterable 객체도 스프레드 문법을 사용할 수 있다.
// 스프레드 문법으로 문자열을 문자 배열로 변환시켜 보자.
var str = 'Hello';
console.log([...str]); //['H', 'e', 'l', 'l', 'o']
// console.log(...str) // H e l l o 

// Array.from은 이터러블을 배열로 바꿔준다.
console.log(Array.from(str)); //['H', 'e', 'l', 'l', 'o']


// 배여로가 객체의 복사본 만들기
console.log('----- 배열과 객체의 복사본 만들기 -----');


// 배열복사 예시
var arr = [1,2,3];
// 배열을 펼쳐 각 요소를 분리 -> 매개변수 목록으로 만듬 -> 목록을 새로운 배열에 할당
var arrCopy = [...arr]; 

// 배열 복사본 요소와 기존 배열 요소가 같은지 확인
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// 두 배열은 같은가?
console.log(arr === arrCopy); // false (참조가 다름)

// 참조가 다르므로 기존 배열을 수정해도 영향받지 않는다.
arr.push(4);
console.log(arr); // 1,2,3,4
console.log(arrCopy) // 1,2,3

// 객체 복사 예시
var obj = { a:1, b:2, c:3};
var objCopy = {...obj}; // 배열과 같은 방법으로 할당

console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
console.log(obj === objCopy); // false(참조가 다름)

obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}