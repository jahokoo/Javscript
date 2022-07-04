// 원시값의 메소드

// 객체의 장점 : 함수(function)를 프로퍼티로 저장할 수 있다.

// let john = {
//     name: "John",
//     sayHi: function(){
//         alert('안녕하세요');
//     }
// };

// john.sayHi(); // 안녕하세요


// let str = "Hello";
// alert(str.toUpperCase());

// toUpperCase()가 호출 될 때 내부에서 일어나는 일
// 문자열 str은 원시값이므로 프로퍼티에 접근하는 순간 특별한 객체가 만들어진다.(이 객체는 문자열의 값을 알고, 유용한 메소드들을 갖고있다.)
// 메소드가 실행되고 새로운 문자열이 반환된다. (alert 창에 HELLO(문자열) 출력)
// 특별한 객체는 파괴되고 원시값 str만 남는다.


// 숫자형도 고유한 메소드를 지원한다.
// let n = 1.23456;
// alert(n.toFixed(2)); // 1.23

// String,Number,Boolean은 생성자로 쓰지 않는 것이 좋다.
// 몇몇 상황에서 혼동을 불러 일으킬수 있다.

alert(typeof 0); // "number"
alert(typeof new Number(0)); // "object"


//객체는 논리 평가 시 항상 참을 반환하기 때문에, 아래 예시에서 무조건 열린다.
let zero = new Number(0);

if(zero){ // 변수 zero는 객체이므로, 조건문이 참이 된다.
    alert("zero is 참?");
}


// new를 붙이지 않고 String,Number,Boolean 을 사용하는건 괜찮ㄴ다.
// new없이 사용하면 인수를 원하는 형의 원시값으로 바꿔주기 때문이다.
let num = Number("123"); // 문자열을 숫자로 바꿔줌


//  null / undefined 는 메소드가 없다.
// 특수 자료형인 null 과 undefined의 원시값(null / undefined)은 위 같은 법칙을 따르지 않는다.
//두 자료형에 속한 값의 프로퍼티에 접근하려 하면 에러가 발생한다
// alert(null.set) // TypeError: Cannot read properties of null (reading 'set')


// 문자열에 프로퍼티를 추가할 수 있을까?

// let str = "hi";

// str.test = 5;
// alert(str.test)

// 엄격 모드와 비 엄격 모드에 따라 결과가 나뉜다.

// 엄격 모드 : TypeError: Cannot create property 'test' on string 'hi'
// 엄격모드에서 래퍼 객체를 수정하려 하면 에러가 발생한다.

// 비 엄격 모드 : undefined 
// 비 엄격 모드에서는 래퍼 객체에 프로퍼티 test를 추가되기만 하고, 바로 삭제되기 때문에 프로퍼티 'test'를 찾을 수 없게 된다.

// 원시값은 추가 데이터를 저장할 수 없다.