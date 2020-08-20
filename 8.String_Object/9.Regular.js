/*
	정규 표현식
	match()
	정규 표현식: 문자열을 패턴으로 매치
	패턴 형태: ^, $, *, + 등등
	
	replace()
	매치 결과를 파라미터에 작성한 값으로 대체하여 반환
	두 번째 파라미터에 함수를 작성하면 먼저 함수를 실행하고 함수에서 반환한 값으로 대체
	
	split()
	분리 대상을 분리자로 분리하여 배열로 반환
*/

var value = "Sports";

// 소문자 s 배치
console.log(value.match(/s/)); // [ 's', index: 5, input: 'Sports', groups: undefined ]
console.log(value.match("spo")); // null / 대소문자 구분하여 null 반환


var value = "abcabc";
console.log(value.replace("a", "바꿈")); // 바꿈bcabc
console.log(value.replace(/a/, "바꿈")); // 바꿈bcabc

function change() {
	return "함수";
}

console.log(value.replace(/a/, change())); // 함수bcabc


var value = "cbacba";
console.log(value.search(/a/)); // 2
console.log(value.search("K")); // -1


console.log('12_34_56'.split("_")); // ['12', '34', '56']

var value = "123";
console.log(value.split("")); // [1, 2, 3]
console.log(value.split()); // [123]

// 두 번재 파라미터에 숫자를 작성하면 앞에서부터 수만큼만 반환
var value = "12_34_56_78";
console.log(value.split("_", 3)); // ['12', '34', '56']

// 분지라가 분리 대상에 없으면 분리 대상 전체를 하나의 배열로 반환
value = "123";
console.log(value.split("A")); // ['123']





