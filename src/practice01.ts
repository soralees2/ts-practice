/* const message:string = 'hello world';
console.log(message); */

let count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면.. 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green'; // 에러 발생

function sum (x: number, y: number): number{
//  return x + y;
 return x + y;
}
sum(1,2);

function sumArray(numbers: number[]): number{ // 반환 타입도 설정 가능
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);

function returnNothing(): void{ // 반환타입 void (아무것도 반환하지 않음)
  console.log('I am just saying hello world')
}

