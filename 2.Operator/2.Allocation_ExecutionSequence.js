/*
	할당 연산자
	
	단일 할당 연산자: = 하나만 사용
	var result = 1 + 2;
	
	복합 할당 연산자: = 앞에 연산자 작성
	+=, -=, *=, /=, %=
	<<=, >>=
	>>>=, &=, ^=, |=
	
	먼저 = 앞을 연산한 후, 할당
	var point = 7;
	point += 3; 
	
	
	해석, 실행 순서
	
	var result = 1 + 2 + 6;
	왼쪽 -> 오른쪽
	
	오른쪽 표현식의 평가 결과를 왼쪽 표현식 평가 결과에 할당
	
*/