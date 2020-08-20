/*
	빌트인 Object 특징
	인스턴스를 만들 수 있는 모든 빌트인 오브젝트인 __proto__에
	Object.prototype의 6개 메소드가 설정된다.
	
	따라서 빌트인 오브젝트로 만든 인스턴스에도 설정된다.
	
	Object.prototype
	
	
	isPrototypeOf()
	파라미터에 작성한 오브젝트에 Object 위치에 작성한 prototype이 존재하면 true
	존재하지 않으면 false
*/

// numObj에 Object.prototype 존재 체크
var numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj)); // true



/*
	toString()
	인스턴스 타입을 문자열로 표시
	오브젝트에 toString()이 있으면 toString()이 호출되고 
	없으면 Object의 toString()이 호출
*/

var point = { book: "책" };
console.log(point.toString()); // [object Object]
// 앞의 소문자 object는 인스턴스
// 뒤의 대문자 Object는 빌트인 Object

var obj = new Number(123);
console.log(Object.prototype.toString.call(obj)); // [object Number]







