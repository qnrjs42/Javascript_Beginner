/*
	함수와 메소드 연결
	
	함수: 오브젝트에 연결
	- Object.create()
	-> create function
	
	함수 호출: Object.create();

	
	-----------------------------------------
	
	메소드: 오브젝트의 prototype에 연결
	- Object.prototype.toString()
	-> toString method
	
	메소드 호출: Object.prototype.toString();
	
	
	
	함수와 메소드를 구분해야 하는 이유
	JS 코드 작성 방법이 다르고, 
	 함수는 파라미터에 값을 작성하고
	 메소드는 메소드 앞에 값을 작성
	
	
*/


// 함수 호출
console.log(Object.create); // function create() { [native code] } 
// [Function: create]
console.log(Object.prototype.create); // undefinded


// 메소드 호출
console.log(Object.prototype.toString); // [Function: toString]

// 인스턴스에 prototype이 연결된 메소드가 생성되어 prototype을 작성하지 않아도 된다. 
var obj = {};
console.log(obj.toString); // [Function: toString]




