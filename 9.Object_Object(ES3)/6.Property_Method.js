/*
	프로퍼티 처리 메소드
	
	hasOwnProperty()
	인스턴스에 파라미터 이름(프로퍼티)이 존재하면 true
	존재하지 않으면 false
	
	자신이 만든 것이 아니라 상속 받은 프로퍼티면 fasle 반환
*/

// obj 인스턴스에 value 프로퍼티가 존재하여 true
var obj = { value: 123 };
var own = obj.hasOwnProperty("value");
console.log(own); // true

// 값은 체크하지 않고 존재 여부만 체크하므로 true
var obj = { value: undefined };
var own = obj.hasOwnProperty("value");
console.log(own); // true


/*
	propertyIsEnumerable()
	오브젝트에서 프로퍼티를 열거할 수 있으면 true, 할 수 없으면 false
	
*/

// 프로퍼티 열거 가능
var obj = { sports: "축구" };
console.log(obj.propertyIsEnumerable("sports")); // true

// 프로터피 열거 불가능
var obj = { sports: "축구" };
Object.defineProperty(obj, "sports", {
	enumerable: false
})

console.log(obj.propertyIsEnumerable("sports")); // false

// for in문에서 열거 불가능
for(var name in obj) {
	console.log(name);
}



