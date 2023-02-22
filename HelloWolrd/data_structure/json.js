/* JSON과 메소드 */

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // string

console.log(json);

// JSON.strigify는 객체 뿐만 아니라 원시값에도 적용할 수 있다.

console.log(JSON.stringify(1)); // 1
console.log(JSON.stringify('test')); // "test"
console.log(JSON.stringify(true));  // true
console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// JSON.stringify 호출 시 무시되는 프로퍼티들
// 함수(메소드), 심볼형 (키가 심볼인) 프로퍼티, 값이 undefined인 프로퍼티
var user = {
    sayHi() { //무시
        console.log("hello");
    },
    [Symbol("id")]: 123, // 무시
    something: undefined //무시
};

console.log(JSON.stringify(user)); // {} 빈 객체가 출력됨.

// 중첩 객체도 알아서 문자열로 바꿔준다.
var meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["John", "amm"]
    }
}
console.log(JSON.stringify(meetup));// 객체 전체가 문자열로 변환됨

// 순환참조가 있으면 원하는대로 객체를 문자열로 바꾸는게 불가능하다.
var room = {
    number: 23
};

var meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup.place = room; // meetup은 room을 참조한다.
room.occupiedBy = meetup; // room은 meetup을 참조한다.

// JSON.stringify(meetup); // TypeError: Converting circular structure to JSON


/* replacer로 원하는 프로퍼티만 직렬화하기 */
console.log('----- replacer로 원하는 프로퍼티 직렬화하기-----')
var room = {
    number: 23
}

var meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup은 room을 참조한다.
};

room.occupiedBy = meetup // room 은 meetup을 참조함

console.log(JSON.stringify(meetup, ['title', 'participants']));
// {"title":"Conference","participants":[{},{}]}

// 순환참조를 발생시키는 room.occupiedBy를 제외하고 모든 프로퍼티를 넣어보자.
var room = {
    number: 23
};

var meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room
};

room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
//{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}


// 함수로 불러오기
console.log(JSON.stringify(meetup, function replace(key, value) {
    return key == 'occupiedBy' ? undefined : value;
}));

/* space로 가독성 높이기 */
console.log('----- space로 가독성 높이기-----');

var user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log(JSON.stringify(user, null, 2)); // 공백 문자 두개를 사용하여 들여쓰기함

console.log(JSON.stringify(user, null, 4)); // 4개 들여쓰기

// 커스텀 "toJSON"

console.log("----- toJSON ------");

var room = {
    number: 23
};

var meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2023, 0, 1)),
    room
};

console.log(JSON.stringify(meetup));
//{"title":"Conference","date":"2023-01-01T00:00:00.000Z","room":{"number":23}}

var room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};

var meetup = {
    title: "Conference",
    room
};

console.log(JSON.stringify(room)); //23
console.log(JSON.stringify(meetup));
// {"title":"Conference","room":23}


console.log("----- JSON.parse -----");
//문자열로 변환된 배열
var numbers = "[0,1,2,3]";

numbers = JSON.parse(numbers);

console.log(numbers[1]); // 1


// JSON.parse는 중첩객체에도 사용할 수 있다.
var userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

var user = JSON.parse(userData);

console.log(user.friends[1]); // 1


console.log("----- reviver 사용하기 -----");
// title : (meetup 제목), date : (meetup 일시)
var str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// 위 문자열을 역 직렬화하여 자바스크립트 객체를 만들어보자.

var meetup = JSON.parse(str);
// console.log(meetup.date.getDate()); // error  - meetup.date를  Date객체가 아닌 문자열로 인식하여 에러

// JSON.parse의 두 번째 인수인 reviver를 사용하여 에러를 해결할 수 있다.

var meetup = JSON.parse(str, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

console.log(meetup.date.getDate()); // 30

// 중첩 객체에도 적용할 수 있다.
var schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;

schedule = JSON.parse(schedule, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

console.log(schedule.meetups[1].date.getDate()); // 18




// 과제 ----
var user = {
    name: "John Smith",
    age: 35
};

console.log(user);

var user2 = JSON.parse(JSON.stringify(user));
console.log(user2);


// 
var room = {
    number: 23
};

var meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value){
    return (key != "" && value == meetup) ? undefined : value;
}));

/* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/