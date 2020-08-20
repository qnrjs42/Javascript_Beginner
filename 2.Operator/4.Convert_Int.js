var value; // value값은 undefined
console.log(10 + value); // NaN

console.log(10 + null); // 10
console.log(10 + true); // 11
console.log(10 + false); // 10

console.log(10 + "123"); // 10123
console.log(123 - "23"); // 100
// +는 문자열로 연결
// -, *, /는 숫자로 변환하여 연산