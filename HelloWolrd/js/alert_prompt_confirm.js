// prompt
let age = prompt('나이를 입력해주세요.', 100); // default = 100

alert(`당신의 나이는 ${age}살 입니다.`); // 당신의 나이는 100살입니다.

console.log(age)

//confirm
let isBoss = confirm("당신이 주인인가요?");

alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.

//과제
/* 간단한 페이지 만들기
사용자에게 이름을 물어보고, 입력받은 이름을 그대로 출력해주는 페이지를 만들어 보세요.
*/

let question = prompt("이름이 뭐니?");
alert(question);