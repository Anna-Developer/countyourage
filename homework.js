'use strict'

const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', () => {
  let result = new CountAge(input.value);
  output.value = result.age;
  if (input.value == 0 || input.value == null) {
    output.value = '';
  }
});

function CountAge(birthday) {
  this.birthday = birthday;
  Object.defineProperty(this, "age", {
    get() {
      let nowYear = new Date().getFullYear();
      let birthdayYear = this.birthday;
      let age = nowYear - birthdayYear;
      return age
    },
  })
}
// let hello = new CountAge(new Date(1992, 6, 1));
// // console.log(john.birthday); // доступен как день рождения
// console.log(hello.age);      // ...так и возраст