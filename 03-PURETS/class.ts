// class User {
//   public name: string;
//   private email: string;
//   readonly city: string = "Raipur";

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }

//? Class
// class User {
//   readonly city: string = "Raipur";
//   private _courseCount: number = 1;
//   constructor(
//     public name: string,
//     private email: string //readonly userId: string
//   ) {}

  //? Getter
  // get getAppleEmail(): string {
  //   return `Apple ${this.email}`;
  // }

  // get courseCount(): number {
  //   return this._courseCount;
  // }

  //? Setter
  // set courseCount(courseNum) {
  //   if (courseNum <= 1) {
  //     throw new Error("course count must be greater than 1");
  //   }
  //   this._courseCount = courseNum;
  // }

  //? private methods
//   private deleteToken() {
//     console.log("Token deleted");
//   }
// }

// const Gopal = new User("Gopal", "go01@gmail.com");
// Gopal.name;
// Gopal.email (cannot accessible outside the class User as it is privte)
