let score: number | string = 33;

score = 55;

score = "Ok";

type User = {
  name: string;
  id: number;
};

type Admin = {
  readonly username: string;
  id: number;
};

let Gopal: User | Admin = { name: "Gopal", id: 1234 };
Gopal = { username: "gopaetic", id: 1353 };

//? Union in function
function getDbId(id: number | string) {
  if (typeof id == "string") {
    //! 100% sure now it is a string
    id.toLowerCase();
  }
  if (typeof id == "number") {
    //! 100% sure now it is a number
    id + 2;
  }
}

getDbId(6);
getDbId("9");

//? Array
const data: number[] = [1, 5, 6];
const data2: string[] = ["1", "8", "ok"];
const data3: (number | string | boolean)[] = [1, "9", false];


let seatAllotment: "aisle" |  "middle" | "window"

seatAllotment = "window"
//seatAllotment = "crew" (wrong)
