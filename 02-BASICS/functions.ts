function addTwo(num: number): number {
  return num + 2;
  //return "Hello" => invalid
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myVal = addTwo(5);
getUpper("Gopal");
signUpUser("Gopal", "gp@gmail.com", false);
loginUser("G", "g21@g.com");

// function getVal(myVal: number): number {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

let getHello = (s: string): string => {
  return "";
};

const heroes = ["iron-man", "batman", "dr.strange"];
//const heroes = [1,2,3]

heroes.map((hero): string => {
  return `Hero is ${hero}`;
});

//! declared type -> void
function consoleError(errmsg: string) {
  console.log(errmsg);
}

//! never (used to handle error)
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
