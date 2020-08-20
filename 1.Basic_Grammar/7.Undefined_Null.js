/*
	Undefined(대문자) 타입
	값: undefined(소문자)
	
	변수의 Default 값
	var point;
	
	변수를 선언만 한 것으로 undefined가 초깃값으로 설정
	
	undefined는 변수에 값을 할당하지 않은 것을 나타내는 시맨틱이다.
	
	하지만 초깃값인지, 값을 할당한 것이지 구분이 되지 않아 권장하지 않는다.
	
	대신 null로 할당한다.
	
	
	null과 undefined 차이
	undefined: 단지 변수만 선언 (비의도적)
	null: null을 할당해야 값이 null이 된다.(의도적)
	
*/

var point;
console.log(point) // undefined