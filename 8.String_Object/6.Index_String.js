/*
	charAt()
	
	파라미터의 인덱스가 전체 문자열 길이보다 크면 빈 문자열 반환
	
	빈 문자열 반환보다 undefined 반환이 더 낫다
	
	
	indexOf()
	data 위치의 문자열에서 파라미터의 문자와 같은 첫 번째 인덱스를 반환
	왼쪽에서 오른쪽으로 검색
	
	lastIndexOf()
	data 위치의 문자열에서 파라미터의 문자와 같은 인덱스를 반환
	단, 뒤에서 앞으로 검색
	
	검색 기준
	두 번째 파라미터를 작성하면 작성한 인덱스부터 검색
	같은 문자가 없으면 -1 반환
*/

var value = "sports";
console.log(value.charAt(1)); // p
console.log(value[1]); // p
console.log(value.charAt(12)); // ""
console.log(value[12]); // undefined


var value2 = "123123";
console.log(value2.indexOf(2));    // 1
console.log(value2.indexOf(23));   // 1
console.log(value2.indexOf(2, 3)); // 4
console.log(value2.indexOf(15)); // -1


var value3 = "1231231";
console.log(value3.lastIndexOf(2)); // 4
console.log(value3.lastIndexOf(1, 4)); // 3 // 인덱스를 주면 왼쪽부터 찾는다 // 1번 인덱스부터 4번 인덱스까지 검색 대상인 1의 인덱스
console.log(value3.lastIndexOf(2, -1)); // -1 // 두 번째 파라미터가 0보다 작으면 -1 반환







