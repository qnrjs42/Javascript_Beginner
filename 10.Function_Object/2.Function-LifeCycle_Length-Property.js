/*
	function 분류
	- 빌트인 Function 오브젝트
	- function 오브젝트
	- function 인스턴스(new 연산자 사용)
	
	function 오브젝트 생성 방법
	- function 키워드 사용
	- function getBook(title) { return title };
	
	JS 엔진이 function 키워드를 만나면
	이름이 getBook인 function 오브젝트 생성
*/

// 함수 생명 주기
function getBook(title) {
	return title;
}

var result = getBook("JS북");
console.log(result);


/*
	length 프로퍼티
	
	함수의 파라미터 수가 생성되는 function 오브젝트에 설정 된다.
	함수를 호출한 곳에서 보낸 파라미터 수가 아님
	JS 엔진이 자동으로 설정
*/

function add(one, two) {
	return one + two;
}
console.log(add.length); // 2


function add2(one, two) {
	return one + two;
}

add2(1, 2, 3, 4);
console.log(add2.length); // 2



















