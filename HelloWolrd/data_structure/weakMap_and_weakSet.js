/* 위크맵(WeakMap) */

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // 정상적으로 동작 ( 키 = 객체)

console.log(weakMap)
// 문자열 ("test")은 키로 사용할 수 없다.
// weakMap.set("test", "it just test!"); /// Error: Invalid value used as weak map key



// 위크맵의 키로 사용된 객체를 참조하는 게 없다면 해당 객체는 메모리에서 지워진다.

let john = { name : "John"};

let weakMap1 = new WeakMap();

weakMap1.set(john, 'john hi');

john = null; // 참조를 덮어씀

// john을 나타내는 객체는 메모리에서 지워짐
console.log(weakMap1.get(john)); //  undefined





/* 위크셋 */
let visitedSet = new WeakSet();

let jack = { name: "Jack" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(jack); // Jack이 사이트를 방문합니다.
visitedSet.add(pete); // 이어서 Pete가 사이트를 방문합니다.
visitedSet.add(jack); // 이어서 Jack이 다시 사이트를 방문합니다.

// visitedSet엔 두 명의 사용자가 저장될 겁니다.

// John의 방문 여부를 확인해보겠습니다.
console.log(visitedSet.has(jack)); // true

// Mary의 방문 여부를 확인해보겠습니다.
console.log(visitedSet.has(mary)); // false

jack = null;

// visitedSet에서 jack을 나타내는 객체가 자동으로 삭제됩니다.



//  읽음 상태인 메시지 저장하기
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let read = new WeakSet();

// 메시지 2개가 읽음 상태로 변경
read.add(messages[0]);
read.add(messages[1]);

// 다시 읽어보자
read.add(messages[0]);
// Set과 유사하게 동작하므로 중복요소 없음

// 
console.log('message 0은 읽음 상태인가? : ' + read.has(messages[0]));


// 심볼형 프로퍼티를 사용하여 위크셋을 사용하지 않고 충돌을 피할 수 있다.
let isRead = Symbol("isRead");
messages[0][isRead] = true;



// 메시지 읽은 날짜 저장하기
let dateSave =  new WeakMap();
let date = new Date();


dateSave.set(messages[0],date);
dateSave.set(messages[1], date);
console.log(dateSave)

console.log('message를 언제 읽었나요? : ' + dateSave.get(messages[0]));
