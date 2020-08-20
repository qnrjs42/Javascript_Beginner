/*
	strict 모드
	형태: "use strict"
	엄격하게 JS 문법 사용 선언
	작성한 위치부터 적용
	ES5부터 지원
	
	코딩 실수 예방
*/

book = "책";
console.log(book);
// 비권장 코드 var을 선언하지 않음

"use strict"
try {
	book = "변수 선언하지 않음";
	console.log(book);
} catch(error) {
	console.log(error.message);
}