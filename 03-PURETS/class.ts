// class User {
//   public name: string;
//   private email: string;
//   readonly city: string = "Raipur";

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }

class User {
    constructor(
        public name: string,
        private email: string,
        //readonly userId: string
    ) {}
}

const Gopal = new User("Gopal", "go01@gmail.com")
Gopal.name
// Gopal.email (cannot accessible outside the class User as it is privte)

