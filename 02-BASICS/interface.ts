interface User {
  readonly dbId: number;
  email: string;
  userid: number;
  googleId?: number;
  //!startTrial: () => string or startTrial(): string
  startTrial(): string,
  getCoupon(couponName: string, value: number): number
}

const gopal: User = {
  dbId: 22,
  email: "go@gmail.com",
  userid: 1473,
  startTrial: () => {
    return "trial started"
  },
  getCoupon: (name: "gopal", off: 10) =>  {
    return 10
  },
  
};
