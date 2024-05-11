import { apiKey } from "./util.js";

console.log(apiKey);
geet();

function geet() {
  console.log('hello!');
}

export default (userName, message) => {
  console.log('hello');
  return userName + message;
};