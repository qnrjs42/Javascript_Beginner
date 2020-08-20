/*
	자바스크립트 인스턴스
	
	Instance
	- Class를 new 연산자로 생성한 것
	
	인스턴스 목적
	- Class에 작성된 메소드 사용
	- 인스턴스마다 프로퍼티 값을 유지
	
	instnaceof
	- 오브젝트로 생성한 인스턴스 여부 반환
*/

// 1. 인스턴스 생성
var Book = function(point) {
	this.point = point;
}

Book.prototype.getPoint = function() {
	return this.point + 100;
}

var oneInstance = new Book(200);

console.log(oneInstance.getPoint()); // 300

// oneInstance가 Book 인스턴스로 만든 것이면 true
console.log(oneInstance instanceof Book); // true

