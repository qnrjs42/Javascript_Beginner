/*
	엘리먼트 추가, 삭제 메커니즘
	
	배열에 엘리먼트 추가
	- 삽입할 위치에 인덱스 지정
	- 표현식으로 인덱스 지정
	
	Delete 연산자
	- var 변수 삭제 불가
	- Global 변수 삭제 가능
	
*/

// 1. 삽입할 위치에 인덱스 지정
var value = [1, 2];
value[4] = 5;
console.log(value); // [1, 2, undefined, undefined, 5]

// 2. 표현식으로 인덱스 지정
var value = [1, 2];
value[value.length + 2] = 5;
console.log(value); // [1, 2, undefined, undefined, 5]


// 3. var 삭제 불가
var value = 123;
console.log(delete value); // false

// 4. global 변수 삭제 가능
value2 = "글로벌 변수";
console.log(delete value2); // true

try {
	console.log(value2);
} catch(e) {
	console.log("존재하지 않음"); // 존재하지 않음
}

// 5. 오브젝트의 프로퍼티 삭제
var book = { title: "책" };
console.log(delete book.title); // true
console.log(book.title); // undefined


// 6. 오브젝트 전체 삭제
var book = { title: "책" };
console.log(delete book); // false | var 변수라 오브젝트여도 삭제 불가능

sports = { item: "축구" };
console.log(delete sports); // true | global 변수라 삭제 가능



// 7. 인덱스로 삭제
var value3 = [1, 2, 3, 4];
console.log(delete value3[1]); // true
console.log(value3.length); // 4 | 배열 처리 메커니즘으로 인해 생긴 문제점

/*
	배열 엘리먼트 삭제 메커니즘
	- 삭제된 인덱스에 undefined 설정
	
	왜 undefined가 설정되는 이유: 삭제된 인덱스에 값을 하나씩 당겨서 엘리먼트를 이동하면 처리 시간이 걸리기 때문
*/

// 8. 배열 삭제 메커니즘
var value = [1, 2, 3, 4];
delete value[1];
console.log(value); // [1, undefined, 3, 4]

for (var k=0; k<value.length; k++) {
	console.log(value[k]); // 1 \n undefined \n 3 \n 4
}








