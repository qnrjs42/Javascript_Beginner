/*
	toString()
	함수 호출 구조
	data 위치의 값을 String 타입으로 변환
	
	String 타입을 String 타입으로 변환
	
	String 오브젝트에 toString()이 없으면
	Object 오브젝트에 toString()이 호출된다.
	
	"123"dmf Object 타입으로 인식하여 변환하기 때문에
	String 오브젝트에 toString()이 있는 것
	
	__proto__: // String Object
	toString();
	 __proto__ // Object Object
	 toString();
*/

var value = 123;
var result = value.toString();
console.log(typeof result);
