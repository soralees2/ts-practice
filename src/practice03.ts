/* interface Person {
  name: String;
  age?: number; // ?은 설정을 해도 되고 안해도 되는 값이라는것을 의미.
} */
/* interface Developer {
  name: string;
  age?: number;
  skills: string[];
} */

/* interface Developer extends Person{
  skills: string[];
} */
type Person = {
  name: string;
  age?: number;
}

type Developer = Person & {
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
}

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
}

type People = Person[]; // Person[]을 이제 People이라는 타입으로 사용 가능
const people: Person[] = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];
console.log(people);
console.log(colors);
