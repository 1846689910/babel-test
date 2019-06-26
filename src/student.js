class Student{
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.learn = this.learn.bind(this);
  }
  learn(){
    return `${this.name} is learning`;
  }
}
module.exports = new Student("tim", 12);
