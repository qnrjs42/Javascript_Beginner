/*
	관계 연산자(Relational)
	<, >, <=, >= 연산자
	instanceof 연산자
	in 연산자
	
	> 연산자
	양쪽이 Number 타입일 때 - 왼쪽이 오른쪽보다 크면 true, 아니면 false
	
	String 타입 비교
	한 쪽이 String 타입이면 false
	양쪽이 모두 String 타입이면 유니코드 사전 순서로 비교
	문자 하나씩 비교
*/

console.log((1 + 2) > 1); // true

console.log(1 > "A"); // false

console.log("\u0033" > "\u0032"); // 3 > 2 - true
console.log("A" > "1"); // \u0041: A > \u0031: 1 - true
console.log("가" > "다"); // false

console.log("A07" > "A21");
// A와 A는 같기 때문에 다음 문자 비교
// 0과 2를 비교하여 false를 반환
// 결정이 되면 다음 것을 비교하지 않는다.