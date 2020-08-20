/*
	Object 인스턴스 생성
*/

var newObj = new Object(123);
console.log(typeof newObj);
console.log(newObj + 100);

/*
	primitive 값이 123인 object는 인스턴스의 타입도 object
	
	2개 인스턴스 모두 100을 더할 수 있으며 값이 더해진다는 것은 Number 타입이라는 것
	
	new Object()는 파라미터 값 타입이
	Number 타입이면 Number 인스턴스를 생성하고
	String 타입이면 String 인스턴스를 생성한다.
*/


var newObj = new Object();
console.log(newObj); // {}

var obj = Object({ name: "JS책" });
cosnoel.log(obj); // { name: JS 책 }

var emptyObj = Object();
console.log(emptyObj); // {}

// new Object()나 Object()는 값을 갖지 않는 Object 인스턴스를 생성

/*
	Object()와 Object 리터럴{} 모두 Object 인스턴스를 생성
	Object {} 권장
*/






