/*
	Function 오브젝트 프로퍼티 리스트
	
	new Function(): 인스턴스 생성
	Function(): 인스턴스 생성
	length: 함수의 파라미터 수
	Function.prototype
	call(): 함수 호출
	apply(): 함수 호출하나 배열을 파라미터로 사용
	toString(): 함수를 문자열로 반환
	bind(): 기존엔 바로 함수 실행하나, 새로운 오브젝트를 생성하고 함수 실행	
	
	
	파라미터 2개 이상 작성 경우
	- 마지막 파라미터에 함수에서 실행할 함수 코드 작성
	- 마지막을 제외한 파라미터에 이름 작성
	
	파라미터 1개 작성 경우
	- 함숭서 실행할 함수 코드 작성
	- 파라미터가 없을 때 사용
	
	파라미터 없을 때
	- 함수 코드가 없는 Function 인스턴스 생성
	
	
	new Function()과 Function()의 차이는 그냥 new를 붙이냐 안 붙이냐 차이
*/


var obj = new Function("book", "return book;");
obj("JS책");



// 파라미터 2개 이상
var obj = new Function("one", "two", "return one + two;");
console.log(obj(100, 200)); // 300

// 파라미터 1개
var obj = new Function("return 1 + 2;");
console.log(obj());













