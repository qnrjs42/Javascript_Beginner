/*
	Object 프로퍼티 열거
	열거란: Object의 프로퍼티를 읽는 것
	
*/

var obj = { book: "책"};
console.log(obj.book); // 책
console.log(obj["sports"]); // undefined

var sports = {
	soccer: "축구",
	baseball: "야구"
}

for (var item in sports) {
	console.log(item); // soccer, baseball
	console.log(sports[item]); // 축구, 야구
}