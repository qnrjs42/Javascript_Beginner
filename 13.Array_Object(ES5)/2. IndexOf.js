/*
	index 처리 메소드
	
	indexOf()
	파라미터 값과 같은 엘리먼트의 인덱스 반환
	왼쪽에서 오른쪽으로 검색
	
*/

// 1. 값이 같은 엘리먼트가 있으면 검색 종료
var value = [1, 2, 5, 2, 5];
console.log(value.indexOf(5)); // 2 | 2번 인덱스에 있어서 2를 반환

// 2. 데이터 타입까지 체크
var value = [1, 2, 5, 2, 5];
console.log(value.indexOf("5")); // -1 | 타입이 다름, 같은 값이 없으면 -1 반환

// 3. 두 번째 파라미터의 인덱스부터 검색
var value = [1, 2, 5, 2, 5];
console.log(value.indexOf(5, 3)); // 4 | 3번 인덱스부터 5를 검색

// 4. String과 Array의 indexOf() 차이
console.log("ABCBC".indexOf("C", -2)); // 2 | String Object는 -2를 무시하고 0으로 간주하여 처음부터 검색

var list = ["A", "B", "C", "B", "C"];
console.log(list.indexOf("C", -2)); // 4 | length(5) + -2 = 3, 3번 인덱스부터 "C" 검색







