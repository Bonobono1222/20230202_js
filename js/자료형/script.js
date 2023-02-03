
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
let t;
console.log(t);

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

//연산자
// 1. 산술 연산자 : +, -, /, *, %
console.log(30 + 10);
console.log(30 - 10);
console.log(30 / 10);
console.log(30 * 10);
// 나머지 연산자 : %
console.log(30 * 10);
// 거듭제곱 연산자 : **
console.log(30 ** 10);

// 2. 대입 연산자 : =, +=, -=
let num1 = 123;
let num2 = 456;
let str1 = "Hello";
let str2 = "World!";

let num3, str3;

num3 = num1 + num2;
str3 = str1 + str2;

console.log(num3);
console.log(str3);

let num4 = num1 - num2;
let str4 = str1 - str2; // NaN라고 반환

console.log(num4);
console.log(str4);

// 자바스크립트는 동적언어라 변수 선언 시 타입 지정 X
// 값이 할당되는 순간 그 값에 따라  타입이 결정됨
// 자바스크립트가 타입스크립트에 비해 자유도와 유연성이 높다
// 1. 예상 못한 버그가 발생할 확률이 높다.(자바스크립트)
// 2. 프로젝트 규모가 커질수록 뮤지보수 비용 증가, 안정성 저하

// let num(변수이름) = '숫자';(자바스크립트)

// 타입스크립트는 선언과 동시에 어떤 타입을 넘겨야하는지 명확하게 작성해야 한다.
// 해당 타입이 아닌 데이터를 넘긴다면 바로 컴파일러 에러 발생
// let num:number = '문자열'; (타입스크립트)
// 자신이 지정한 자료형하고 다른 값이 들어오면 에러 발생
// TypeScript 마이크로소프트가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어
// 자바스크립트에 타입을 부여한 언어 -> 자바스크립트 상위 버전

let a = '문자열';
let b = 1234;
let c = a + b;
let d = 20 - '10';
console.log(c,d);
// 자바스크립트는 대/소문자 구분을 하기 때문에 변수를 대/소문자로 주면 다른 변수가 됌

// 3. 복합 대입 연산자
let Num = 10;
let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 10;
// 다른 변수인데 같은 값을 주려면 = 를 사용

console.log(result_1, result_2, result_3, result_4, result_5);

// 복합 대입 연산자 +=
result_1 += Num;
//result_1은 result_1 + Num (10+10)
console.log(result_1); // 20 반환

// 복합 대입 연산자 -=
result_2 -= Num;
//result_2는 result_2 - Num (10-10)
console.log(result_2); // 0 반환

// 복합 대입 연산자 *=
result_3 *= Num;
//result_3은 result_3 * Num (10*10)
console.log(result_3); // 100 반환

// 복합 대입 연산자 /=
result_4 /= Num;
//result_4는 result_4 / Num (10/10)
console.log(result_4); // 1 반환

// 복합 대입 연산자 %=
result_5 %= Num;
//result_5는 result_5 % Num (10%10)
console.log(result_5); // 0 반환

// 증가, 감소 연산자 ++, --
let number, result;
number = 10;
console.log(number); // 10 반환
result = number++; //number++ 때문에 그 다음에 number를 콘솔로그 해서 봤을 때 1증가한 11로 반환
console.log(result); // 10 반환 
console.log(number); // 11로 1이 증가되어 있음

number = 10;
console.log(number); // 다시 10 반환
result = ++number; //이 행에서 number가 1증가되어 result에 대입
console.log(result); // ++number 때문에 result는 11로 반환

number = 10;
console.log(number);
result = number--; // result에 10을 대입
console.log(result); // result는 10을 반환 하지만 number를 콘솔로그로 해서 보면 9로 -1 감소 되어있음
console.log(number); // 9로 반환

number = 10;
console.log(number);
result = --number; // result에 number가 -1 감소된 9을 대입
console.log(result); // 9를 반환
console.log(number); // 9를 반환
result = --number; // result에 number가 -1 감소된 8을 대입
console.log(result); // 8를 반환
console.log(number); // 8를 반환

// 비교 논리 연산자
// 1. 비교 연산자

// Number
console.log(5 <= 10 ); // true 반환
console.log("5" <= 10); // true 반환
console.log(true == 1); // true 반환
console.log(true == 0); // false 반환
console.log(true == '1'); // true 반환
console.log(false == 0); // true 반환
console.log(true === 1); // false 반환( true는 자료형 : Boolean / 숫자 1은 자료형 : number )
console.log(false != 0); // false 반환
console.log(false !== 0); // true 반환

// String
console.log("a" < "z"); // true 반환
// 알파벳 순서대로 비교
console.log("a" < "A"); // false 반환
// 자바스크립트에서 소문자 > 대문자로 비교 되어짐
console.log("Hello" > "Hi"); // false 반환
// 앞에 알파벳이 같을 경우 뒤에 알파벳을 비교

let text5 = 123123;
console.log(text5);

console.log(typeof(text5)); //number
console.log(typeof(true)); // boolean
console.log(typeof(false)); // boolean

// 2. 논리 연산자
// &&(AND), ||(OR), !(NOT)
// A && B : 둘 다 참일 때
// A || B : 둘 중에 하나가 참일 때
// !A == B : A와 B가 같지 않을 때

