/*
	defineProperty()
	파라미터: 대상 오브젝트, 프로퍼티 이름, 속성
	
	대상 오브젝트에 프로퍼티 추가 또는 프로퍼티 속성 변경
	
	프로퍼티마다 상태를 갖고 있음
	- 상태란: 변경/삭제/열거 가능 여부
	- 상태가 가능일 때만 처리할 수 있음
	- 프로퍼티 추가할 때 상태 결졍
	
	defineProperties()
	다수의 프로퍼티를 추가하거나 속성 변경
	기능은 defineProperty()와 동일
*/

// 1. property 추가
var obj = {};
// 기본적으로 defineProperty의 열거는 false이기 때문에 enumerable: true 해줘야 한다
Object.defineProperty(obj, "book", {
	value: "JS북",
	enumerable: true
});
console.log(obj); // { book: "JS북" }



// 2. 다수의 프로퍼티 추가
var obj = {};
Object.defineProperties(obj, {
	soccer: {
		value: "축구", enumerable: true
	},
	basketball: {
		value: "농구", enumerable: true
	}
})

for(var name in obj) {
	console.log(name + ': ' + obj[name]);
	// soccer: 축구
	// basketball: 농구
}
