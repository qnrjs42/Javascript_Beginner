/*
	for(초기값opt; 비교opt; 증감opt) 
	opt = 옵션
	
*/

// 증감 생략
for(var k = 0; k < 3;) {
	console.log(k); // 0, 1, 2
	k++;
}

// 초깃값과 증감 생랙
var k = 0;
for(; k<3;) {
	console.log(k); // 0, 1, 2
	k++;
}

// 비교와 증감 생략
for(var k=0; ;) {
	console.log(k);
	k++;
	
	if(k>2) break;
}

// 모두 생략
var k = 0;
for(;;) {
	console.log(k);
	
	if(k ===2) break;
	
	k++;
}


/*
	[코딩 시간]
	for문으로 1~50까지 반복, 홀수 값과, 짝수 값 누적, 반복한 값 누적
	
	반복 완료 시 누적한 홀수 값, 짝수 값, 전체 값 출력
*/

let odd = 0; // 홀수
let even = 0; // 짝수
let result = 0; // 전체 누적

for(let i = 1; i <= 50; i++) {
	result += i;
	
	if(i % 2 === 0) even += i;
	else odd += i;
	
}

console.log("홀수: ", odd);
console.log("짝수: ", even);
console.log("전체 값: ", result);





