/*
	getPrototypeOf()
	- 파라미터의 prototype에 연결된 프로퍼티 반환
	
	setPrototypeOf()가 ES5 스펙에 없고 ES6에 있음
	
	
	keys()
	- 열거 가능 프로퍼티 이름 반환
	(enumerable: true)
*/

// 1. prototype에 연결된 프로퍼티
function Book(point) {
	this.point = point;
}
Book.prototype.getPoint = function(){};
Book.prototype.setPoint = function(){};
var obj = new Book(100);

var result = Object.getPrototypeOf(obj);

for(var key in result) {
	console.log(key + ": " + result[key]);
	// getPoint: function() {}
	// setPoint: function() {}
}


// 2. 열거 가능 프로퍼티 이름
var obj2 = {};
Object.defineProperties(obj2, {
	book: {
		value: "책", enumerable: true
	},
	point: { value: 123 }
})

var names = Object.keys(obj2);
for(var k=0; k < names.length; k++) {
	console.log(names[k]); // book
}












