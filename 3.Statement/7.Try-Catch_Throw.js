/*
	try catch
	
	예외 발생 시 catch 블록 실행
	
	finally 블록은 예외 발생과 관계없이 실행
	
	throw 표현식
	의도적으로 예외를 발생 시킴
*/

var value;

// try-catch
try {
	value = ball;
} catch(error) {
	console.log('catch 실행');
}

// finally
try {
	sports = ball;
} catch(error) {
	console.log('catch 실행');
} finally {
	console.log('finally 실행');
}

// throw
try {
	throw "예외 발생시킴";
	var sports = "스포츠"; // throw 아래 코드는 실행되지 않음
} catch(error) {
	console.log(error);
	console.log(sports);
}

// throw Object
try {
	throw {
		msg: "예외 발생시킴",
		bigo: "임의의 이름 사용"
	}
} catch(error) {
	console.log(error.msg);
	console.log(error.bigo);
}

// throw Error Object
try {
	throw new Error("예외 발생시킴");
} catch(error) {
	console.log(error.message);
}




