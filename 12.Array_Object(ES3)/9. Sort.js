/*
	sort()
	
	엘리먼트 값을 오름차순으로 정렬
	정렬 기준은 엘리먼트 값의 유니코드 순
	
*/

// 1. 오름차순 순서
var value = [4, 2, 3, 1];
console.log(value.sort()); // [1, 2, 3, 4]


// 2. 왼쪽에서 오른쪽으로 문자 하나씩 비교하여 정렬
var value = ["A1", "A01", "B2", "B02"];
console.log(value.sort()); // [A01, A1, B02, B2]


// 3. sort 대상도 sort가 된다
var value = [4, 2, 3, 1];
console.log(value.sort()); // [1, 2, 3, 4]
console.log(value); // [1, 2, 3, 4]
// 원본 정렬을 원치 않는 경우 미리 복사를 해둔다


// 4. 값이 undefined면 끝으로 이동
var value = [, , 1, 2];
console.log(value.sort()); // [1, 2, undefined, undefined]





