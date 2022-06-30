// 객체를 원시형으로

// 아래 코드들은 자동 형 변환이 일어난다.
// 객체는 원시값으로 변환되고, 그 후 의도한 연산이 수행한다.
// let obj1 = {};
// let obj2 = {};

// console.log(obj1); // {}
// console.log(obj2); // {}
// // 객체 더해보기
// let objPlus = obj1 + obj2;
// console.log(objPlus)  // [object Object][object Object]
// // 객체 빼보기
// let objMinus = obj1 - obj2;
// console.log(objMinus) // NaN

// // 객체 출력
// let obje = {}
// console.log(obje) // {}


// To Primitive
// 문자열을 기대하는 연산을 수행하면 hint는 string이 된다.

// // 객체를 출력하려고 함
// alert(obj);

// //객체를 프로퍼티 키로 사용하고 있음
// anotherObj[obj] = 123;



// // 수학 연산을 적용하려 할 때 hint는 number가 된다.

// //명시적 형 변환
// let num = Number(obj);

// // (이항 덧셈 연산을 제외한) 수학 연산
// let n = +obj; // 단항 덧셈 연산
// let delta = date1 - date2;

// //크고 작음 비교하기
// let greater = user1 > user2;


// // 연산자가 기대하는 자료형이 확실치 않을때 hint는 default가 된다.

// // 이항 덧셈 연산은 hint로 'default'를 사용한다.
// let total = obj1 + ob2;

// // obj == number 연산은 hint로 'default'를 사용한다.
// if (user == 1){something}



// Symbol.toPrimitive

//user 객체에 객체-원시형 변환 메서드 obj[Symbol.toPrimitive](hint)를 구현해보자.
// let user = {
//     name: "John",
//     money: 1000,

//     [Symbol.toPrimitive](hint){
//         alert(`hint ${hint}`);
//         return hint = "string" ? `{name: "${this.name}"}`: this.money;
//     }
// };

// // 데모 :
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500); // hint: default -> 1500


// toString과 valueOf

//데모
// let user = {name : "John"};

// alert(user);; // [object Object]
// alert(user.valueOf() === user); //true

// toString과 valueOf로 호출
// Symbol.toPrimite와 동일하기 동작한다.
// let user = {
//     name: 'John',
//     money:1000,


//     // hint가 "string"인 경우
//     toString(){
//         return `{name: "${this.name}"}`;
//     },

//     // hint가 "number"나 "default"인 경우
//     valueOf(){
//         return this.money;
//     }
// };


// alert(user); // toString -> {name : 'John'}
// alert(+user); // valueOf -> 1000
// alert(user + 500); // valueOf -> 1500


// 모든 형 변환을 한 곳에서 처리해야 하는 경우도 생긴다.
// 아래와 같이 toString만 구현해 주면 된다.
// let user = {
//     name : "John",

//     toString(){
//         return this.name;
//     }
// };

// alert(user);
// alert(user + 500);

// 추가 형 변환

// let obj = {
//     // 다른 메소드가 없으면 toString에서 모든 형 변환을 처리
//     toString(){
//         return "2";
//     }
// };

// console.log(obj * 2); // 4,
// /* 객체가 문자열 "2"로 바뀌고, 곱셈 연산 과정에서 문자열 "2"는 숫자 2로 변경된다.*/

// 이항 덧셈연산은 문자열을 연결한다.
let obj = {
    toString(){
        return "2";
    }
};

console.log(obj + 2); // 22("2" + 2), 문자열이 반환되기 때문에 문자열끼리의 병합이 일어남


