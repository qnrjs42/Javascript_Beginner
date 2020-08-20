/*
	문자열 추출
	substring()
	
	파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환
	
	두 번재 파라미터를 작성하지 않으면 반환 대상의 끝까지 반환
	
	다양한 추출 조건 작성
	
	
	substr()
	파라미터의 시작 인덱스부터 지정한 문자 수를 반환
	
	slice()
	파라미터의 시작 인덱스부터 끝 인덱스 직전가지 반환
*/

var value = "01234567";
console.log(value.substring(2, 5)); // 234
console.log(value.substring(5)); // 567
console.log(value.substring()); // 01234567

console.log(value.substr(0, 3)); // 012
console.log(value.substr(-3, 3)); // 567