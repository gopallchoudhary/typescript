interface User {
  readonly dbId: number;
  email: string;
  userid: number;
  googleId?: number;
  //!startTrial: () => string or startTrial(): string
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

//? Reopening of the interface
interface User {
  githubToken: string;
}

//? Inheritence
interface Admin extends User {
  role: "admin" | "ta" | "manager";
}

const gopal: Admin = {
  dbId: 22,
  email: "go@gmail.com",
  userid: 1473,
  githubToken: "github",
  role: "manager",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "gopal", off: 10) => {
    return 10;
  },
};

interface Point {
  x: number;
  y: number;
}

function getPoint(pt: Point) {
  console.log(`The x is ${pt.x}`);
  console.log(`The y is ${pt.y}`);
}

getPoint({ x: 23, y: 9 });
