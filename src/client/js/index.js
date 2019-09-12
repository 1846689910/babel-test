import style from "../style/main.css";
import logo from "../images/electrode.png";
class Student {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}
const s = new Student("Alex", 21);
console.log("Hello World");
console.log(s.name);
document.body.appendChild((() => {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Hello! babel-test";
  h1.style.alignSelf = "center";
  return h1;
})());
document.body.appendChild((() => {
  const span = document.createElement("span");
  span.innerHTML = `<img src="${logo}" alt="logo" />`;
  return span;
})());