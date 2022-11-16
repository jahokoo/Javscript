// 배열과 메소드






/* splice */
console.log('-----splice-----')
// delete를 사용하여 배열에 요소를 지울 수 있다.
let arr = ["I", "go", "home"];

delete arr[1]; // "go"를 삭제

console.log(arr[1]); // undefined

// delete를 사용 후 배열 = arr = ["I", ,"home"]
console.log(arr.length); // 3
console.log(arr.length == 3); // true


// splice로 요소를 제거
let arr2 = ["I", "study", "JavaScript"];

arr2.splice(1, 1); // index 1부터 요소 한 개를 제거한다.

console.log(arr2); //['I', 'JavaScript']



// splice로 요소를 제거 후 그 자리에 다른 요소 대체
let arr3 = ["I", "study", "JavaScript", "right", "now"];

// 처음(0)부터 3개의 요소를 지우고 그 자리를 다른 요소로 대체한다.
arr3.splice(0, 3, "First", "Second");

console.log(arr3); // ['First', 'Second', 'right', 'now']


// splice는 삭제된 요소로 구성된 배열을 반환가능
let arr4 = ["I", "study", "JavaScript", "right", "now"];

// 처음 두 개의 요소를 삭제함
let removed = arr4.splice(0, 2);

console.log(removed); // "I", "study" <-- 삭제된 요소로 구성된 배열


// splice의 deleteCount(삭제할 요소 개수)를 0으로 설정하면 요소를 제거하지 않고 요소를 추가할 수 있다.
let arr5 = ["I", "study", "JavaScript"];

// 인덱스 2부터
// 0개의 요소를 삭제
// 그 후, "complex"와 "language"를 추가
arr5.splice(2, 0, "complex", "language");

console.log(arr5); // "I", "study", "complex", "language", "JavaScript"



// 음수 인덱스도 사용할 수 있다.
let arr6 = [1, 2, 5];

// 인덱스 -1부터 (배열 끝에서부터 첫 번째 요소)
// 0개의 요소를 삭제
// 3과 4를 추가
arr6.splice(-1, 0, 3, 4);
// arr6.splice(2,0,3,4); = 위와 같은 결과
console.log(arr6); // 1,2,3,4,5


/*  slice */
console.log('---------slice---------')
let arr7 = ["t", "e", "s", "t"];

console.log(arr7.slice(1, 3)); // e,s (인덱스 1부터 2까지)
console.log(arr7.slice(-2)); // s,t (인덱스 -2 부터 끝 까지)


/*concat*/

console.log('---------concat---------')

let arr8 = [1, 2];

// arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어진다.
console.log(arr8.concat([3, 4])); // 1,2,3,4

// arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어진다.
console.log(arr8.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어진다.
console.log(arr8.concat([3, 4], 5, 6)); // 1,2,3,4,5,6


// concat은 제공받는 배열의 요소를 복사해 활용한다.
// "객체"가 인자로 넘어오면 객체는 분해되지 않고 통으로 복사된다.
let arr9 = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};

console.log(arr9.concat(arrayLike)); // 1,2,[object Object]


//인자로 받은 유사 배열 객체에 특수한 프로퍼티가 있으면 concat은 그 객체를 배열처럼 취급한다.
// 즉 객체 전체가 아닌 객체 프로퍼티의 값이 더해짐
let arr10 = [1, 2];

let arrayLike2 = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr10.concat(arrayLike2)); // 1,2,something,else


/* forEach로 반복작업 하기 */

// 요소들을 alert를 통해 출력해주는 코드
// for each element call alert
// console.log("-----forEach-----")
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// 인덱스 정보까지 더하여 출력하는 코드
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});


/* 배열 탐색하기 */
console.log("-----배열 탐색하기-----");

// 배열 내에서 무언가를 찾는 메소드들에 대해 알아보자.
let arr11 = [1, 0, false];

console.log(arr11.indexOf(0)); // 1
console.log(arr11.indexOf(false)); // 2
console.log(arr11.lastIndexOf(false)); // 2
console.log(arr11.indexOf(null)); // -1 (값을 찾지못함)

console.log(arr11.includes(1)); // true


// includes만 NaN을 제대로 처리할 수 있다.
const arr12 = [NaN, undefined];
console.log(arr12.indexOf(NaN)); // -1 (완전 항등 비교 === 는 NaN엔 동작하지 않으므로 0이 출력되지 않는다.)
console.log(arr12.includes(NaN));// true (NaN의 여부를 확인.)

//undefined는 찾을 수 있다.
console.log(arr12.indexOf(undefined)); // 1
console.log(arr12.includes(undefined)); // true



/* find와 findIndex */

