/*
	형태: break;
	반복문 종료
	
	for, for~in, while, do~while, switch

	break는 세미콜론이 자동 첨부된다.
	
	형태: continue;
	반복문의 처음으로 분기
	for, for~in, while, do~while
*/

var k=0, m=0;

while(k<3) {
	m++;
	if(m === 2) {
		break;
	}
	console.log(m); // 1
}


for(var k=0; k<5; k++) {
	if(k === 2 || k === 3) {
		continue;
	}
	console.log(k); // 0, 1, 4
}
