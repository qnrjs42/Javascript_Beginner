/*
	Array 함수
	isArray() 배열 여부 반환, 배열이면 true, 아니면 false
	
	Array.prototype
	forEach() : 배열을 반복하면서 콜백 함수 실행 | 중간에 빠져나올 수가 없다, 반환하는게 없음
	every() : 반환 값이 false 일 때까지 콜백 함수 실행 | some() 반대
	some() : 반환 값이 true 일 때까지 콜백 함수 실행 | 반복 도중에 false가 나오면 콜백 함수 종료
	
	filter() : 콜백함수에서 true를 반환한 엘리먼트 반환 | false를 반환한 엘리먼트를 걸러낸다
	map() : 콜백 함수에서 반환한 값을 새로운 배열로 반환 | forEach()와 비슷하며 배열로 반환한다
	reduce() : 콜백 함수의 반환 값을 파라미터 값으로 사용 | 파라미터가 4개
	
	
*/

// isArray() 배열 여부 체크
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray(123)); // false

console.log(typeof {a: 1}); // object
console.log(typeof [1, 2]); // object | 배열 여부는 Array.isArray() 권장
console.log(typeof null) // object | null 여부는 Object.is() 권장

