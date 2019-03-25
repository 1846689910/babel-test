const { Comp1, main } = require("./js/comp1");
class Test {
  constructor() {}

  hello(height = 50) {
    console.log("hello, world", height);
    console.log(`hello, template ${height}`);
  }
}
const x = new Test();
new Comp1().fn1();
x.hello();
import("./js/comp3").then(({Comp3}) => {
  console.log(Comp3);
})
