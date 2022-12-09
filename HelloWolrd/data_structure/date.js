/* 객체 생성하기 */

// 인수 없이 호출하면 현재 날짜와 시간이 저장된 Date객체를 반환한다.
var now = new Date();
console.log(now); // 현재 날짜 및 시간 출력


// 타임스탬프(timestamp)를 사용하여 날짜를 숫자 형태로 나타낼 수 있다.
// new Date(milliseconds)는 UTC기준 1970년 1월1일 0시0분초에서 
// 밀리초(1/1000초) 후의 시점이 저장된 Date 객체를 반환한다.

// 1970년 1월 1일 0시 0분 0초(UTC+0)를 나타내는 객체
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// 1970년 1월1일 24시간 후 = 1970년 1월2일
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);


// 1970년 1월1일 이전 날짜에 해당하는 타임스탬프 값은 '음수'이다.

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );


var date = new Date("2017-01-26");
console.log(date); // Thu Jan 26 2017 09:00:00 GMT+0900 (한국 표준시)
// 인수로 시간은 지정하지 않았기에 GMT 자정
// 코드가 실행되는 시간대 (timezone)에 따라 출력 문자열이 바뀐다.


// Date의 최소 정밀도는 1밀리초(1/1000초)이다.
var date = new Date(2011,0,1,2,3,4,567);
console.log(date); // 2011년 1월 1일, 02시 03분 04.567초


/* 날짜 구성요소 얻기 */
console.log('---- 날짜 구성요소 얻기 ----');

// 현재 일시
var date = new Date();

// 현지 시간 기준 시
console.log(date.getHours());

// 표준시간대(UTC+0  ,  일광 절약 시간제를 적용하지 않은 런던시간) 기준 시
console.log(date.getUTCHours());


/* 날짜 구성요소 설정하기 */
console.log('---- 날짜 구성요소 설정하기 ----');

var today = new Date();

today.setHours(0);
console.log(today); // 날짜는 변경되지 않고 시만 0으로 변경된다.

today.setHours(0,0,0,0);
console.log(today); //날짜는 변경되지 않고, 시,분,초 모두 변경된다. ( 00시 00분 00초)


/* 자동 고침 */
console.log('---- 자동 고침 ----');

// Date에는 자동 고침(autocorrection)이라는 기능이 있다.
// 범위를 벗어나는 값을 설정하면 자동으로 알맞은 값으로 수정된다.
var date = new Date(2013, 0, 32); // 2013년 1월 32일은 존재 x
console.log(date); // 2013년 2월 1일 출력

// 2016/2/28 의 이틀 뒤인 날짜를 구해보자.
// 3월2일 혹은 3월1일이 나올텐데 이는 우리가 계산할 필요가 없다. Date객체가 알아서 처리하기 때문
var date = new Date(2016,1,28);
date.setDate(date.getDate() + 2);
console.log(date); // 2016년 3월 1일


// 일정 시간이 지난 후의 날짜를 구하는데도 종종 쓰인다.
// 70초후의 날짜를 구해보자.
var date = new Date();
date.setSeconds(date.getSeconds() + 70);
console.log(date); // 70초 후의 날짜가 출력

// 0이나 음수를 날짜 구성요소에 설정하는 것도 가능하다.
var date = new Date(2016, 0 ,2); // 2016년 1월 2일

date.setDate(1); // 1일로 변경
console.log(date); // 01 Jan 2016

date.setDate(0); // 일의 최솟값은 1이므로 0을 입력하면 이전 달의 마지막 날을 설정한 것과 같은 효과
console.log(date); // 31 Dec 2015
