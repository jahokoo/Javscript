/* Date 객체를 숫자로 변경해 시간차 측정하기 */


// Date 객체를 숫자형으로 변경하면 타임스탬프(date.getTime() 을 호출시 반환되는 값)가 된다.
var date = new Date();
console.log(+date); // 타임스탬프 (date.getTime()를 호출하는 것과 동일


// 시차를 측정해 스톱워치를 만들어보자

var start = new Date(); // 측정 시작

// 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
};

var end = new Date(); // 측정 종료

console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.`);


/* Date.now() */

console.log('----Date.now()-----');
// Date.now는 date.getTime()과 의미는 동일하지만 Date객체를 만들지 않아서
// 보다 빠르고 가비지컬렉터의 일을 덜어준다.

// Date.now()를 사용해 스톱워치를 만들어보자.

var start = Date.now(); // 측정 시작 1970년 1월 1일부터 현재까지의 밀리초

//원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
};

var end = Date.now(); // 측정 종료

// Date 객체가 아닌 숫자끼리 차감
console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.`);

//더 좋은 성능을 준다지만 직접 코드를 돌려봤을 때 별 차이 없고 오히려 더 느린 경우도 생겼다.


/* 벤치마크 테스트 */

// 비교 대상을 두고 성능을 비교하여 시험하고 평가할 때 쓰인다.
console.log('----벤치마크 테스트-----');

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

console.log('diffSubtract를 십만번 호출하는데 걸린 시간: ' + bench(diffSubtract) + 'ms');
console.log('diffGetTime을 십만번 호출하는데 걸린 시간: ' + bench(diffGetTime) + 'ms');



// 좀 더 신뢰할만한 벤치마크 테스트를 만드려면 benchmark를 여러 번 번갈아 돌려야 한다.
function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// 예열용(heat up) 코드
bench(diffSubtract);
bench(diffGetTime);

// 함수 bench를 각 함수별로 10번씩 돌린다.
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

console.log(`diffSubtract에 소모된 시간 ${time1}`);
console.log(`diffGetTime에 소모된 시간 ${time2}`);


/* Date.parse와 문자열 */
console.log('----Date.parse와 문자열-----');
//Date.parse(str)를 사용하면 문자열에서 날짜를 읽어올 수 있다.

var ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms); // 1327611110417  (타임스탬프)

// Date.parse를 이용하면 타임스탬프만으로도 새로운 Date 객체를 만들 수 있다.
var date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
console.log(date); // Fri Jan 27 2012 05:51:50 GMT+0900 (한국 표준시)


// 과제
console.log('------------')

// 날짜 생성하기
/* 2012년 2월 20일, 오전 3시 12분을 나타내는 Date 객체를 만들어보세요(시간대는 로컬).
그리고 alert 함수를 이용해 생성한 객체를 출력하세요.
*/

var date = new Date(2012, 1, 20, 3, 12);

// datestring 형식
var date2 = new Date("February 20, 2012 03:12:00");
console.log(date)
console.log(date2)


// 요일 보여주기

/* 날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.
 */

// 콘솔창에는 맨앞에 요일이 나와서 이를 대문자로 만들고 잘라서 나오게하였다.
const getWeekDay = (date) => {
    return String(date).toUpperCase().slice(0, 2);
}

// 답안
// function getWeekDay(date) {
//     // 요일이 담긴 배열을 만듬
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//     // date.getDay()로 받은 값을 인덱스로 사용하여 요일을 얻어온다.
//     return days[date.getDay()];
//   }

var date = new Date(2013, 0, 3); // 2012년 1월 3일
console.log(getWeekDay(date)); // "TU"가 출력되어야 함


/* 유럽 기준 달력 */

/* 유럽국가의 달력은 월요일부터 시작합니다(월요일-1, 화요일-2, … 일요일-7).
 ‘유럽’ 기준 숫자를 반환해주는 함수 getLocalDay(date)를 만들어보세요. */

const getLocalDay = (date) => {
    let day = date.getDay();
    if (day == 0) {
        day == 7;
    } else {
        day += 1;
    }
    return day
}


