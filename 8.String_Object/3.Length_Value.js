/*
	length property
	문자 수 반환
	
	문자열을 그냥 만들어도 인스턴스가 자동 생성되기 때문에 length를 사용할 수 있다

	문자열 for()문 반복할 때 key: value 구조로 되어 있다
*/

var value = "ABC";
console.log(value.length); // 3

var obj = new String("ABC");

debugger;

for(var k = 0; k < value.length; k++) {
	console.log(value[k]); // A \n B \n C
}

