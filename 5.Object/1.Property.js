/*
	Object
	
	Property: {name: value} name 또는 key
	
*/

var book = {
	title: "책",
	point: 123,
	computer: {
		mouse: 10,
		keyboard: 20,
		moniter: function(){}
	}
}

console.log(book.title); // 책

console.log(book["title"]); // 책

var varName = "title";
console.log(book[varName]); // 책
