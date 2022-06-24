//참조에 의한 객체 복사

// var user={name : "John"};
// var admin = user; // 참조값을 복사


// 예시
// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // 'admin' 참조 값에 의해 변경됨

// alert(user.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함

// 참조에 의한 비교
// let a = {};
// let b = a; // 참조에 의한 복사

// alert( a == b ); // true, 두 변수는 같은 객체를 참조합니다.
// alert( a === b ); // true

// 두 객체는 동일하게 비어있지만, 독립된 객체이므로 false를 반환
// let a = {};
// let b = {}; // 독립된 두 객체

// alert( a == b ); // false

// 객체 복사,병합과 Object.assign

//객체 복사 방법
// let user = {
//     name: "John",
//     age: 30
//   };

//   let clone = {}; // 새로운 빈 객체

//   // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
//   for (let key in user) {
//     clone[key] = user[key];
//   }

//   // 이제 clone은 완전히 독립적인 복제본이 되었습니다.
//   clone.name = "Pete"; // clone의 데이터를 변경합니다.

//   alert( user.name ); // 기존 객체에는 여전히 John이 있습니다.
//   alert( clone.name) // Pete

// assign 메소드를 사용해보자
// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
// Object.assign(user, permissions1, permissions2);
// console.log(user)
// // now user = { name: "John", canView: true, canEdit: true }

// 목표객체 (user = dest)에 동일한 이름의 프로퍼티가 있으면 기존값에 덮어 씌운다.
// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// alert(user.name); // user = { name: "Pete" }


// Object.assign을 사용하면 반복문 없이 객체를 복사할수있음
// let user = {
//     name: "John",
//     age: 30
//   };

//   let clone = Object.assign({}, user); //{}빈객체에 user의 프로퍼티를 복사하여 clone에 할당

// console.log(clone)

// 중첩 객체 복사

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

//   alert( user.sizes.height ); // 182

// 프로퍼티가 원시값이 아닌 다른 객체에 대한 참조 값일 경우(sizes)
// user.sizes는 객체이기 때문에 참조 값이 복사되어 서로 같은 객체를 공유한다.
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user); // user의 프로퍼티 복사

alert(user.sizes === clone.sizes); // true, 같은 객체입니다.

// user와 clone는 sizes를 공유합니다.
user.sizes.width++;       // 한 객체에서 프로퍼티를 변경합니다.
alert(clone.sizes.width); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.

// 깊은 복사를 해주는 내장 메소드 structuredClone
let deep = structuredClone(user);  // 깊은 복사 메소드structuredClone
alert(clone.sizes === deep.sizes);  //false

user.sizes.width++;   // 비교를 위해 width를 상승시킨다. 51 -> 52

console.log("user.sizes : ", user.sizes); // 52
console.log("clone.sizes : ", clone.sizes); // 52 user.sizes와 같은 참조 값
console.log("deep.sizes : ", deep.sizes); // 51

//얕은 복사 전개 연산자 ...를 사용해 보자.
let shallow = { ...user };
shallow.sizes.width++;  // 중첩객체를 변경하면 원본도 같이 수정됨
console.log(user.sizes); // width = 53;
shallow.add = 'test';
console.log(shallow); // add:test 추가 원본에는 영향x
console.log(user);   // add가 추가되지 않음


// JSON.stringify를 사용한 깊은 복사
// JSON.stringify는 객체를
let jsonShallow = JSON.parse(JSON.stringify(user));

console.log('jsonShallow :',jsonShallow); // user

jsonShallow.sizes.width++; // 깊은복사한 객체 수정

console.log(jsonShallow.sizes); // width = 54
console.log(user.sizes); // width = 53


function deepCopyObj(obj){
    const result = {};

    for(let key in obj){
        if(typeof obj[key] === 'object'){ // 중첩객체가 있다면
            result[key] = deepCopyObj(obj[key]); // 재귀함수를 사용해 값을 할당
        }else{
            result[key] = obj[key];
        }
    }
    return result;
}

const deepCopyObject = deepCopyObj(user);
console.log(deepCopyObject === user); // fasle