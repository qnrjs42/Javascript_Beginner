/*
	후치 ++연산자
	형태: value++
	
	값을 자동으로 1 증가시킴
	문장을 수행한 후에 1 증가
	즉, 세미콜론 다음에서 증가
	----------------------------------------------------
	전치 ++연산자
	형태: ++value
	
	값을 자동으로 1 증가시킴
	문장 안에서 1 증가
	표현식을 평가하기 전에 1 증가, 표현식에서 증가된 값을 사용
	----------------------------------------------------
	! 연산자, 논리(Logical) NOT 연산자
	형태: !value
	true면 false
	false면 true
	
	원래 값은 바뀌지 않으며 사용할 때만 변환
	----------------------------------------------------
*/

var one = 1;
var value = one++ + 3;
console.log(value); // 4
console.log(one); // 2

var one2 = 1;
var value2 = ++one2 + 3;
console.log(value2); // 5


var value3 = true;

console.log(!value3); // false
console.log(!!"A"); // true
// -> A는 true | !A는 false | !!A는 true


