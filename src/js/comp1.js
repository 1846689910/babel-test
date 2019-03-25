class Comp1 {
  constructor() {}
  fn1() {
    console.log("fn1");
  }
}
console.log("haa");

module.exports = { Comp1, main: () => {
  console.log("hello from main");

  import("../js/comp3").then(({ Comp3 }) => {
    new Comp3().run();
  });
} };
