/*
	함수 호출
	
	call()
	
	getTotal.call(this, 10, 20);
	
	첫 번째 파라미터
	- 호출된 함수에서 this로 참조할 오브젝트
	- 일반적으로 this 사용, 다른 오브젝트 작성 가능
*/

function getTotal(one, two) {
	return one + two;
}
var result = getTotal.call(this, 10, 20);
console.log(result); // 30



// 첫 번째 파라미터
var value = { one: 10, two: 20 };
function getTotal2() {
	return this.one + this.two;
}
var result = getTotal2.call(value);
console.log(result); // 30



/*
	apply()
	getTotal.apply(this, [10, 20]);
	파라미터 수가 유동적일 때 사용, 두 번째 파라미터에 배열 사용
*/

function getTotal3(one, two) {
	return one + two;
}
var result = getTotal3.apply(this, [10, 20]);
console.log(result); // 30


/*
	toString()
	모든 빌트인 오브젝트에 toString()이 있지만 오브젝트다마 반환되는 형태가 다름
	
	function 오브젝트의 toString()은 함수 코드를 문자열로 반환
*/

var getBook = function() {
	return 100 + 23;
}

var result = getBook.toString();
console.log(result); // function() { return 100 + 23; }

















