/*
	산술 연산자 ( + )
	
	
	한쪽이라도 평가 결과가 Number 타입이 아니면
	평가 결과를 더하지 않고 연결한다.
*/

var two = "2"; 
var value = 1 + two;
console.log(value) // 12
console.log(typeof value); // string

var value = 1 + 5 + "ABC";
console.log(value); // 6ABC