// 심볼

// Symbol() 을 사용하여 심볼값을 만들어 보자.
// id는 새로운 심볼이 된다.
// let id = Symbol();

// 심볼을 만들 때 심볼 이름이라 불리는 설명을 붙일 수도 있다.
// 심볼 id에는 "id"라는 설명이 붙는다.
// let id = Symbol("id");


//심볼은 유일성이 보장된다.
// 심볼 이름(설명)이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다르다.
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1 == id2); // false

// 심볼은 문자형으로 자동 형 변환 되지 않는다.
// let id = Symbol("id");
// alert(id);  //TypeError: Cannot convert a Symbol value to a string

// 심볼을 반드시 출력해야 하는 상황이라면 toString()메소드를 명시적으로 호출하면된다.
// let id = Symbol("id");
// alert(id.toString()); // Symbol(id)가 얼럿 창에 출력됨

// let id = Symbol("id");
// alert(id.description); // id

// let user = { // 서드파티 코드에서 가져온 객체
//     name: "John"
//   };
  
//   let id = Symbol("id");
  
//   user[id] = 1;
  
//   alert( user[id] ); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.


// 객체리터럴을 사용해 객체를 만든 경우 대괄호를 사용해 심볼형 키를 만들어야 한다.
// let id = Symbol("id");

// let user = {
//     name:"john",
//     [id]:123 // "id": 123은 안된다.
// };

// console.log(user)

// 키가 심볼인 프로퍼티는 for..in 반복문에서 배제된다.
// let id = Symbol("id");
// let user = {
//     name:"John",
//     age:30,
//     [id]:123,
// };

// for(let key in user) console.log(key); // name과 age만 출력된다.

// // 심볼로 직접 접근하면 잘 작동된다.
// console.log(user[id]);

// console.log(Object.keys(user)); // 에서도 키가 심볼인 프로퍼티는 배제

// Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 모든 프로퍼티를 복사한다.
// let id = Symbol("id");
// let user = {
//     [id] : 123
// };

// let clone = Object.assign({},user);

// console.log(clone) // 123

//전역 심볼

// 전역 레지스트리에서 심볼을 일는다.
// let id = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만든다.


// // 동일한 이름을 이용해 심볼을 다시 읽는다. (좀 더 멀리 떨어진 코드에서도 가능)
// let idAgain = Symbol.for("id"); // 심볼을 읽음(반환)

// alert(id === idAgain); // true

// Symbol.keyFor을 사용하면 이름을 얻을 수 있다.

// 이름을 이용해 심볼을 찾음
// let sym = Symbol.for('name');
// let sym2 = Symbol.for('id');

// // 심볼을 이용해 이름을 얻음
// console.log(Symbol.keyFor(sym)); // name
// console.log(Symbol.keyFor(sym2));  // id

// 
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name, 전역 심볼
console.log(Symbol.keyFor(localSymbol)); // undefined , 전역 심볼이 아님
console.log(localSymbol.description); // name 