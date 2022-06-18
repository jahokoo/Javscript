
// 간단한 if문 사용해 보기
// let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

// if (year == 2015) alert('right')

// // 조건이 true일 때 복수의 문을 실행해 보자.

// if(year == 2015){
//     console.log('right')
//     console.log('you are genius')
// }

// boolean 변환
// if(0){
//     console.log('나 거짓 절대 실행되지 않는다.')
// }

// if(1){
//     console.log('나 진실 항상 실행된다.')
// }

// let cond = (year == 2015);

// if(cond){
//     console.log("정답이야")
// }

// //else 절
// if(year == 2015){ // true조건
// 	console.log('정답!');
// }else{ // false 즉 true가 아니라면
// 	console.log('오답');
// }

// //else if로 복수 조건 처리하기
// if(year < 2015){ // year이 2015 보다 작다면
// 	console.log('(힌트) 더 높은 숫자 입니다.');
// }else if(year > 2015){ // 2015보다 크다면
// 	console.log('(힌트) 더 낮은 숫자 입니다.');
// }else{ // 둘다 아니라면
// 	console.log('정답!');
// }

//조건부 연산자 ?

// 조건부 연산자를 사용하기전 우리가 알던 if문 예시
// let accessAllowed;
// let age = prompt('나이를 입력해 주세요.','');

// if(age > 18){
// 	accessAllowed = true;
// }else{
// 	accessAllowed = false;
// }
// console.log(accessAllowed);

// let test = (age > 18);
// console.log(test);

// 다중 물음표 연산자
// let age = prompt('나이를 입력해주세요.', 18);

// let message = (age < 3) ? '아기야 안녕?' :
//   (age < 18) ? '안녕!' :
//   (age < 100) ? '환영합니다!' :
//   '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

// console.log(message);

// // 위 예시를 if else로 바꿔보자.
// if(age < 3){
//     message = '아기야 안녕?';
// }else if(age < 18){
//     message = '안녕!';
// }else if(age < 100){
//     message = '환영합니다!';
// }else{
//     message = '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
// }
// console.log(message);

// 부적절한 ?문
// let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?', '');
// (company == 'Netscape') ?
//    alert('정답입니다!') : alert('오답입니다!');

// // if문을 사용하여 변형해 보자.
// if (company == "Netscape"){
// 	console.log('정답입니다');
// }else{
// 	console.log('오답입니다');
// }

//  비어있는 문자열을 제외한 모든 문자열은 true를 반환한다. 즉 아래 코드는 실행된다.
// if ("0") {
//     alert( 'Hello' );
//   }

//   //문제
//   let question = prompt('자바스크립트의 공식 이름은 무엇일까요?','');
//   if(question == 'ECMAScript'){
//     console.log('정답입니다.')
//   }else{
//     console.log('모르셧나요 정답은 "ECMAScript" 입니다. ');
//   }


// let value = parseInt(prompt('숫자를 입력해주세요',''));

// if(value > 0){
//     console.log(1);
// }else if(value < 0){
//     console.log(-1)
// }else{
//     console.log(0)
// }


// let result = (a + b < 4) ? '미만' : '이상';

let message = (login == '직원') ? '안녕하세요':
(login == '임원') ? '환영합니다.' :
(login == '') ? '로그인이 필요합니다.' :
'';