/*
	while(표현식)
	표현식의 평가 결과가 false가 될 때까지 문장을 반복하여 실행, 반복 종료되는 조건 필요
	
	do ~ while
	do문을 먼저 실행
	
*/

var k = 1;

while(k < 3) {
	console.log(k); // 1, 2
	k++;
}

var k2 = 0; 

do {
	console.log("do: ", k2); // 0, 1, 2
	k2++;
} while( k2 < 3) {
	console.log("while: ", k2); // 3
}

/*
	1. do문 실행
	2. while문 표현식 평가
	3. 평가 결과 true면 do문 재실행, 반복
	4. 평가 결과 false면 while문 실행
	5. k2가 3보다 크거나 같기때문에 while문 빠져나옴
*/