// Scope (전역변수, 지역변수)
// 1. 지역변수(=로컬 스코프)에서 전역변수(=글로벌 스코프) 사용 가능
let x = 1;
let y = 2;
let z = 3;
console.log(x, y, z);

function local1() {
  // 지역변수(=로컬 스코프)
  let x = 4;
  let y = 5;
  let z = 6;

  console.log(x);
  console.log(y);
  console.log(z);
  // 지역변수 안에 변수에 값을 재할당 할 수 있다.
}

local1(); // 함수 호출

// 2. 전역변수(=글로벌 스코프)에서 지역변수(=로컬 스코프) 사용 불가능

// 전역변수(=글로벌 스코프)
let A1 = 1;
let B2 = 2;

function local2() {
  let C3 = 3;
  let D4 = 4;

  console.log(A1);
  console.log(B2);
  console.log(C3);
  console.log(D4);
}

local2();

// console.log(C3);
// console.log(D4); // defined 뜸

// 3. 지역변수(=로컬 스코프) 내에 다른 지역변수(=로컬 스코프)가 이중으로 겹칠 때

let e = 1;

function double1() {
  let f = 3;
  let g = 4;

  console.log(f);
  console.log(g);
  // console.log(h); defined 뜸

  function double2() {
    let h = 5;
    let i = 6;

    console.log(f);
    console.log(h);
  }
  double2();
}
double1();
// double2() 함수에서는 double1() 함수의 변수를 사용할 수 있지만, double1()에서는 double2()의 변수를 사용할 수 없다.


// 조건문1

let apple_price = 8;

if(apple_price >= 10) {
  console.log("너무 비싸");
} else if (apple_price < 5) {
  console.log("저렴하군");
} else {
  console.log("Nice!")
}

// 조건문2
// 성인이라면 "성인입니다." html상에서 보이게
// 성인이 아니라면 "성인이 아닙니다." 로 보이게
let age = 20;
let msg;

if(age >= 19) {
  //document.write("성인입니다."); /1
  //document.write("<h1>성인입니다.</h1>"); /2 h1태그 사용
  let msg = '성인입니다.'
  // document.write('<h1>' + msg +'</h1>'); /3 msg 변수 선언 후 사용
  document.write(`<h1>${msg}</h1>`); // 역 따옴표(backtick) 사용
} else if (age < 19) {
  //document.write("성인이 아닙니다."); /1
  //document.write("<h1>성인이 아닙니다.</h1>"); /2 h1태그 사용
  let msg = '성인이 아닙니다.'
  // document.write('<h1>' + msg +'</h1>'); /3 msg 변수 선언 후 사용
  document.write(`<h1>${msg}</h1>`); // 역 따옴표(backtick) 사용
}

// 3항 연산자
let msg_another = age >= 19 ? "성인입니다." : "성인이 아닙니다.";
// 변수선언 후 변수에 대입할 문 ? true : false;
console.log(msg_another); // age 값이 20이라 성인입니다. 반환

// 조건문 (Switch)
// 조건이 많은 경우 Switch문을 사용하는 것이 가독성이 좋다.
// case 0 : 실행문
// 조건이 맞으면 break 이후 비교하지 않고 Switch문을 종료 시킨다.
// default문은 Switch의 가장 마지막에 위치한다.
// default문 실행이 종료되면 Switch 빠져 나간다.(break생략 가능)

let day_number = 5;
let day = ''; //빈 문자열

switch (day_number) {
  case 0:
    day = 'Sunday';
    break;
    // case 0일 경우에는 day라는 변수는 Sunday이다.
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Friday';
    break;
  case 5:
    day = 'Saturday';
    break;
  case 6:
    day = 'Sunday';
    break;
  default:
    day = 'Error';
}
console.log(day);

// Switch 조건문 2
let browser = "Safari";
// let browser; 는 브라우저를 선택하세요. 반환


switch (browser) {
  case "Exploer" :
    msg = "익스플로어";
    break;
  case "Chrome" :
    msg = "크롬"
    break;
  case "Firefox" :
    msg = "파이어폭스"
    break;
  case "Safari" :
    msg = "사파리"
    break;
  case "Opera" :
    msg = "오페라";
    break;
  default:
    msg = "브라우저를 선택하세요."
}
console.log(msg); // 사파리 반환

// for문 (=반복문)
let index;

function local_func() {
  for(index = 0; index <= 10; index++) {
    console.log(index);
  }
}

local_func(); // 0~10까지 반환

// 1~100까지 더한 값 나오게 결과 5050
// for문이랑 대입 연산자 사용

  let zero = 0;

  for( let i = 1; i <= 100; i++) {
    zero += i;
    console.log(zero);
  } // 초기값 -> 조건식 -> 출력 -> 증감값
    // 초기값 let i = 1이라는 값을 메모리 공간에 저장
    // 조건식 : i가 100이 될 때 까지 반복적으로 조건 실행
    // i = 1 <= 100 true
    // i = 2 <= 100 true (조건까지 반복)
    // 조건식이 만족 될 때 까지 ++로 값이 증가되면서 반복 실행




























