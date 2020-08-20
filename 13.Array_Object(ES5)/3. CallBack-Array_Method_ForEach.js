/*
	forEach(엘리먼트 값, 인덱스, 배열 전체)
	파라미터: 콜백 함수, this로 참조할 오브젝트
	
	break, continue 사용 불가
	throw 사용 가능
*/

// 1. 반복 처리 방법
var list = ["A", "B", "C"];
list.forEach(function(el, index, all) {
	console.log(`${el}: ${index}: ${all}`);
})
// A: 0: A,B,C
// B: 1: A,B,C
// C: 2: A,B,C


//2 콜백 함수 분리 | 코드 재사용, 방법 1과 같음
var fn = function(el, index, all) {
	console.log(`${el}: ${index}: ${all}`);
}

list.forEach(fn);


// 3. this로 오브젝트 참조
var list = [1, 2];
var = fn = function(el, index, all) {
	console.log(el + this.ten);
}
// 11
// 12

list.forEach(fn, { ten: 10 });
// { ten: 10 }는 파라미터로 넘겨주진 않지만 this로 해당 object를 참조할 수 있다.









