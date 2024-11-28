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
    readonly city: string = "Raipur"
    private _courseCount: number = 1
    constructor(
        public name: string,
        private email: string,
        //readonly userId: string
    ) {}

    get getAppleEmail(): string {
        return `Apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }
}

const Gopal = new User("Gopal", "go01@gmail.com")
Gopal.name
// Gopal.email (cannot accessible outside the class User as it is privte)


