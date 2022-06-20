//while과 for 반복문

// let i = 0;
// while(i < 3){ // 0,1,2가 출력된다.
// 	console.log(i);
// 	i++;
// }
// let i = 3;

// while(i){
// 	console.log(i); // i가 0이되면 조건이 falsy가 되므로 반복문이 멈춘다.
// 	i--;
// }

// while(i) console.log(i--);

// do while 반복문
// let i = 0;
// do{
// console.log(i);
// i++;
// }while(i <3);

//for 반복문
// for (let i = 0; i < 3; i++){ // 0,1,2 출력
// 	console.log(i);
// }


// 인라인 변수
// 반복문 안에서만 접근 가능하다.
// for (let i = 0; i < 3; i++) {
//     console.log(i); // 0, 1, 2
//   }
//   console.log(i); // Error: i is not defined

// 이미 정의되어있는 변수를 사용할 수 있다.

// let i = 0;

// for (i = 0; i < 3; i++) { // 기존에 정의된 변수 사용
//  console.log(i); // 0, 1, 2
// }
// console.log(i); // 3, 반복문 밖에서 선언한 변수이므로 사용할 수 있음

// 구성요소 생략하기

//begin 생략
// let i = 0; // i를 선언하고 값도 할당하였다.

// for(; i < 3;i++){ // begin이 필요하지 않기 때문에 생략
// 	console.log(i); //0,1,2
// }


// step 생략
// let i = 0;
// for(; i < 3;){
// 	console.log(i++);
// }

// 구성요소 전부 생략
// for(;;){
// 	console.log('무한 반복')
// }

//반복문 빠져나오기 break
// let sum = 0;

// while(true){
// 	let value = +prompt('숫자를 입력하세요','');
// 	if(!value) break; // value가 falsy면 break
// 	sum += value;
// }
// console.log('합계 '+sum);

// 다음 반복으로 넘어가기 continue
// for (let i=0; i < 10; i++){
// 	//조건이 참이라면
// 	if (i % 2 == 0) continue; // i를 2로 나눴을 때 0이면 continue 즉 짝수라면 다음 반복으로..
// 	console.log(i);
// }

// 위 코드를 아래처럼 할 수도 있지만
// 아래와 같이 코드를 작성하면 부작용으로 중첩레벨이 하나 더 늘어나 if안의 코드가 길어지면 가독성이 떨어질 수 있다.
// for (let i = 0; i < 10; i++) {

//     if (i % 2) {
//       console.log( i );
//     }

//   }

// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//       let input = prompt(`(${i},${j})의 값`, '');

//       // 여기서 멈춰서 아래쪽의 `완료!`가 출력되게 하려면 어떻게 해야 할까요?
//     }
//   }

//   alert('완료!');

//lable 을 이용하여 반복문 빠져나오기
// outer: 
// for (let i = 0; i < 3; i++) { //outer = lable

//     for (let j = 0; j < 3; j++) {

//       let input = prompt(`(${i},${j})의 값`, '');

//       // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
//       if (!input) break outer; // (*)

//       // 입력받은 값을 가지고 무언가를 함
//     }
//   }
//   alert('완료!');


// 과제 -----

// for문을 이용하여 2부터 10까지 짝수 출력하기
// for(let i = 2; i <= 10; i++){
//      if(i % 2 == 0){
//     console.log(i);
//      }
// }

// // for문을 while문으로 바꾸기
// let i = 0;
// while(i < 3){
//     console.log(`number ${i}` )
//     i++
// }


// 사용자가 유효한 값을 입력할 때 까지 프롬프트 창 띄위기

// 내가 적은 해답
// while(true){
//     let number = prompt('100을 초과하는 숫자를 입력하세요',0);
//     if(number > 100 || '' || !number){
//         break;
//     }
// }

// do while을 사용한 해답
// let num;
// do{
//     num = prompt('100을 초과하는 숫자를 입력하세요',0);
// }while(num  <= 100 && num)

// 소수 출력하기
let n = prompt('소수 출력하기',0);
nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    console.log(i)
}
