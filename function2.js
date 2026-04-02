// 함수를 값처럼 다루기
// 1) 함수를 변수에 할당 할 수 있다.

// 함수 정의 -> 설명서/설계도
// y = 2x + 1
function sayHello() {
    console.log("Hello") 
};

//함수 호출 -> 기능 실제로 사용
// f(5) = 11
sayHello(); // Hello

// return 하지 않아도 됨. 왜? 매개변수 지정 안했으니까.

// 함수 -> 기능 그 자체
// f(x) = 2x + 1
sayHello
console.log(sayHello) // [Function: sayHello]

// 변수에 함수 담기 
const f = sayHello;
f(); // Hello
console.log(f); // Hello

console.log("=========================")

// 2) 함수를 다른 함수에 인자로 전달 할 수 있다.
function run(fn) {
    console.log("start function")
    fn();
    console.log("end function")
}

run(sayHello); // Hello

// 기본) 함수를 정의한 곳에서 직접 호출
// 응용) 함수를 정의한 곳과 호출하는 곳이 달라짐.

run(sayHello()); // Error
// sayHello() 함수 실행 후, fn에 return undefined 가 들어간다.
// undefined 은 함수가 아니기 때문에 Error