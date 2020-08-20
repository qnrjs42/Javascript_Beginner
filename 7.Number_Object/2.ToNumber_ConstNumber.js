/*
	Number 타입으로 변환
	
	문자가 포함되면 NaN 반환
	
	Number 상수
	Number.MAX_VALUE
	Number.MIN_VALUE
	Number.NaN
	Number.POSITIVE_INFINITY: Infinity
	Number.NEGATIVE_INFINITY: -Infinity
	
*/

console.log(Number("123") + 500); // 623
console.log(Number("ABC")); // NaN

console.log(Number(0x14)); // 20
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN