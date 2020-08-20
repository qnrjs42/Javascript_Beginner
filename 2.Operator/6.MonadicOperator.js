/*
	단항 연산자
	
	형태: +value
	값을 Number 타입으로 변환
	
	코드 가독성
	 - +를 더하기로 착각할 수 있음
	 - Number()도 기능 같음
	 차라리 Number()함수를 사용하는 것이 가독성에 더 좋다.
	 
	 형태: -value
	 값의 부호를 바꿈
	 
	 + -> -
	 - -> +
	 
	 연산할 때만 바꿈
	 원래 값은 바뀌지 않는다.
	 
	 차라리 (value * -1)로 하는게 가독성에 좋다.
*/

var value = "7";
console.log(typeof value); // string
console.log(typeof +value); // number
console.log(typeof Number(value)); // number

var value = 7;
console.log(-value); // -7
console.log(8 + -value); // 1
console.log(value); // 7