var date = new Date(2019, 11, 5);  // 2019년 11월 5일
console.log(getLocalDay(date));       // 금요일이므로, 5가 출력되어야 함


// 일 전 '일' 출력하기
/* 
date를 기준으로 days일 전 '일’을 반환하는 함수 getDateAgo(date, days)를 만들어보세요,

오늘이 20일이라면 getDateAgo(new Date(), 1)는 19를, getDateAgo(new Date(), 2)는 18을 반환해야 합니다.

days가 365일 때도 제대로 동작해야 합니다.

주의: 함수는 date를 변경하지 않아야 합니다.
*/
const getDateAgo = (date, day) => {
    date = new Date(date);  // date를 변경하지 않아야하기 때문에 복사
    date.setDate(date.getDate() - day); // 복사한 date로 날짜를 받아와 수정
    return date.getDate();
}

var date = new Date(2015, 0, 2)
console.log(getDateAgo(date, 1)); // 1
console.log(getDateAgo(date, 2)); // 31
console.log(getDateAgo(date, 365)); // 2


// 달의 마지막 일

/*  
특정 달의 마지막 일을 반환하는 함수 getLastDayOfMonth(year, month)를 작성해보세요. 
반환 값은 30이나 31, 29(2월), 28(2월)이 될 겁니다.

매개변수:

year – 숫자 4개로 구성된 연(예: 2012)
month – 월(0부터 11)
윤년인 2012년의 2월은 29가 반환되어야 합니다. getLastDayOfMonth(2012, 1) = 29 
*/

const getLastDayOfMonth = (year, month) => {
    // month + 1 = 다음달 , 세번째 매개변수 0 = 1일전  => 이전 달의 마지막일
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1)) // 29
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1)); // 28


// 몇 초나 지났을까요?

/*
오늘 하루가 시작된 이후 몇 초나 지났는지 반환하는 함수 getSecondsToday()를 만들어보세요.
현재 시각이 10:00 am이고, 서머타임이 적용되지 않은 경우라면 아래와 같은 결과가 나와야 합니다.
*/

const getSecondsToday = () => {
    let now = new Date();
    // 현재를 나타내는 객체 생성
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let result = now - today; // 차이는 milliseconds로 나오기 떄문에
    return Math.round(result / 1000) // 초로 변환해준다.
}

console.log(getSecondsToday());


// 몇 초나 남았을까요?
/*
오늘 하루가 끝날 때까지 남은 초를 반환해주는 함수 getSecondsToTomorrow()를 만들어보세요.
현재 시각이 23:00이라면 아래와 같은 결과가 나와야 합니다.

getSecondsToTomorrow
*/

function getSecondsToTomorrow() {
    let now = new Date();
    // 내일 날짜
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let result = tomorrow - now;
    return Math.round(result / 1000);
}

console.log(getSecondsToTomorrow());


// 상대 날짜 출력하기

function formatDate(date) {
    let dayOfMonth = date.getDate(); // 일
    let month = date.getMonth() + 1; // 월
    let year = date.getFullYear();  // 년도
    let hour = date.getHours(); // 시
    let minutes = date.getMinutes(); // 분
    let diffMs = new Date() - date; // 차이
    let diffSec = Math.round(diffMs / 1000);  // ms -> 초
    let diffMin = diffSec / 60;  // ms -> 분
    let diffHour = diffMin / 60; // ms -> 시

    // formatting
    year = year.toString().slice(-2); // 2022 -> 22
    // 한 자리 숫자 (10월 미만의 달)일 경우 앞에 0을 붙임
    month = month < 10 ? '0' + month : month; 
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return '현재';
    } else if (diffMin < 1) {
        return `${diffSec} 초 전`
    } else if (diffHour < 1) {
        return `${diffMin} 분 전`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}


console.log(formatDate(new Date(new Date - 1)));

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30초 전"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5분 전"

// 어제의 날짜를 31.12.2016 20:00 형태로 출력
console.log(formatDate(new Date(new Date - 86400 * 1000)));

