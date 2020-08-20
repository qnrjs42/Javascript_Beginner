/*
	forEach()
	- 시작할 때 반복 범위 결정
	- 엘리먼트를 추가하더라도 처리하지 않음
	- 현재 인덱스보다 큰 인덱스 값을 변경 시 변경된 값 사용
	- 현재 인덱스보다 작은 인덱스 값을 변경 시 처리하지 않음
	
	- 현재 인덱스보다 큰 인덱스의 엘리먼트 삭제 시 배열에서 삭제되므로 반복에서 제외
	  추가는 처리하지 않지만, 삭제는 반영
	  
	  
	forEach() - 시맨틱 접근
	- 처음부터 끝까지 반복, 반복 중간에 끝나지 않는 시맨틱
	- 시맨틱으로 소스 코드 가독성 향상
	- 콜백 함수에서 기능 처리, this 사용 가능
	- 인덱스 0부터 시작하며, 인덱스 증가 값을 조정할 수 없고,
	  뒤에서 앞으로 읽을 수도 없음
	  
	
	for() - 함수 코드를 읽어야 알 수 있음
	- forEach()와 달리 break, continue 사용 가능
	
*/


// 1. 반복 도중에 엘리먼트 추가 시
var list = [1, 2, 3];
var fn = function(el, index, all) {
	if(index === 0) {
		list.push("AB");
	}
	console.log(el);
}
list.forEach(fn);
// 시작할 때 범위가 결정되니, 반복 도중에 배열에 추가된 엘리먼트는 처리하지 않는다.
// 1
// 2
// 3


// 2. 큰 인덱스의 값 변경
var list = [1, 2, 3];
var fn = function(el, index, all) {
	if(index === 0) {
		list[2] = 345;
	}
	console.log(el);
}
list.forEach(fn);
// 1
// 2
// 345


// 3. 큰 인덱스의 엘리먼트 삭제
var list = [1, 2, 3];
var fn = function(el, index, all) {
	if(index === 0) {
		delete list[2]
	}
	console.log(el);
}
list.forEach(fn);
// 1
// 2




