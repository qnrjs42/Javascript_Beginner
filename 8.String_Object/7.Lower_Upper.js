/*
	문자열 연결
	concat()
	data 위치의 값에 파라미터 값을 작성 순서로 연결하여 문자열로 반환
	
	String 인스턴스를 작성하면 프리미티브 값을 연결
	
	toLowerCase() : 대문자 -> 소문자
	toUpperCase() : 소문자 -> 대문자
*/

var result = "sports".concat("축구", 11);
console.log(result); // sports축구11

var obj = new String(123);
console.log(obj.concat("ABC")); // 123ABC


