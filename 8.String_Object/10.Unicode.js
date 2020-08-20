/*
	charCodeAt()
	인덱스번째의 문자를 유니코드의 코드 포인트 값을 반환
	
	인덱스가 문자열 길이보다 크면 NaN 반환
*/


var value = "1Aa가";

for(var k = 0; k < value.length; k++) {
	console.log(value.charCodeAt(k)); // 49 \n 65 \n 97 \n 44032
}

console.log(value.charCodeAt(12)); // NaN