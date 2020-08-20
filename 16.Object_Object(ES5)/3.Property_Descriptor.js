/*
	프로퍼티 디스크립터
	- 프로퍼티의 속성 이름과 속성 값을 정의
	
	value : JS 데이터 타입(string, number 등) - 프로퍼티 값으로 사용
	writable: true, false - false: value 값 변경 불가
	get
	set
	enumerable: false: for-in 열거 불가
	configurable: false: 프로퍼티 삭제 불가
*/

// 1. value 속성
var obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	enumerable: true
});

for(var name in obj) {
	console.log(name + ': ' + obj[name]); // book: JS북
}


// 2. writable: true 변경 가능
var obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	writable: true
});

obj.book = "변경 가능";
console.log(obj.book); // JS북


// 3. writable: false 변경 불가
var obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	writable: false
});

// 에러가 나진 않지만, 값이 변경되지 않음 (프로그램 종료 방지)
obj.book = "변경 불가";
console.log(obj.book); // JS북


// 4. for-in 열거 가능
var obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	enumerable: true
});

for(var name in obj) {
	console.log(name + ': ' + obj[name]); // book: JS북
}



// 5. for-in 열거 불가능
var obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	enumerable: false
});

for(var name in obj) {
	console.log(name + ': ' + obj[name]); //
}


// 6. configurable: true, 삭제 가능
var obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	configurable: true
});
delete obj.book;
console.log(obj.book); // undefined



// 7. configurable: false, 삭제 불가능
var obj = {};
Object.defineProperty(obj, "book", {
	value: "JS북",
	configurable: false
});
delete obj.book;
console.log(obj.book); // JS북








