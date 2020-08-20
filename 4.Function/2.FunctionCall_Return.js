/*
	함수 호출
	
	호출받는 함수
	함수는 호출 되어야 실행
	
	return 표현식을 작성하지 않으면 undefined를 반환한다.
	
	
*/


function setValue(one, two) {
	var total = one + two;
}

setValue(10, 20);

function getPoint() {
	return // return끝에 세미콜론을 자동으로 첨부
	10 * 30; // return함으로써 이 코드는 실행되지 않음
}

var result = getPoint();
console.log(result); // undefined