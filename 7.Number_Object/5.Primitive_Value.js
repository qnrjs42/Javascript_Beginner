/*
	Primitive Value
	언어에 있어 가장 낮은 단계의 값
	
	var book = "책";
	"책"은 더 이상 분해, 전개 불가 이런걸 Primitive라 한다.
	
	Primitive 타입
	Number, String, Boolean: 인스턴스 생성 가능
	Null, Undefined: 인스턴스 생성 불가
	Object는 Primitive 값을 제공하지 않음
	
	var obj = new Number(123);
	인스턴스 생성 시 파라미터 값을 인스턴스의 Primitive 값으로 설정
	
	Primitive 값을 갖는 Object
	Boolean, Date, Number, String
	
	valueOf(): Number 인스턴스의 Primitive 값 반환
	
*/

var obj = new Number("123");
console.log(obj.valueOf()); // 123