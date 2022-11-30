/* 나머지 패턴 */

var options = {
    title: 'Menu',
    height: 200,
    width: 100
};

// title = 이름이 title인 프로퍼티
// rest = 나머지 프로퍼티들
var {title, ...rest} = options;

// title엔 'Menu' , rest엔 {height: 200, width: 100}이 할당
console.log(rest.height); // 200
console.log(rest.width); // 100


// let 없이 구조 분해 사용하기
// let으로 새로운 변수를 선언하지 않고 기존 변수에 분해한 값을 할당할 수도 있다.

// 잘못된 코드
var title, width, height;

// SyntaxError: Unexpected token '=' 이라는 에러가 아랫줄에서 발생
// Declaration or statement expected.

// {title, width, height} = {title: 'Menu' , width: 200, height: 100};

// 에러의 이유
// // 구조 분해 할당을 위해 사용한 {...}를 자바스크립트가 '코드 블록'으로 인식하여 에러가 발생


// 에러 해결 방법
// 할당문을 괄호 (...)로 감싸 JS가 {...}를 코드 블록이 아닌 '표현식으로 해석'하게 하면 된다.

var title, width, heigth;

// 정상적을 작동된다.
({title, width, height} = {title: 'Menu', width: 200, height: 100});

console.log(title); // Menu


/* 중첩 구조 분해 */
console.log('----- 중첩 구조 분해 ------');

var options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Dount"],
    extra: true
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
var {
    size: { // size 할당
    width,
    heigth
    },
    items: [item1, item2], // items는 여기에 할당
    title = "Menu" // 분해하려는 객체의 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);

// extra를 제외한 options 객체의 모든 프로퍼티가 상응하는 변수에 모두 할당된다.


/* 매개변수 */
console.log('----- 똑똑한 매개변수 ------')
// 메뉴 생성에 관여하는 함수가 있다고 가정하고
// 너비,높이,제목,항목 등이 필요하기 때문에 정보를 매개변수로 받아준다.

// 리팩토링 전 메뉴 생성함수
// var showMenu = (title = "Untitled", width = 200, height = 100, items = []) => {
//     //...
// }

/* 매개변수가 많아질수록 가독성이 떨어진다. */
// 기본값을 사용해도 괜찮은 경우 아래와 같이 undefined를 여러 개 넘겨줘야 한다.
// showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

// 위 같은 경우 처럼 가독성이 안좋아 질때 구조분해를 사용하면 좋다.

// 매개변수 모두를 '객체'에 모아 함수에 전달해, 전달받은 객체를 분해하여 할당할수 있게 리팩토링

// 함수에 전달할 객체
var options = {
    title: "My menu",
    items: ["item1", "item2"]
};

// 똑똑한 함수는 전달받은 객체를 분해하고 변수에 즉시 할당한다.
function showMenu({title = "Untitled", width = 200, height = 100, items= []}){
    // title, items는 객체 options에서 가져오고
    // width, height는 기본값을 사용
    console.log(`${title} ${width} ${height}`); // My menu 200 100
    console.log(items);  // item1, item2
}

showMenu(options);

// 중첩 객체와 콜론을 조합하여 더 복잡한 구조 분해를 만들어 보자.

var showMenu = ({
    title = "Untitled",
    width: w = 100, // width = w
    height: h = 200, // height = h
    items: [item1, item2] // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당된다.
}) => {
    console.log(`${title} ${w} ${h}`); // My menu 100 200
    console.log(item1) // item1
    console.log(item2) // item2
};

showMenu(options);

// 함수 매개변수 문법은 구조 분해 할당 문법과 동일하다.
/*
function({
    incomingProperty: varName = defaultValue
    ...
  })
  */

// 모든 인수에 기본값을 할당해 주려면 빈 객체를 명시적으로 전달하면된다.

// 빈 객체를 인수 전체의 기본값으로 만들게 되면   
//      ex -> func({인수 전체} = {})
// 어떤 경우든 분해할 것이 생겨 함수에 인수를 전달하지 않아도 에러가 발생하지 않는다.
function showMenu1({
	title = "Menu",
	width = 100,
	height = 200} = {}) {
console.log(`${title} ${width} ${height}`);
}

showMenu1(); // Menu 100 200


/* 과제 */
console.log('과제');


// 구조 분해 할당
let user = { name: "John", years: 30 };

let {name: name, years: age, isAdmin: isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

//최대 급여 계산하기
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  

const topSalary = (salaries) => {
    // max는 salaries.values를 의미한다.
    // 즉 max가 비어있으면 (0) null을 반환하게 됨
    let max = 0;
    let maxName = null;

    for(const [name,salary] of Object.entries(salaries)){
        if ( max < salary){
            max = salary;
            maxName = name;
        }
    }
    console.log(maxName)
}

topSalary(salaries)