/*
	함수 형태
	
	함수 선언문
	- Function Declaration
	- function getBook(book) { }
	
	함수 표현식
	- Function Expression
	- var getBook = function(book) { }
*/

// 함수 선언문
function getBook(title) {
	return title;
}
var result = getBook("JS책");
console.log(result); // JS책


// 함수 표현식
var getBook = function(title) {
	return title;
}
var result = getBook("JS책");
console.log(result);










