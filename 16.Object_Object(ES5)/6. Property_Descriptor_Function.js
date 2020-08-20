/*
	getOwnPropertyDescriptor()
	- 프로퍼티 디스크립터의 속성 이름, 값 반환
	- 다른 오브젝트에서 받은 프로퍼티는 제외
	
	preventExtensions()
	- 오브젝트에 프로퍼티 추가 금지 설정
	- 프로퍼티 삭제, 변경은 가능
	- 추가 금지를 설정한 후에는 추가 가능으로 변경 불가
	
	isExtensible()
	- 오브젝트에 프로퍼티 추가 금지 여부 반환
	Object.isExtensible(obj);
	
	
	seal()
	- 오브젝트에 프로퍼티 추가, 삭제 금지 설정
	Object.seal(obj);
	
	isSealed()
	- 오브젝트에 프로퍼티 추가, 삭제 금지 여부 반환
	Object.isSealed(obj)
	
	
	freeze()
	- 오브젝트에 프로퍼티 추가, 삭제, 변경 금지 설정
	Object.freeze(obj);
	
	isFrozen()
	- 오브젝트에 프로퍼티 추가, 삭제, 변경 금지 여부 반환
	Objcet.isFrozen(obj);
	
	
*/

// 1. 디스크립터 속성 반환
var obj = {};
Object.defineProperty(obj, "book", {
	value: "책",
	writable: true,
	enumerable: true
})

var desc = Object.getOwnPropertyDescriptor(obj, "book");

for(var key in desc) {
	console.log(key + ": " + desc[key]);
	// value: 책
	// writable: true
	// enumerable: true
	// configurable: false
}



// 2. 프로퍼티 추가 금지 설정
var obj2 = {};
Object.preventExtensions(obj);

try {
	Object.defineProperty(obj, "book", {
		value: "책"
	})
} catch(e) {
	console.log("추가 불가")
}
// 추가 금지 상태에서 프로퍼티 추가 시 에러 발생










