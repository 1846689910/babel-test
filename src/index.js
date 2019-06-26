class Test {
  constructor() {}
  run(){
    console.log("running");
    import("./student").then(({default: tim}) => console.log(tim.learn()));
  }
}
const t = new Test();
t.run();
