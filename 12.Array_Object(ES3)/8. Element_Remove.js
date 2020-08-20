/*
	엘리먼트 삭제
	
	splice()
	
	
*/

// 1. 엘리먼트를 삭제하고 삭제한 엘리먼트 반환
var value = [1, 2, 3, 4, 5];
console.log(value.splice(1, 3)); // [2, 3, 4]
console.log(value); // [1, 5]

// 2. 파라미터가 없으면 빈 배열 반환