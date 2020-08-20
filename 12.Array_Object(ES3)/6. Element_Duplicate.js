/*
	엘리먼트 복사
	
	slice()
	배열의 일부를 복사하여 배열로 반환
	
	반환 : 원본을 훼손시키지 않고 return
	변환 : 원본을 바꿈
	
*/

// 1. 지정한 인덱스부터 지정한 인덱스 직전까지(중요)
var origin = [1, 2, 3, 4, 5];
var result = origin.slice(1, 3);
console.log(result); // [2, 3]
console.log(origin); // [1, 2, 3, 4, 5]


// 2. true - 1, false - 0 숫자로 변환
var value = [1, 2, 3, 4, 5];
console.log(value.slice(true, 3)); // [2, 3]
console.log(value.slice(false, 3)); // [1, 2, 3]


// 3. 첫 번째 파라미터만 작성 (지정한 인덱스부터 끝까지)
console.log([1, 2, 3, 4, 5].slice(2)); // [3, 4, 5]


// 4. 첫 번째 파라미터 값이 클 때
console.log([1, 2, 3, 4, 5].slice(4, 3)); // []


// 5. 파라미터에 음수 작성
console.log([1, 2, 3, 4, 5].slice(-4, -2)); // [2, 3]









