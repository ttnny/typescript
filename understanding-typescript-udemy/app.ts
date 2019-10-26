// assign types
import Collator = Intl.Collator;

let age: number;
age = 27;

// string
let myName = 'Tony';

// array
let hobbies: any[] = ['Cooking', 'Sports'];
hobbies = [100];

// tuples: array of mixed types
let tuple = ["Superman", 1999]; // type: any[]
let movie: [string, number]; // more strict in type
movie = ["X-men", 1999];

// enum: make numbers more expressive
enum Color { // create a new type Color
    Gray,   // 0 by default
    Green = 100,  // 1 by default
    Blue    // 2 by default, but will become 101 after setting Green to 100, unless overriding its value
}
let myColor: Color = Color.Green;
console.log(myColor); // will see 100 (not Green) in browser console

// functions & types
function returnMyName(): string {
    return myName;
}

function sayHello(): void { // with or without void type is ok here
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 4));

// functions as types
let myMultiply: (a: number, b: number) => number; // ES6 syntax
myMultiply = multiply;
myMultiply(10, 3);

// objects
let userData: {name: string, age: number} = {
    name: "Tony",
    age: 32
};
userData = {
    name: "Wolverine",
    age: 999
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// custom types with type aliases
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// multiple types with union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
} else if (typeof finalValue == "string") {
    console.log("Final value is a string");
}

// type: never
function neverReturns(): never {
    throw new Error("An error");
}

// type: null
let canBeNull = 12;
// canBeNull = null; will throw error
let canAlsoBeNull: number | null = 12;
canAlsoBeNull = null;