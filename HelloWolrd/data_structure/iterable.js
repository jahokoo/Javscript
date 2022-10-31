/* iterable 객체

Symbole.iterator
*/


// from부터 to까지 수를 나열하게 만들어야 함
let range = {
    from: 1,
    to: 5
};

// 1. for..of 최초 호출 시 Symbol.iterator가 호출된다.
range[Symbol.iterator] = function(){

    // Symbol.iterator는 이터레이터 객체를 반환
    // 2.for..of는 반환된 이터레이터 객체만을 대상으로 동작하며,
    // 이때 다음 값도 정해진다.
    return {
        current: this.from,
        last: this.to,


        // 3.for..of 반복문에 의해 반복마다 next()가 호출된다.
        next() {
            // 4. next()는 값을 객체 {done:.., value:..}형태로 변환해야 한다.
            if(this.current <= this.last){
                return {done:false, value: this.current++}; // 다음 값이 있다면 next()
            }else{
                return {done : true}; // 다음 값이 없다면 이터레이터 종료
            }
        }
    };
};


// 동작확인
for (let num of range){
    console.log(num); // 1,2,3,4,5
}


/* 문자열은 이터러블이다. */


// for..of는 문자열의 각 글자를 순회한다.
for(let char of 'test'){
	// 글자 하나당 한 번 실행된다. 4회 호출
	console.log(char); // t, e, s, t
};

//서로게이트 쌍(surrogate pair)에도 동작한다.

let str = '𝒳😂';
for(let char of str){
    console.log(char); //'𝒳😂';
}


/* 이터레이터를 명시적으로 호출하기 */

// for..of를 사용하는것과 동일한 방법으로 문자열을 순회하되, 직접 호출하여 순회
// 문자열 이터레이터를 만들고 값을 수동으로 가져온다.
let str2 ="Hello";

// for..of를 사용한 것과 동일한 작업을 함
// for(let char of str) console.log(char);
let iterator = str2[Symbol.iterator]();

while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value);
};


/* 이터러블과 유사배열 */

// 유사배열 객체이지만 이터러블 객체가 아닌 경우

// let arrayLike = { // 인덱스와 length프로퍼티가 있음 => 유사 배열
//     0: "Hello",
//     1: "World",
//     length: 2
//   };
  
//   // Symbol.iterator가 없으므로 에러 발생
//   for (let item of arrayLike) {}


/* Array.from */
console.log('-----Array.from-----')

let arrayLike = { 
    0: "Hello",
    1: "World",
    length: 2
  };

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (정상작동)


// 각 숫자를 제곱
let arr2 = Array.from(range, num => num * num);
console.log(arr2); // 1,4,9,16,25


// Array.from으로 문자열을 배열로 만들어 보자.

let str3 = '𝒳😂';

// str를 분해해 글자가 담긴 배열로 만듦
let chars = Array.from(str3);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2

// 위 예시는 아래 예시와 동일하게 동작한다.
let str4 = '𝒳😂';

let chars2 = []; // Array.from 내부에선 아래와 동일한 반복문이 돌아갑니다.
for (let char of str4) {
  chars2.push(char);
}

console.log(chars2);


// Array.from을 사용해 서로게이트 쌍을 처리하는 slice를 직접 구현할수도 있다.

function slice(str,start,end){
    return Array.from(str).slice(start, end).join(' ')
};

let str5 = '𝒳😂𩷶';

console.log(slice(str5, 1, 3));

//내장 메소드는 서로게이트 쌍을 지원하지 않는다.
console.log(str5.slice(1,3)); // 불필요한 값 출력 (특수 값)