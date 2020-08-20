/*
	Boolean: true, false
	
	Object: { key: value }
	프로퍼티(Property): key와 value를 하나로 지칭
	
	Object는 프로퍼티 집합
*/


var book = {
	title: "책",
	point: 123
};

// 왼쪽 프로퍼티(title): key 또는 name이라 함
// 오른쪽 프로퍼티("책"): 프로퍼티 값이라 함

console.log(book);


console.log(typeof null); // object
console.log(typeof { book: '책' }); // object