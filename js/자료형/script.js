
let text = document.querySelector('h1').innerHTML;
//변수 text에 HTML h1태그에 적혀 있는 내용을 가져와서 담음
txt = 'Hello';
console.log(txt);

// null(값을 비워둘 때 써줘야 함)
// 값이 없다는 것을 의도적으로 명시하고 싶을 때 사용
// 변수에 null값을 할당하는 것은 변수가 이전에 참조하던
// 값을 더이상 참조하지 않겠다는 의미
txt = null;
console.log(txt);

// undefined
// 자바스크립트에서 var, let 키워드로 선언한 변수는
// 값이 들어오기 전까지 undefined 초기화 된다.
// 변수 선언에 의해 확보된 메모리 공간에 값이 할당되기 전까지 undefined 상태
let a;
console.log(a);

// number
// NaN (Not a number)
// Javascript는 대소문자 구분

// String 문자, 문자열
// 1. 큰따옴표 ""
// 2. 작은따옴표 ''
// 큰따옴표랑 작은따옴표는 차이 없음
// 3. 역 따옴표(backtick) ``
let text1 = "Hello1";
let text2 = 'Hello2';
let text3 = `Hello3`;

let num = 4;
let text4 = `Hello${num}`
// 문자열에 이미 선언되어 있는 변수를 넣고 싶을 때 역 따옴표(backtick)를 사용한다.
console.log(text1, text2, text3, text4);

// 형변환
console.log(Number('0'));
console.log(Number('hello1'));
// -> NaN라고 뜸(숫자가 아닌게 입력되서)
console.log(Number(true));
// -> 숫자 1을 반환
console.log(Number(false));
// -> 숫자 0을 반환

// 1. 정수(integer) int : 자연수와 0, 자연수에 마이너스를 붙인 숫자
// 2. 실수(real number) :float이라는 명령어로 사용
// floating point(부동 소수점) : 소수점이 있는 숫자

//정수 변환 : parseInt
console.log(parseInt(123.333));
console.log(parseInt('123.333'));
console.log(parseInt('hello'));
// -> 문자열이라 NaN라고 반환



