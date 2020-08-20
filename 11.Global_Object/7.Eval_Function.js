/*
	eval()
	파라미터의 문자열을 JS코드로 간주하여 실행
	
	실행 결과를 반환 겂으로 사용
	값을 반환하지 않으면 undefined 반환
	
	보안에 문제 있어 사용 비권장
*/

var result = eval("parseInt('-123.45')");

console.log(result); // -123