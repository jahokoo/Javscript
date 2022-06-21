// 함수

// function showMessage(){
// 	console.log('hi');
// }

// showMessage();
// showMessage();

// 지역변수
// function showMessage(){
// 	let message = '안녕하세요'; // 지역 변수
// 	console.log(message);
// }
// showMessage();
// alert(message); // RefernceError 지역변수는 함수 안에서만 접근 가능하다.

// 외부 변수
// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John

// 함수에서 외부변수에 접근 뿐만 아니라 수정도 가능
// let userName = 'John';

// function showMessage() {
//     userName = "Bob"; // (1) 외부 변수를 수정함

//     let message = 'Hello, ' + userName;
//     console.log(message);
// }

// console.log(userName); // 함수 호출 전이므로 John 이 출력됨

// showMessage();

// console.log(userName); // 함수에 의해 Bob 으로 값이 바뀜


// 함수 내부 변수가 외부 변수와 동일한 이름일 경우, 함수는 내부 변수를 가르킨다.
// 함수 내부에서 외부 변수는 함수 내부 변수에 가려진다.
// 외부 변수를 함수 바깥에서 호출하면 외부 변수를 출력하며 함수 내부에 동일한 이름의 내부 변수는 호출하지 않는다.

// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // 같은 이름을 가진 지역 변수를 선언합니다.

//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }

// // 함수는 내부 변수인 userName만 사용합니다,
// showMessage();

// alert( userName ); // 함수는 외부 변수에 접근하지 않습니다. 따라서 값이 변경되지 않고, John이 출력됩니다.

// 매개변수
// function showMessage(from,text){
// 	console.log(from + ": "+text);
// }
// showMessage('Korea', 'Hi');
// showMessage('Korea', 'whats up');


// 기본값
// showMessage('David'); // David : undefined

// text에 기본값을 줘보자
// function showMessage(from,text="no text given"){
// 	console.log(from + ": "+ text);
// }
// showMessage("David"); // David : no text given

// 기본값 설정 다른방법
// function showText(text){
// 	if(text == undefined) {
// 		text = '빈 문자열';
// 		}
// 	console.log(text);
// }
// showText(); // 빈 문자열

// if문 대신 논리연산자 || 사용해보기
// function showText(text){
//     text = text || '빈 문자열'
// 	console.log(text);
// }
// showText(); // 빈 문자열


// nullish 병합연산자도 활용할 수 있다.
// function showCount(count){
// 	console.log(count ?? "unknown");
// }
// showCount(0); // 0
// showCount(null); // unknown
// showCount(); // unknown

// 반환값 return value
// function sum(a,b){
// 	return a+b;
// }
// let result = sum(1,2); // 변수에 함수를 담음
// console.log(result); // 3; 함수를 담은 변수 출력

// // return은 함수 내 어디든 사용할 수 있다.
// function checkAge(age){
// 	if(age >= 18){
// 		return true;
// 	}else{
// 		return confirm('보호자의 동의를 받으셨나요?');
// 	}
// }

// let age = prompt('나이를 알려주세요',18);

// if(checkAge(age)){
// 	console.log('접속 허용'); // 동의를 받았다면 true
// }else{
// 	console.log('접속 차단'); // 동의 받지않았다면 (취소버튼) false
// }
// // return만 명시하면 아무것도 반환하지 않고 함수가 종료된다.
// function showMovie(age){
// 	if(!checkAge(age)){
// 	return;
// }
// 	console.log("영화상영"); 
// }
// showMovie();

//  return문이 없거나 return지시자만 있는 경우 함수는 undefined를 반환한다.
// function doNothing(){/* empty */ }
// console.log(doNothing() == undefined); //true

// function doNothing() {
//     return;
//   }
  
//   alert( doNothing() === undefined ); // true

//함수 == 주석
// 함수는 간결하고 한가지 기능만 수행할 수 있게 만들어야한다.
// 함수가 길어지면 함수를 잘게 쪼개야 하는데 코드 2개를 비교하여 확인해보자.

// 레이블을 사용한 반복문
// function showPrimes(n){
// 	nextPrime: for(let i =2; i < n; i++){
// 		for(let j=2; j < i; j++){
// 			if(i & j == 0) continue nextPrime;
// 		}
// 		console.log(i); //소수
// 	}
// }

// //소수 여부를 판단하는 isPrime이라는 코드를 따로 분리하여 작성
// function showPrimes(n){
// 	for(let i=2; i < n; i++){
// 		if(!isPrime(i)) continue;
// 			console.log(i) // a prime
// 	}
// }

// function isPrime(n){
// 	for(let i = 2; i<n; i++){
// 		if(n % i == 0) return false;
// 	}
// 	return true;
// }


//과제 
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('보호자의 동의를 받으셨나요?');
//     }
//   }
// 위 코드를 ?와 ||를 활용해 각각 함수를 만들어 보자.

// ? 연산자
// function checkAge(age){
//     return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요')
// }

// || 연산자
// function checkAge(age){
//     return (age > 18) || confirm('보호자의 동의를 받으셨나요')
// }

// a와 b 중 작은 값을 반환 해주는 함수를 만들어보자.

// Math.min()
// function min(a,b){
//     return Math.min(a,b);
// }

// if
// function min(a,b){
//     if(a > b){
//         return b;
//     }else{
//         return a;
//     }
// }

// ?
// function min(a,b){
//     return (a > b) ? b : a
// }

// min(2,5)
// min(3,-1)
// min(1,1)

function pow(x,n){
    return (x ** n);
}
let x = +prompt("첫 번째 값",1);
let n = +prompt("두 번째 값",1);

if(n < 1 || isNaN){
    alert('1 이상의 자연수를 입력하세요.');
}else{
    console.log(pow(x,n));
}

// function pow(x,n){
//     let result = x;
//     for (let i = 1; i < n; i++){
//         result *= x;
//     }
//     return result;
    
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`${n}은 양의 정수이어야 합니다.`);
// } else {
//   alert( pow(x, n) );
// }

pow(3,2)
pow(3,3)
pow(1,100)