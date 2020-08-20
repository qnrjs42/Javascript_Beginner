/*
	reduce()
	forEach()처럼 시맨틱 접근
	배열 끝까지 콜백 함수 호출
	파라미터 작성 여부에 따라 처리가 다름
	
	reduceRight()
	reduce()와 처리 방법 동일
	배열 끝에서 앞으로 하나씩 읽어가면서 콜백 함수에서 반환한 값을 반환
	
*/

/*
	reduce() 첫 번째 파라미터만 작성한 경우
	
	처음 콜백 함수 호출 시
	prev : 인덱스 [0]의 값
	curr : 인덱스 [1]의 값
	index : 1
	
	두 번째 콜백 함수 호출 시
	콜백 함수에서 반환된 값을 직전 값에 설정
	prev : 처음 콜백 함수에서 반환된 값
	curr : 인덱스 [2]의 값
	index : 2
	- 반복
	
	마지막으로 반환된 값을 result에 할당
*/

// 1. 첫 번째 파라미터(콜백 함수)만 작성
var value = [1, 3, 5, 7];
var fn = function(prev, curr, index, all) {
	console.log(prev + ", " + curr);
	
	return prev + curr;
}

var result = value.reduce(fn);
console.log("결과: ", result);
// 1, 3
// 4, 5
// 9, 7
// 결과: 16



/*
	reduce() 두 번째 파라미터를 작성한 경우
	
	처음 콜백 함수 호출 시
	prev : 두 번째 파라미터 값
	curr : 인덱스 [0]의 값
	index : 0
	
	두 번째 콜백 함수 호출 시
	prev : 처음 콜백 함수에서 반환된 값
	curr : 인덱스 [1]의 값
	index : 1
	- 반복
	
	마지막으로 반환된 값을 result에 할당
*/

// 2. 두 번째 파라미터를 작성한 경우
var value = [1, 3, 5];
var fn = function(prev, curr, index, all) {
	console.log(prev + ", " + curr);
	
	return prev + curr;
}

var result = value.reduce(fn, 7);
console.log("결과: ", result);
// 7, 1
// 8, 3
// 11, 5
// 결과: 16










