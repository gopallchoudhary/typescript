"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "Hello" => invalid
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myVal = addTwo(5);
getUpper("Gopal");
signUpUser("Gopal", "gp@gmail.com", false);
loginUser("G", "g21@g.com");
// function getVal(myVal: number): number {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heroes = ["iron-man", "batman", "dr.strange"];
//const heroes = [1,2,3]
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
//! declared type -> void
function consoleError(errmsg) {
    console.log(errmsg);
}
//! never (used to handle error)
function handleError(errMsg) {
    throw new Error(errMsg);
}
