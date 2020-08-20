/*
	문자열로 변환
	
	
*/

var value = String(123); // 이 방법 권장

console.log(value); // 123
console.log(typeof value); // string

console.log(typeof ("" + 123)); // string

var obj = new String(123);
console.log(typeof obj); // object

console.log(obj.valueOf()); // 123

