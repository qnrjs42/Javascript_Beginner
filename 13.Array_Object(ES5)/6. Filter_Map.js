/*
	filter()
	forEach()처럼 시맨틱 접근
	
	배열의 엘리먼트를 하나씩 읽어가면서
	콜백 함수에서 true 반환하면 현재 읽은 엘리먼트를 반환
	
	조건에 맞는 엘리먼트를 추려낼 때 유용
	
	
	map()
	forEach()처럼 시맨틱 접근
	
	배열의 엘리먼트를 하나씩 읽어가면서
	콜백 함수에서 반환한 값을 새로운 배열에 첨부하여 반환
*/

// 1. filter() true일 때 엘리먼트 반환
var value = [10, 20, 30, 40];
var fn = function(el, index, all) {
	return el > 15;
}
var result = value.filter(fn);
console.log(result); // [20, 30, 40]



// 2. map() 반환한 값을 배열에 첨부
var value = [10, 20, 30];
var fn = function(el, index, all) {
	return el + this.add;
}

var point = { add: 100 };
var result = value.map(fn, point); // 파라미터: 콜백 함수, this로 참조할 오브젝트
console.log(result); // [110, 120, 130]






