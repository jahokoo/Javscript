/* 구조 분해 할당 (destructuring assignment) */

// 객체나 배열을 '변수'로 분해할수 있게 해주는 문법
// 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등 구조분해를 사용한다.


/* 배열 분해하기 */
console.log('----- 배열 분해하기 -----');
// 이름과 성을 요소로 가진 배열
let arr = ['Bora', 'Lee'];

// 구조 분해 할당을 이용하여 
// firstName에는 arr[0]
// surname에는 arr[1]을 할당하였다.
var [firstName, surname] = arr;

// 반환 값이 배열인 메소드를 함께 활용할 수도 있다.
// let [firstName, surname] = 'Bora Lee'.split(" ");

console.log(firstName); // Bora
console.log(surname); // Lee

// 쉼표를 사용하여 배열의 필요하지 않은 요소를 버릴 수 있다.

// 두 번째 요소가 필요하지 않은 경우
var [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title); // Consul



// 할당 연산자 '우측'엔 모든 이터러블이 올 수 있다.
// 배열뿐만이 아닌 모든 이터러블에 구조 분해 할당을 적용할 수 있다.
let [a,b,c] = "abc"; // ["a","b","c"]
let [one,two,three] = new Set([1,2,3]);

console.log([a,b,c]);
console.log([one,two,three]);

// 할당 연산자 '좌측'엔 무엇이든 올 수 있다.
// 할당할 수 있는 (assignment)것은 어떤 것이든 올 수 있다.
// 객체 프로퍼티를 예로 들어보자. 
var user = {};
[user.name, user.surname] = "Bora Lee".split(' ');

console.log(user.name); //Bora
console.log(user.surname); // Lee


// Object.entries()를 활용하여 반복하기
// .entries와 구조 분해를 조합하면 객체의 키와 값을 순회해 변수로 분해 할당할 수 있다.

var user = {
    name : "John",
    age : 30
};

// 객체의 키와 값 순회하기
for (let [key,value] of Object.entries(user)){
    console.log(`${key}:${value}`); // name : John  , age : 30  키,값 순으로 출력
}

// 맵에서도 활용 할 수 있다.
var user = new Map();
user.set("name","Jack");
user.set("age","50");

for (let [key, value] of user){
    console.log(`${key}:${value}`);
}

// 변수 교환 트릭
// 두 변수에 저장된 값을 교환할 때 구조 분해 할당을 사용할 수 있다.

let guest = 'Jane';
let admin = 'Pete';

// 변수 guest엔 Pete, admin엔 Jane이 저장되도록 값을 교환
[guest, admin] = [admin,guest];

console.log(`${guest} ${admin}`); // Pete Jane 


/// 나머지 요소 가져오기 ' ... '

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// `rest`는 배열이다.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2


// 기본값
// 할당할 변수의 개수가 분해할 배열의 길이보다 크더라도 에러가 발생하지 않는다.
// 할당할 값이 없으면 ' undefined ' 로 취급

var [firstName, surname] = [];

// undefined
console.log(firstName);
console.log(surname);

// = 을 이용하여 기본값을 설정할 수 있다.
// 할당할 값이 없을 때 기본값이 출력하게 된다.

// 기본값
var [name = 'Guest', surname = 'Anonymous' ] = ['Julius'];


console.log(name); // Julius (배열에서 받아온 값)
console.log(surname); // Anonymous (기본값)

// 기본값으로 2개의 prompt 함수를 할당해 보자.

// name의 pormpt만 실행됨
// name엔 값이 제공되지 않음
// var [surname = prompt('성을 입력하세요'), name = prompt('이름을 입력하세요')] = ['김'];

// console.log(surname); // 김 (배열에서 받아온 값)
// console.log(name); // prompt에서 받아온 값

/* 객체 분해하기 */
console.log('----- 객체 분해하기 -----');

// 분해하려는 객체 프로퍼티의 키 목록을 패턴으로 사용하는 예시
var options = {
    title: 'Menu',
    width: 100,
    height: 200
};

var {title, width, height} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height) // 200
console.log('');

// 순서가 바뀌어도 동일하게 동작한다.
var {height, width, title} = {title:'Menu', width:100, height: 200};
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log('');

// 객체 프로퍼티를 프로퍼티 키와 다른 이름을 가진 변수에 저장해 보자.

// options 는 위에 코드로 대체

// { 객체 프로퍼티 : 목표 변수}
var {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

console.log(title); // Menu
console.log(w); // 100
console.log(h); // 200
console.log('');

// 프로퍼티가 없는 경우  = 을 사용하여 기본값을 설정하는 것도 가능하다.
var options = {
    title: 'Menu'
};

var {width = 100, height = 200, title} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log('');

// 객체에도 표현식이나 함수 호출을 기본값으로 할당할 수 있다.

// var options = {
//     title: 'Menu'
// };

// var {width = prompt('width?'), title = prompt('title?)')} = options;

// console.log(title); // Menu
// console.log(width); // prompt 창에 입력한 값


// 콜론과 할당 연산자를 동시에 사용할 수 있다.
var options = {
    title: "Menu"
  };
  
  var {width: w = 100, height: h = 200, title} = options;
  
  console.log(title);  // Menu
  console.log(w);      // 100
  console.log(h);      // 200


 // 프로퍼티가 많은 복잡한 객체에서 원하는 정보만 뽑아올 수도 있다

var options = {
    title: 'Menu',
    width: 100,
    height: 200
};

// title만 변수로 뽑아내기
var {title} = options;

console.log(title); // Menu