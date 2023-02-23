// 재귀함수

// 주어진 숫자까지의 모든 숫자 더하기

// for문을 사용 / 두 번째로 빠름
function sumTo(n){
    result = 0;
    for(let i = 0; i <= n; i++){
        result += i;
    }return result;
}

console.log(sumTo(100));//5050

// 재귀를 사용 / 가장 느림, 중첩 호출과 실행 스택관리가 필요함
function sumTo2(n){
    result = 0;
    return n > 1 ? n + sumTo2(n-1) : 1
}

// function sumTo2(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
//   }
console.log(sumTo2(100));//5050

// 등차수열 사용  / 가장 빠름
// 등차수열의 합공식  sumTo(n) = n*(n+1)/2
function sumTo3(n){
    return n * (n + 1) / 2;
}
console.log(sumTo3(100)); //5050


// 팩토리얼 계산하기
function factorial(n){
    return n != 1 ? n * factorial(n-1) : 1 
    // 재귀 베이스를 0으로 두어도 상관없지만 재귀 단계가 하나 더 증가한다.
    // return n ? n * factorial(n-1) : 1 
}

console.log(factorial(5)); // 120

// 피보나치 수 계산하기

// 재귀를 사용한 구현
// 함수 호출 도중 수많은 서브호출이 일어나서 같은 값을 여러번 평가하게 되므로 
// n이 커질수록 속도가 느려진다.
function fib(n){
    return n <= 1 ? n : fib(n -1 ) + fib(n-2);
}

// 반복문을 사용한 구현
// 중복되는 계산이 없어 재귀보다 빠름
function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
console.log(fib2(2)) // 2
console.log(fib2(7)) // 13
console.log(fib2(77)) // 5527939700884757

// 단일 연결 리스트 출력하기

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  // 반복문 사용
const printList = (list) =>{
    let tmp = list; // 변수를 사용한 이유는  나중에 list로 어떤 작업울 해야하는 경우가 생길수 있기 떄문
    while(tmp){
        console.log(tmp.value);
        tmp = tmp.next
    }
}

//재귀를 사용
const printList2 = (list) =>{
    console.log(list.value) // 현재 요소 출력
    if(list.next) printList2(list.next) // 나머지 출력
}
console.log(printList2(list))


// 단일 연결 리스트 역순으로 출력하기

// 반복문 사용
const printList3 = (list) =>{
    let tmp = list;
    let arr = [];
    while(tmp){
    arr.push(tmp.value); // 배열에 하나씩 넣어준다.
    tmp = tmp.next;
    }
    // 끝에서 하나씩 뺴준다.
    for (let i = arr.length -1; i >= 0; i--){
        console.log(arr[i]);
    }
}

// 재귀를 사용
function printList4(list){
    if(list.next){
     printList4(list.next) // 리스트의 나머지 요소들 출력
    } 
    //현재 요소 출력
    console.log(list.value)
}
console.log(printList4(list))
