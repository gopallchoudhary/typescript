const User = {
  name: "Gopal",
  email: "gop23@gmailcom",
  isActive: true,
};

//? argument -> object
function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "Gopal", isPaid: false, email: "gop21@gmail.com" }
createUser(newUser);

//? declared type -> object
function createCourse(): { name: string; price: number } {
  return { name: "reactJs", price: 599 };
}

export {};
