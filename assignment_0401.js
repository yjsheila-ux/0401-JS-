// 실습 1. 콘솔 계산기
// 1. 숫자 두 개를 변수로 선언한다
// 2. 연산자를 문자열로 정한다 ("+", "-", "*", "/")
// 3. 연산자에 따라 계산 결과를 출력한다

// let num1 = 15
// let num2 = 2

// let operator = "+";

// if (operator === "+") {
//     console.log(num1 + num2);
// } else {
// console.log("지원하지 않는 연산자입니다 ");
// }  
///17 나옴 한번에 4가지 다 하고 싶은데 가능한가?

console.log("=====================")

// let num1 = 15
// let num2 = 2

// let operator = ["+","-","*","/"];

// if (operator === "+") {
//     console.log(num1 + num2);
// } else if (operator === "-") {
//     console.log(num1 - num2);
// } else if (operator === "*") {
//     console.log(num1 * num2);
// } else if (operator === "/") {
//     console.log(num1 / num2);
// } else {
// console.log("지원하지 않는 연산자입니다 ");
// }

// 지원하지 않는 연산자입니다  -> ["+","-","*","/"] 은 배열임으로 "+" 와 같은 문자열이 아니기 때문.
//for 문을 돌리면 가능할듯? JS: for (초기식; 조건식; 증가식) {}

// let num1 = 15
// let num2 = 2

// let operators = ["+","-","*","/"];

// for (let operator in operators) { //operator in operators 은 조건식인데, 초기식이랑 증가식을 모르겠음.
//     if (operator === "+") {
//         console.log(num1 + num2);
//     } else if (operator === "-") {
//         console.log(num1 - num2);
//     } else if (operator === "*") {
//         console.log(num1 * num2);
//     } else if (operator === "/") {
//         console.log(num1 / num2);
//     } else {
//     console.log("지원하지 않는 연산자입니다 ");
//     }
// }
// 일단 돌려보니  지원하지 않는 연산자입니다 *4 인걸 보아 돌아는 감. 그런데 "+" 이렇게 들어가지는 않나봄.
// operator 를 변수 지정을 안함. for 문 안에서 변수 지정이 가능? 밖에서 지정해야하면 operator = 뭘로 지정하지? 

//for (let i = 1; i <= 10; i++) {
//     console.log();
// };
// -> 수업과정에 for 문 안에 let 확인
// 하지만 지원하지 않는 연산자입니다 *4 임... ㅠㅠ

// in 을 사용하는게 아닌 of 를 사용하는 것임을 배움.
// for in -> 인덱스 (0,1,2,3)
// for of -> 값 ("+","-","*","/")
let num1 = 15
let num2 = 2

let operators = ["+","-","*","/"];

for (let operator of operators) { 
    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else if (operator === "/") {
        console.log(num1 / num2);
    } else {
    console.log("지원하지 않는 연산자입니다 ");
    }
}

// =결과=
// 17
// 13
// 30
// 7.5

console.log("=====================")

// 실습 2. 최종 합격 판정 프로그램
// ● 점수(score) 70 이상
// ● 출석률(attendance) 80 이상
// ● 과제 제출 여부(submitted) true
// ● 단, 점수 90 이상이면 출석률은 무시하고 합격

// if (((score >= 70 && attendance >= 80) || (score >= 90)) && submitted) {
//     console.log("합격");
// } else {
//     console.log("불합격");
// }

// let score = 75
// let attendance = 85
// let submitted = true
// Cannot access 'score' before initialization 
// 먼저 let 해야함. 

let score = 75
let attendance = 85
let submitted = true

if (((score >= 70 && attendance >= 80) || (score >= 90)) && submitted) {
    console.log("합격");
} else {
    console.log("불합격");
}

// 이걸 여러명의 것처럼 할 수도 있을까? -> dict 형식으로 만들어야할까 list 형식으로 만들어야 할까?
