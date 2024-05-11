// import { apiKey } from "./util.js";

// console.log(apiKey);
// geet();

// function geet() {
//   console.log('hello!');
// }

// export default (userName, message) => {
//   console.log('hello');
//   return userName + message;
// };

// const user = {
//   name: 'Max',
//   age: 34,
//   // 메소드
//   greet() {
//     console.log('Hello');
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//   return item === "Sports";
// });

// console.log(index);

// map은 기존 배열을 수정하지 않음
// const editedHobbies = hobbies.map((item) => ({ text: item }));

// console.log(editedHobbies);


// 디스트럭 처링
// const [firstName, lastName] = ["Max", "Schwarzmuller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];


// console.log(firstName);
// console.log(lastName);

// const { name, age } = {
//   name: 'Max',
//   age: 34,
// };

// console.log(name);
// console.log(age);

//이렇게 작성하는 대신 디스트럭 처링 활용 객체는 중괄호 사용
// const name = user.name;
// const age = user.age;

// 스프레드 연산자

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34
// };

// const newHobbies = ["Reading"];

// const mergeHobbies = [...hobbies, ...newHobbies];
// console.log(mergeHobbies);

// // 스프레드 연산자는 객체에도 사용가능 
// const extendeUser = {
//   isAdmin: true,
//   ...user
// };

// console.log(extendeUser);

// function handleTimeout() {
//   console.log("Timed out");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// // 함수를 다른 함수로 값을 전달 하는 방법
// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out..");
// }, 4000);


// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => { console.log('Hi'); });

// function init() {
//   function greet() {
//     console.log('Hi!');
//   }
//   greet();
// }
// init();

let userMessge = 'Hello!';
userMessge = "Hello there!";