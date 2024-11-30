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

identityThree("coder");
function identityFour<T>(val: T): T {
  //console.log(val.length); T is not an array
  return val;
}

const num = identityFour<number>(89); //? here T is number
const str = identityFour<string>("Gopal here"); //? here T is string

//. Array in Generics 
function xyzIdentity<T>(arg: T[]): T[] {
  return arg;
}

function logIdentity<T>(arg: Array<T>): Array<T> {
  return arg;
}

function getSearchProducts<T>(products: T[]): T {
  const myIndex: number = 8;
  return products[myIndex];
}

//? Generic in arrow functions
const getMoreSearchProducts = (products: number[]): number => {
    const myIndex = 5;
    return products[myIndex]
}