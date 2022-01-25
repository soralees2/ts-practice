"use strict";
/* interface Person {
  name: String;
  age?: number; // ?은 설정을 해도 되고 안해도 되는 값이라는것을 의미.
} */
/* interface Developer {
  name: string;
  age?: number;
  skills: string[];
} */
var person = {
    name: '김사람',
    age: 20
};
var expert = {
    name: '김개발',
    skills: ['javascript', 'react']
};
var people = [person, expert];
var color = 'red';
var colors = ['red', 'orange'];
console.log(people);
console.log(colors);
