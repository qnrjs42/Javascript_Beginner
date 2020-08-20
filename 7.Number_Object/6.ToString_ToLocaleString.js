/*
	toString()
	data를 String 타입으로 변환
*/

var value = 20;
console.log(20 === value.toString()); // false

// 숫자 20을 16진수로 변환하면 값이 14이다.
console.log(value.toString(16)); // 14

// 실수를 문자로 변환( 20..은 0이 생략되어 ..으로 표시할 수 있다)
console.log(20..toString()); // 20

/*
	toLocaleString()
	data를 String 타입으로 변환
	
	data: 변환 대상
	parameter: 사용하지 않음
	반환: 변환한 값
	
	숫자를 브라우저가 지원하는 지역화 문자로 변환 (지역화란 한국, 미국, 중국, 프랑스 등 사용하는 문자)
	지역화를 지원하지 않으면 toString()으로 변환
	
	ES5: 파라미터 사용 불가
	ES6: 파라미터에 언어 타입 사용 가능
*/

// 지역화가 구름 ide에서는 지원 안 함
var value = 1234.56; 
console.log(value.toLocaleString()); // 1,234.56
console.log(value.toLocaleString('de-DE')); // 1.234,56 (콤마 -> 점, 점 -> 콤마로 표시)
console.log(value.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // 一,二三四.五六 (중국 한자로 표시)




