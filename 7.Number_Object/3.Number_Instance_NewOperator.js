/*
	New 연산자
	오브젝트로 인스턴스를 생성하여 반환
	원본을 복사하는 개념
	
	인스턴스 타입은 소문자 object
	key, value 형태 프로퍼티 집합인 대문자 Object
	둘이 성격이 다르다
	
	인스턴스 생성 목적: 인스턴스마다 값을 갖기 위한 것
*/

var obj = new Number();
console.log(typeof obj); // object


var oneObj = new Number("123");
console.log(oneObj.valueOf()); // 123

var twoObj = new Number("456");
console.log(twoObj.valueOf()); // 456