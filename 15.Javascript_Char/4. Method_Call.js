/*
	메소드 형태
	
	
*/

// 1. OOP의 일반적인 방법
var data = ["boo", "책", 123];
var obj = new Array();
var result = obj.concat(data);
console.log(result); // [book, 책, 123]


// 2. 데이터로 메소드 호출
var data = ["boo", "책", 123];
var result = data.concat();
console.log(result); // [book, 책, 123]


// 3. 오브젝트의 함수 호출
var data = ["boo", "책", 123];
var bookObj = {
	concat: function(data) {
		return data.concat();
	}
}
console.log(bookObj.concat(data)); //[book, 책, 123]






