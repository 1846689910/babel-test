class Test {
  constructor() {}

  hello(height = 50) {
    console.log("hello, world", height);
    console.log(`hello, template ${height}`);
  }
}
const x = new Test();
x.hello();
// const fsPromises = require("fs").promises;
// (async() => {
//     const {aaa: content} = await Promise.resolve({aaa: 123});
// })();
