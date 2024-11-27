// const User = {
//   name: "Gopal",
//   email: "gop23@gmailcom",
//   isActive: true,
// };

//? argument -> object
// function createUser({ name: string, isPaid: boolean }) {}
// let newUser = { name: "Gopal", isPaid: false, email: "gop21@gmail.com" }
// createUser(newUser);

//? declared type -> object
// function createCourse(): { name: string; price: number } {
//   return { name: "reactJs", price: 599 };
// }

//? custom-type
// type User = {
//   name: string,
//   email: string,
//   isActive: boolean
// }

// function createUser(user: User): User {
//   return {name: "G", email: "g", isActive: true}
// }

//function createUser2(user: User) /*User*/ {
//return {name: "G", email: "g", isActive: true}
//}

// createUser({name: "G", email: "g", isActive: true})

// type Point = {
//   x: number,
//   y: number
// }

// function showCord(pt: Point) {
//   console.log(`The x coordinates is ${pt.x}`);
//   console.log(`The y coordinates is ${pt.y}`);
// }

// showCord({x:50, y: 9})

//? Readonly & ?
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditDetails?: string;
};

let myUser: User = {
  _id: "1243",
  name: "G",
  email: "g@g.com",
  isActive: false,
};

//myUser._id = "gops";
myUser.email = "g2@gmail.com";

//? Combination
type cardNumber = {
  cardNumber: number
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}



export {};
