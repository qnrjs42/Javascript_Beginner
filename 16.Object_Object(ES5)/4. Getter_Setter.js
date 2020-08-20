/*
	getter - OOP 용어
	
*/

// 1. getter 정의
var obj = {};
Object.defineProperty(obj, "book", {
	get: function() {
		return "JS책";
	}
});
var result = obj.book;
console.log(result); // JS책



// 2. setter 정의
var obj = {}, data = {};
Object.defineProperty(obj, "book", {
	set: function(param) {
		data.title = param;
	},
	get: function() {
		return data.title
	}
});

obj.book = "JS책";
console.log(obj.book); // JS책
console.log(data.title); // JS책




