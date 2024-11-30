const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: string | number): string | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("coder")
function identityFour<T>(val: T): T {
  return val;
}

const num = identityFour<number>(89) //? here T is number


const str = identityFour<string>("Gopal here") //? here T is string