console.log('------find와 findIndex------')
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user_find = users.find(item => item.id == 1);
let user_findindex = users.findIndex(item => item.id == 1)

console.log(user_find.name); // John
console.log(user_find.id); // 1

// findIndex는 해당 요소의 인덱스를 반환한다.
console.log(user_findindex); // 0
console.log(user_findindex.name); // undefined


/* filter */

console.log('-----filter-----');

// filter는 조건에 맞는 요소 전체를 담은 배열을 반환한다.
let users2 = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// 3보다 작은 값을 반환
let someUsers = users2.filter(item => item.id < 3);

console.log(someUsers.length); // 2




/* 배열을 변형하는 메소드 */

/* map */
console.log('-----map-----');

// map은 배열 요소 전체를 대상으로 함수를 호출, 함수 호출 결과를 배열로 반환한다.

// 배열의 각 요소의 길이를 출력
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6


/* sort */

console.log('-----sort-----');

let arr13 = [1, 2, 15];

// arr 내부가 재정렬
arr13.sort();
console.log(arr13); // 1, 15, 2 
/* 15가 2보다 큰 이유
요소는 문자열로 취급되어 재정렬된다.
문자열 비교는 사전편집 순으로 진행되기 때문에 2는 15보다 큰 값으로 취급된다.
        "2" > "15"
*/


// 새로운 정렬 기준을 만든 함수
function compare(a, b) {
    if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
    if (a == b) return 0; // 두 값이 같은 경우
    if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// 배열 요소를 숫자 오름차순 기준으로 정렬해 보자

let arr14 = [1, 2, 15];
arr.sort(compare(arr14));
console.log(arr14); // 1,2,15

// 정렬 과정에서 어떤 비교가 일어나는지 확인하는 함수
[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + " <> " + b);
    return a - b;
});



arr14.sort(function (a, b) { return a - b; });
console.log(arr14);

// 화살표 함수로 더 클린한 코드를 만들 수 있다.
// 위 함수 선언문과 동일하게 작동
arr14.sort((a, b) => a - b);
console.log(arr14);


// 문자열은 localeCompare를 사용하여 정렬하자.
// 독일어로 나타낸 국가가 요소인 배열을 정렬해 보자.

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (제대로 정렬이 되지 않음)

console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (제대로 정렬됨)


/* reverse */
console.log('-----reverse-----');

let arr15 = [1, 2, 3, 4, 5];
arr15.reverse();

console.log(arr15); // 5,4,3,2,1

// 독일어를 localeCompare를 사용해 정렬시킨 후 reverse로 역순으로 정렬시켜 보자
let arr16 = ['Österreich', 'Andorra', 'Vietnam'];
arr16.sort((a, b) => (a.localeCompare(b))).reverse();
console.log(arr16);


/* split과 join */
console.log('-----split-----');

let names = 'Bilbo, Gandalf, Nazgul';

let arr17 = names.split(', ');
// let arr17 = names.split(',');  // 공백을 넣지 않으면 공백을 포함하여 반환한다.
for (let name of arr17) {
    console.log(`${name}에게 보내는 메시지`); // Bilbo에게 보내는 메시지
}


// split 두번째 인수는 숫자를 받을 수 있고, 배열의 길이를 제한해 준다.
let arr18 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

console.log(arr18); // Bilbo, Gandalfㅇ

// split을 빈 문자열로 지정하면 문자열을 글자 단위로 분리한다.
let str = 'test';
console.log(str.split('')); // t,e,s,t

// join은 split과 반대역할을 한다.
// 배열 요소를 모두 합친후 하나의 문자열을 만들어 낸다.
console.log('-----join-----');

let arr19 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str2 = arr19.join(';'); // 배열 요소 모두를 ;를 사용해 하나의 문자열로 합칩니다.

console.log(str2); // Bilbo;Gandalf;Nazgul


/* reduce와 reduceRight */

// reduce로 배열의 모든 요소를 더한 값을 구해보자.
let arr20 = [1, 2, 3, 4, 5];

let result = arr20.reduce((sum, current) => sum + current, 0);

console.log(result); // 15


// 초깃값 생략도 가능하다.

// reduce에서 초깃값을 제거함(0이 없음)
let result2 = arr20.reduce((sum, current) => sum + current);

console.log(result2); // 15


// 빈 배열에 초깃값이 없으면 에러가 발생한다.
let arr21 = [];


// TypeError: Reduce of empty array with no initial value
// arr21.reduce((sum, current) => sum + current);
// 초깃값을 설정해 주면 초깃값이 반환된다.
// arr21.reduce((sum, current) => sum + current,0);


/* isArray로 배열 여부 알아내기 */
console.log('-----isArray-----');

