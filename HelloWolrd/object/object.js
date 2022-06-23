// 객체

// 객체 생성자 문법
// let user = new Object();

// // 객체 리터럴 문법
// let user2 = {};

// // 프로퍼티 /  중괄호 안에 key / value 쌍으로 구성된 프로퍼티가 들어간다.
// var users = {
//     name: "John", // 키 : 'name' , value : 'John' / 첫 번째 프로퍼티
//     age: 30 // 키 : 'age' , value : 30  / 두 번째 프로퍼티
// };


// // 프로퍼티 값 얻기
// console.log(users.name);
// console.log(users.age);

// // 프로퍼티 삭제하기

// delete users.age;

// console.log(users.age); // undefined

// var users = {
//     name: "John",
//     age: 30 ,
//     "likes birds" : true // 복수의 단어는 따옴표로 묶는다.
// };

// // const로 선언된 객체는 수정될 수 있다 ( 상수 객체는 수정될 수 있다.)

// const user ={
//     name: "John"
// }
// user.name = "Peter";
// console.log(user.name); // Peter

// // // 대괄호 표기법
// // users.likes birds = true; // 에러발생 점표기법은 공백을 못읽어드린다.

// console.log(users['likes birds']) // true



// // 대괄호 표기법은 변수를 키로 사용할 수 있다.

// var key = 'likes birds';
// users[key] = false;
// console.log(users[key])

// // 변수 key는 런타임에 평과되므로 사용자 입력값 변경에 따라 값이 변경될 수 있다.

// var key = prompt("사용자의 어떤 정보를 얻고 싶은가요","name");
// alert(users[key]);

// // 점 표기법은 불가능
// var key='name';
// alert(users.key) // undefined  // users 안에 'key'를 찾기 때문

//계산된 프로퍼티

// var fruit = prompt('어떤 과일을 구매하실건가요?','apple');

// var bag={
//     [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아온다.
// };

// console.log(bag.apple) // fruit에 'apple'이 할당되었다면 5를 출력


// //위와 동일하게 동작하는 예시
// var fruit = prompt('어떤 과일을 구매하실건가요?','apple');
// var bag = {};

// // 변수 fruit을 사용해 프로퍼티 이름을 만들었다.
// bag[fruit]='test code';

// console.log(bag[fruit])

// 대괄호 안에 복잡한 표현식이 올 수도 있따.
// var fruit = 'apple';
// var bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// console.log(bag);

// var bag ={};

// bag[fruit+"computers"]=5;
// console.log(bag)


// 단축 프로퍼티
// 프로퍼티 값을 기존 변수에 받아와서 사용할 수 있다.
// function makeUser(name,age){
// 	return{
// 		name: name,
// 		age: age,
// 		//.. 등등
// 		};
// }

// let user = makeUser("John",30);
// console.log(user.name); // John

// name:name 대신 매개변수 name만 적어도 프로퍼티를 생성할 수 있다.
// function makeUser(name,age){
//     return{
//         name,
//         age,
//     };
// }
// console.log(makeUser('John',30))

// // 일반 프로퍼티와 단축 프로퍼티를 함께 사용하는 것도 가능
// let user = {
//         name,
//         age:30
//     };
// console.log(user.name="John",user.age)

// let userName = "Peter";
// user.name = userName;
// console.log(user.name,user.age)


// 프로퍼티 이름의 제약사항
// 객체 프로퍼티는 예약어를 사용할 수 있다.
// var obj = {
//     for:1,
//     let:2,
//     return:3,
// };

// console.log(obj.for+obj.let+obj.return); // 6

// var obj = {
//     0:"test"  // "0":"test" 와 동일
// }

// console.log(obj["0"]); // test
// console.log(obj[0]); // test (동일한 프로퍼티)


// 제약사항 __proto__
// var obj ={};
// obj.__proto__ = 5; // 숫자를 할당
// alert(obj.__proto__); // [object Object] - 숫자를 할당 했지만 값은 객체가 되었다.

// 프로퍼티 존재여부 확인하기
// var user = {};
// alert(user.noSuchProperty === undefined); // true = 프로퍼티가 존재하지 않음을 의미

// // 연산자 in을 사용하여 프로퍼티 존재 확인하기

// var user = {name : "John" ,age: 30};

// console.log("age" in user); // user.age가 존재하므로 true
// console.log("blabla" in user); // user.blabla가 존재하지 않아서 false


// // 따옴표를 생략한 in
// var user = {age:30};
// var key = "age";
// console.log(key in user); // true , 변수 key에 저장된 값 "age"를 사용해 프로퍼티 존재 여부확인


// 프로퍼티는 존재하고 값은 undefined인 예시를 보자.
// var obj = {
//     test: undefined
//   };

//   alert( obj.test ); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.

//   alert( "test" in obj ); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨).


// for ... in 반복문을 사용해 객체의 모든 프로퍼티를 출력해 보자. 
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let key in user) {
//       // 키
//       console.log( key );  // name, age, isAdmin
//       // 키에 해당하는 값
//       console.log( user[key] ); // John, 30, true
//   }

// 객체 정렬 방식

// 정수 프로퍼티
// let codes = {
//     "49": "독일",
//     "41": "스위스",
//     "44": "영국",
//     // ..,
//     "1": "미국"
//   };

//   for (let code in codes) {
//        console.log(code); // 1, 41, 44, 49
//   }

// 

// 정수가 아닌 프로퍼티는 작성된 순서대로 나열된다.
// var user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25; // 프로퍼티를 하나 추가합니다.

//   // 정수 프로퍼티가 아닌 프로퍼티는 추가된 순서대로 나열됩니다.
//   for (let prop in user) {
//     console.log( prop ); // name, surname, age
//   }

// "+"를 붙여 순서대로 나열할 수 있다.
// let codes = {
//     "+49": "독일",
//     "+41": "스위스",
//     "+44": "영국",
//     // ..,
//     "+1": "미국"
//   };

//   for (let code in codes) {
//     console.log( +code ); // 49, 41, 44, 1
//   }
// +code에서 +를 제외하면   "+49" 같이 그대로 문자열이 출력된다.


//과제 
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

//2.객체가 비어있는지 확인하기
// let schedule = {};

// function isEmpty(obj){
//    for(let key in obj){
//     return false;
//    }
//     return true;
// }
// console.log(isEmpty(schedule))

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule));

// 프로퍼티 합계 구하기

/* 모든 팀원의 월급을 합한 값을 구하고
 그 값을 변수 sum에 저장해주는 코드를 작성해보자.
*/
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// console.log(sum) // for문 안에 있으면 순회 하기 때문에 합쳐진 값이 안나옴

// 프로퍼티 값 두 배로 부풀리기
/* 각 ojb의 프로퍼티 값이 숫자인 경우 값을 두 배 해주는 함수를 만들어라 */
// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu)
multiplyNumeric(menu);


// 숫자일 경우 값을 두배로 바꿔주는 함수
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') { // typeof 로 숫자형과 일치하는지 확인
            obj[key] *= 2;
        }
    }
}

console.log(menu)