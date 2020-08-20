/*
	언어 타입 -> JS 프로그램에서 사용할 수 있는 타입
	Undefined, Null, Boolean, String, Number, Object
	
	스펙(문서) 타입 -> 언어 알고리즘을 위한 타입으로 JS 프로그램에서 사용 불가
	Reference, List, Completion, Property Descriptor, Data Block, Lexical Environment, Lexical Record 등
	
	Number 타입: 부호(+, -)를 가진 값
	var point = 123;
	var point = -1.23;
	
	Number 타입의 특수한 3개 값
	NaN: Not-a-Number (값이 숫자가 아닌 것을 나타내는 값)
	var point = 1 * 'A';
	console.log(point); // NaN
	-> 프로그램이 죽지 않게 하기 위한 시멘틱 
	
	Infinity: 양수 무한대
	-Infinity: 음수 무한대
	
*/