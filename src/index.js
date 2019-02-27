class EricTest {
  constructor() {}
  static myProp = 123;
  hello(height = 50) {
    console.log("hello, world", height);
    console.log(`hello, template ${height}`);
  }
}
const x = new EricTest();
x.hello();
(async() => {
    const {aaa: content} = await Promise.resolve({aaa: 123});
})();
