// switch문
// let a = 2+2;

// switch(a){
// case 3:
// 	console.log('비교하려는 값보다 작습니다.');
// 	break;
// case 4 :
// 	console.log('비교 값과 일치');
// 	break;
// case 5:
// 		console.log('비교하려는 값보다 큽니다.');
// 	break;
// default:
// 	console.log('어떤 값인지 파악이 되지 않습니다.');
// }

// break문이 없을 경우 
// 조건과 일치하는 case문과 이어지는 case문들을 실행한다.
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( '비교하려는 값보다 작습니다.' );
//   case 4:
//     console.log( '비교하려는 값과 일치합니다.' );
//   case 5:
//     console.log( '비교하려는 값보다 큽니다.' );
//   default:
//     console.log( "어떤 값인지 파악이 되지 않습니다." );
// }


// switch / case 문의 인수에는 어떤 표현식이든 올 수 있다.
// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert("표현식 +a는 1, 표현식 b+1는 1이므로 이 코드가 실행됩니다.");
//     break;

//   default:
//     alert("이 코드는 실행되지 않습니다.");
// }

//여러개의 case문 묶기
// let a = 3;

// switch (a) {
//   case 4:
//     console.log('계산이 맞습니다!');
//     break;

//   case 3: // (*) 두 case문을 묶음
//   case 5:
//     console.log('계산이 틀립니다!');
//     console.log("수학 수업을 다시 들어보는걸 권유 드립니다.");
//     break;

//   default:
//     console.log('계산 결과가 이상하네요.');
// }

// 자료형의 중요성
// let arg = prompt("값을 입력해주세요.");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( '0이나 1을 입력하셨습니다.' );
//     break;

//   case '2':
//     alert( '2를 입력하셨습니다.' );
//     break;

//   case 3:
//     alert( '이 코드는 절대 실행되지 않습니다!' );
//     break;
//   default:
//     alert( '알 수 없는 값을 입력하셨습니다.' );
// }


// switch문을 if문으로 변환하기
// switch (browser) {
//     case 'Edge':
//       alert( "Edge를 사용하고 계시네요!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
//       break;

//     default:
//       alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
//   }

//위 코드를 if문으로 변경해 보자.
// let browser = prompt();

// if (browser == 'Edge') {
//     console.log('Edge를 사용 중');
// } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera') {
//     console.log('서비스를 지원하는 브라우저를 사용 중');
// } else {
//     console.log('안녕하세요 마지막 else문 입니다.')
// }

//if문을 switch문으로 변환하기

// let a = +prompt('a?', '');

// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }

// if (a == 2 || a == 3) {
//     alert('2,3');
// }

// 위 코드를 switch문으로 변환해보자.

let a = +prompt('a?', '');

switch (a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
}
