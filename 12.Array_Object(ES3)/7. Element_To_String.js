/*
	join()
	엘리먼트와 분리자를 하나씩 결합하여 문자열로 연결
*/

var value = [1, 2, 3];

// 1. 마지막 엘리먼트는 분리자를 연결하지 않음
var result = value.join("##");
console.log(result); // 1##2##3
console.log(typeof result); // string


// 2. 파라미터 작성하지 않으면 콤마로 분리
var result = value.join();
console.log(result); // 1, 2, 3


// 3. 파라미터에 빈 문자열 작성
var result = value.join("");
console.log(result); // 123












