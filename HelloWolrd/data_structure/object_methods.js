

let user = {
	name: "john",
	age: 30
};


let user2 = new Map();
user2.set(user)
// Map의 메소드 사용법
console.log(user2.keys());
console.log(user2.values());
console.log(user2.entries());


// Object의 메소드 사용법

// Object.*를 호출하면 iterable객체가 아닌 배열을 반환한다.
console.log(Object.keys(user)); // ["name" : "age"]
console.log(Object.values(user)); // ["john", 30]
console.log(Object.entries(user)); // [ ["name",john"], ["age","30"]]

// Object.values를 사용해 프로퍼티 값을 가져온다.
// for문을 사용하여 user의 values를 순회
for (let value of Object.values(user)){
	console.log(value); // john과 30이 연속적으로 출력됨
};


/* 객체 변환하기 */
console.log(' 객체 변환하기')
// Object.entries와 Object.fromEntries를 사용하여 객체에서 배열메소드를 사용할 수 있게 해준다.

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌린다.
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
  console.log(doublePrices.meat); // 8


// 프로퍼티 값 더하기
// Object.values와 for of 를 사용해 모든 급여의 합을 구하시오
const sumSalaries = (salaries) =>{
    if(Object.keys(salaries).length == 0 ){
        console.log(0);
    }
    // let sum = 0;
    // for(value of Object.values(salaries)){
    //     sum += value
    //     }
    // return sum

    // reduce를 이용한 방법
    return Object.values(salaries).reduce((a,b) => a+b,0)
    }



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log( sumSalaries(salaries) ); // 650
  


// 프로퍼티 개수 세기
// 객체 프로퍼티 개수를 반환하는 함수를 만들어 보자

const count = (obj) =>{
    return Object.keys(obj).length;
}

let users ={
    name: 'John',
    age: 30
};

console.log( count(users));