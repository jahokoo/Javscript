/* Map과 Set */



/* Map과 Set */

// map은 키가 있는 데이터를 저장하여 객체와 유사하다.
// 맵은 키에 다양한 자료형을 허용한다.

let map = new Map(); // map 생성

// map.set('1', 'str1'); // 문자형 키
// map.set(1, 'num1'); // 숫자형 키
// map.set(true, 'bool1') // 불린형 키

//체이닝
map.set('1', 'str1')
.set(1, 'num1')
.set(true, 'bool1');

// 맵은 키의 타입을 변환시키지 않고 그대로 유지한다.
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'

console.log(map.size); //3


// 맵은 키로 객체를 허용한다.
let john = { name : 'John'};

// 고객의 가게 방문 횟수를 세본다고 가정
let visitsCountMap = new Map();

// john을 맵의 키로 사용
visitsCountMap.set(john,123);

console.log(visitsCountMap.get(john)); // 123  (key-john의 value값)



/* 맵의 요소에 반복 작업하기 */


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // 키(vegetable)를 대상으로 순회합니다.
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // 값(amount)을 대상으로 순회합니다.
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // [키, 값] 쌍을 대상으로 순회합니다.
  for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
    console.log(entry); // cucumber,500 ...
  }

// forEach 메소드도 내장되어있다.
recipeMap.forEach((value, key) => {
	console.log(`${key}: ${value}`);
});


/* Object.entries 객체를 맵으로 바꾸기 */

console.log('-----Object.entries----')

// 각 요소가 [키,값] 쌍인 배열
let map1 = new Map([
	['1', 'str1'],
	[1, 'num1'],
	[true, 'bool1']
]);

console.log(map1.get('1')); // str1


// 평범한 객체로 맵을 만들고 싶다면 내장 메소드인 Object.entries(obj)를 활용하면된다.
// Object.entries는 키-값 쌍을 요소로 가지는 배열이다. 
let obj = {
	name : "John",
  age : 30
};

let map2 = new Map(Object.entries(obj));

console.log(map2.get('name')); // John

/* Object.fromEntries : 맵을 객체로 바꾸기*/

console.log('-----Object.fromEntries----');

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// 현재 가격 = { banana : 1, oragne : 2 , meat ; 4}
console.log(prices);
console.log(prices.orange); // 2


let map3 = new Map();
map3.set('banana', 1);
map3.set('orange', 2);
map3.set('meat', 4);

// let objFE = Object.fromEntries(map3.entries()); // 맵을 일반 객체로 변환
let objFE = Object.fromEntries(map3); // .entries() 생략하여 짧게 작성할 수 있다.
// 맵이 객체가 됨
// objFE = { banana : 1 , orange : 2, meat : 4}

console.log(objFE.orange); // 2


/* 셋(Set) */
console.log('----- Set ----');

let set = new Set();

let jack = { name: "Jack" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(jack, mary)은 여러 번 방문할 수도 있다.
set.add(jack);
set.add(pete);
set.add(mary);
set.add(jack);
set.add(mary);

// 셋에는 유일무이한 값만 저장된다. (즉 중복불가)
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}


/* Set의 값에 반복작업하기 */
console.log('----- Set의 값에 반복작업 하기------')

let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) console.log(value);

// forEach를 사용해도 동일하게 동작한다.
set2.forEach((value, valueAgain, set) => {
  console.log(value);
});

console.log(set2.entries());



// 배열에서 중복 요소 제거하기
// arr을 배열이라 가정하고 arr에서 중복 값을 제거해 주는 함수 unique(arr)를 만드러라.
const unique = (arr => Array.from(new Set(arr)));

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values));


// 애너그램 걸러내기
const aclean = (arr => { 
  let map = new Map();
  for(let word of arr){
    // 단어를 글자 단위로 쪼갠 후, 알파벳 순으로 정렬 후 재결합
    let sorted = word.toLowerCase().split('').sort().join('');
    // map에 추가
    map.set(sorted, word);
  };
  // 다시 배열로 만들어 리턴
  return Array.from(map.values());
} );

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


console.log(aclean(arr))


// 반복 가능한 객체의 키
let map5 = new Map();

map5.set("name", "John");

let keys = Array.from(map5.keys())

// Error: keys.push is not a function
// keys.push가 동작하지 않은 이유는 map.keys()가 배열이 아닌 이터러블을 반환하기 때문
// Array.from을 이용하여 맵을 배열로 변환할 수 있다.
keys.push("more");

console.log(keys)


let mapTest = new Map();

mapTest.set('첫번째','first');
mapTest.set(1,{'dd' : 'dd'});


console.log(mapTest.forEach((arr,arr2) => console.log(arr,arr2)));
console.log(typeof mapTest)

