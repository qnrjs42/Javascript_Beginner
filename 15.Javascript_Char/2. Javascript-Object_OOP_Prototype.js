/*
	JS 객체 형태
	
	Object Object
	- var book = { read: function(){} }
	- 인스턴스 생성할 수 없음
	 
	Function Object
	- function readBook(){}
	- 객체이지만, OOP의 객체라고 하기엔 부족
	- 객체에 메소드가 하나 있는 모습
	 
	JS OOP 구현 방법
	- prototype에 메소드 연결
	- 
	 
*/

// 1. prototype에 함수 연결
var Book = function(){};

Book.prototype.getBook = function() {
	return "JS북";
};
