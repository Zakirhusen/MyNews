console.log("react");
console.log(typeof 42);
let a = [1];
let [b] = a;
console.log(b);
// console.log(++a)

const myfun = () => {
  let x = 2;
  return () => console.log("a is" + x);
};
const x = 1;
const test = myfun();
test();
// myfun()
//string returns true
console.log(Boolean("false"));
console.log(Boolean(false));
console.log(Boolean(true));

//empty string returns false
// empty str i.e Boolean('') returns false
console.log("empty str i.e Boolean('') returns" +" "+ Boolean(""));

//empty array or obj returns true
// Boolean([]) returns  true
console.log("Boolean([]) returns " +" "+ Boolean([]));

// Boolean([].length-->retruns 0) returns  false
console.log("Boolean([].length-->retruns 0)so it returns " +" "+ Boolean([].length));

// Boolean({}) returns true
console.log("Boolean({}) returns" +" "+ Boolean({}));

// Boolean('false') returns true
console.log("Boolean('false') returns" +" "+ Boolean("false"));

// Boolean(0) returns false
console.log("Boolean(0) returns" +" "+ Boolean(0));

// Boolean(-1) ie negative value returns true
console.log("Boolean(-1) returns" +" "+ Boolean(-1));

// Boolean(undefined) returns false
console.log("Boolean(undefined) returns" +" "+ Boolean(undefined));

// Boolean(null) returns false
console.log("Boolean(null) returns" +" "+ Boolean(null));

// Boolean(NaN) returns false
console.log("Boolean(NaN) returns" +" "+ Boolean(NaN));