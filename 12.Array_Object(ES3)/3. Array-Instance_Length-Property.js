/*
	인스턴스 생성 논리
	new Array(): new 연산자에서 생성자 함수를 호출하여 인스턴스 생성
	Array(): 직접 생성자 함수를 호출하여 인스턴스 생성
	
	
	length : 열거/삭제할 수 없지만 변경은 가능
	값 변경 시 배열의 엘리먼트 수가 변경된다.
*/

var obj = new Array();
console.log(typeof obj); // object
console.log(obj.length); // 0

// 값이 하나면 엘리먼트 수만큼 배열을 생성, 
// 값이 두개 이상이면 배열의 엘리먼트로 생성
var obj = new Array(3);
console.log(obj); // [undefined, undefined, undefined]


// 배열의 length 값 변경
var value = [1, 2, 3];
value.length = 5;
console.log(value); // [1, 2, 3, undefined, undefined]

value.length = 2;
console.log(value); // [1, 2]