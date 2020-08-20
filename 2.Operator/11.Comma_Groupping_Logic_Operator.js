/*
	콤마 연산자
	기호: ,
	var a = 1, b = 2;
	한 번만 var 작성
	
	() 연산자 그룹핑 연산자
	5 / (2+3)
	
	|| 연산자 논리 OR 연산자
	평가 결과가 하나라도 true이면 true
	아니면 false
	
	왼쪽 결과가 true이면 오른쪽은 비교하지 않음
	
	
	&& 연산자 논리 AND 연산자
	모두 true이면 true 아니면 false
	
*/

var value, zero = 0, two = 2;
console.log(value || zero || two); // 2

var value2, zero2 = 0;
console.log(zero2 || value2); // undefined

var one = 1;
console.log(one === 1 || two === 2); // true
// 왼쪽 결과가 true라 오른쪽을 비교하지 않음


var one2 = 1, two2 = 2;
console.log(one2 && two2); // 2
// 모두가 true이며 마지막의 2를 반환


var one3 = 1, zero3 = 0;
console.log(one3 && zero3 && nine); // 0
// zero가 false라 오른쪽을 비교하지 않고 zero 변숫값인 0을 반환
// nine을 비교하면 nine 변수가 없으므로 에러 발생