// Array.isArray(value)에서 value가 배열이면 true , 아니면 false
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true



/* 과제 */


// border-left-width를 borderLeftWidth로 변경하기
function camelize(str) {
    return str.split('-') // 문자열( - )을 기준으로 배열로 변환
        .map((word, index) =>
            index == 0 ? word : word[0].toUpperCase() // index가 0 일경우 문자 그대로 , 0이 아니면 첫번째 글자를 대문자로 변경
                + word.slice(1)).join(''); // 맨 앞글자만 잘리기 때문에 나머지는 복사해 붙여넣는다. join으로 배열을 문자열로 변환
};

console.log(camelize('background-color'));



// 특정 범위에 속하는 요소 찾기
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b) 
}

let arra = [5, 3, 8, 1];

let filtered = filterRange(arra, 1, 4);

console.log(filtered); // 3,1 (조건에 맞는 요소)

console.log(arra); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)


// 특정 범위에 속하는 요소 찾기(배열 변경하기)
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++){
        let val = arr[i];
    if (val < a || val > b) { 
        arr.splice(i, 1); // 조건에 맞다면 배열에서 지운다.
        i--;
    }
}

}
let ar = [5, 3, 8, 1];

filterRangeInPlace(ar, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

console.log(ar); // [3, 1]


// 내림차순 정렬하기
let ar2 = [5,2,1,-10,8];

ar2.sort((a,b) => b - a); // 서로 비교하여 음수,양수,0 을 return한다. 

console.log(ar2);

// 배열 복사본을 정렬하기

function copySorted(arr){
    return arr.slice().sort() // 배열을 복사후 정렬
}
let ar3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(ar3);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( ar3 ); // HTML, JavaScript, CSS (no changes)


// 확장가능한 계산기 (새로운 연산 추가하기)

// 생성자 함수 대신 클래스로 생성
class Calculator{
   constructor(){
    // 메소드를 만들기 위해 this를 프로퍼티에 사용
        this.methods = { 
        '-' : (a,b) => (a-b),
        '+' : (a,b) => (a+b)
    };

    this.calculate = function(str){
        let split = str.split(' '),
        // 변수에 맞게 인덱스를 추가
        a = +split[0], // 변수앞에 '+'가 존재하면 숫자로 인식
        op = split[1],
        b = +split[2];

        if(!this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN;
        }
        
        return this.methods[op] (a,b);
   };

   this.addMethod = function(name,func){
    this.methods[name] = func;
   }
}
};

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result3 = powerCalc.calculate("2 ** 3");

console.log( result3 ); // 8


/* 이름 매핑하기 */


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users3 = [ john, pete, mary ];

let names3 = users3.map(user => user.name );

console.log( names3 ); // John, Pete, Mary


/* 객체 매핑하기 */

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users4 = [ john2, pete2, mary2 ];

let usersMapped = users4.map( user => ({fullName : `${user.name} ${user.surname}`,id : user.id}) );

console.log(usersMapped)
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith


function sortByAge(users){
    // sort 안에서  화살표함수 사용가능
    users.sort((a,b) => a.age - b.age)
}

let ageArr = [pete, john, mary];

sortByAge(ageArr);

console.log(ageArr[0].name)
console.log(ageArr)


/* 배열 요소 무작위로 섞기 */

function shuffle(array){
    // 계산결과가 양수나 음수 둘 중 하나이기 때문에 sort()는 요소를 무작위로 재정렬 해준다.
    array.sort(() => Math.random() - 0.5)
}

let arr111 = [1, 2, 3];

shuffle(arr111);
// arr = [3, 2, 1]

shuffle(arr111);
// arr = [2, 1, 3]

shuffle(arr111);
// arr = [3, 1, 2]
// ...


/** 평균 나이 구하기 */

function getAverageAge(users){
   return  users.reduce( (sum, user) => sum + user.age,0) / users.length;
}

console.log( getAverageAge(ageArr)); // 27.6666


/* 중복 없는 요소 찾아내기 */

function unique(arr){

    // filter 와 indexOf로 중복제거하는 코드
    // return arr.filter((item,index) => arr.indexOf(item) == index)

    // 배열안에 요소와 비교하여 중복되지 않는 요소만 추가하는 코드
    let result=[];

    for(let str of arr){
        if(!result.includes(str)){
            result.push(str);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); 



/*  배열안에 객체의 id를 키로 만들기 */
function groupById(arr){
    // 객체안의 id를 key로 만들고 value를 값으로 준다.
    return arr.reduce( (obj, value) => {
        obj[value.id] = value;
        return obj;
    })
}

let users22 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
let usersById = groupById(users22);

console.log(usersById)
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/