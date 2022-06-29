// 옵셔널 체이닝


// ?. 앞 대상이 null이나 undefined라면 평가를 멈추고 undefined를 반환한다.
// let user={};
// alert(user?.address?.street); // undefined


// 객체가 존재하지 않더라도 에러가 발생하지 않는다.
// let user = null;

// alert( user?.address ); // undefined
// alert( user?.address.street ); // undefined


// ?.앞에 반드시 변수는 선언되어 있어야한다.
// 변수 user가 선언되어 있지 않다면 평가시에 에러가 발생한다.

// // ReferenceError: user is not defined
// user?.address;


// //단락평가
// // ?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘며
// // ?.오른쪽에 있는 부가동작 또한 동작하지 않게 된다.
// let user = null;
// let x = 0;

// user?.sayHi(x++); // user는 null이기 때문에 아무 일도 일어나지 않습니다. 

// alert(x); // 0, x는 증가하지 않습니다.


// ?.() 와 ?.[]

// 존재 여부가 확실치 않은 함수를 호출할 때 ?.()를 어떻게 쓰는가
// let user1 = {
//     admin() {
//       alert("관리자 계정입니다.");
//     }
//   }
  
//   let user2 = {};
  
//   user1.admin?.(); // 관리자 계정입니다.
//   user2.admin?.();

// []를 사용해 객체 프로퍼티 접근하기
let user1 = {
    firstName: "Violet"
  };
  
  let user2 = null; // user2는 권한이 없는 사용자라고 가정해봅시다.
  
  let key = "firstName";
  
  alert( user1?.[key] ); // Violet
  alert( user2?.[key] ); // undefined
  
  alert( user1?.[key]?.something?.not?.existing); // undefined


// delete와 조합하여 사용할 수도 있다.
delete user?.name; // user가 존재하면 user.name을 삭제한다.

// 옵셔널 체이닝은 읽기 & 삭제하기는 가능하지만
// 수정(업데이트)는 할 수 없다.
user1?.firstName = 'koo' //SyntaxError: Invalid left-hand side in assignment 
alert( user1?.[key] );// 에러 발생 이유 : undefined = "koo"가 되기 때문