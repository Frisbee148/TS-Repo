// ======================================================
// TYPESCRIPT TYPE GUARDS - REVIEW FILE
// ======================================================

// ------------------------------------------------------
// WHAT IS A TYPE GUARD?
// ------------------------------------------------------

/*
A type guard is a condition/check that helps TypeScript
understand the type of a variable.

Why?

Because sometimes TS sees:

value: string | number
or
error: unknown

and does not know what it is exactly.

Type guards "narrow" the type.

Example:

Before check:
value -> string | number

After check:
value -> string
*/

// ======================================================
// 1. TYPEOF TYPE GUARD
// ======================================================

/*
Used for primitive types:

- string
- number
- boolean
- bigint
- symbol
- undefined
- function
- object

Syntax:

typeof variable === "type"
*/

function printValue(value: string | number) {
  // narrowing
  if (typeof value === "string") {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}

printValue("hello");
printValue(25);

/*
Flow:

value: string | number
          |
    typeof check
      /       \
 string      number
*/

// ======================================================
// 2. INSTANCEOF TYPE GUARD
// ======================================================

/*
Used for classes/objects.

Checks:

"Was this object created from this class?"

Syntax:

value instanceof ClassName
*/

class Dog {
  bark() {
    console.log("Woof");
  }
}

const myDog = new Dog();

if (myDog instanceof Dog) {
  // narrowed to Dog
  myDog.bark();
}

/*
Real world use:
Error handling
*/

try {
  throw new Error("Database connection failed");
} catch (error) {
  /*
  error is unknown

  Could be:
  - Error object
  - string
  - number
  - custom object
  */

  if (error instanceof Error) {
    // narrowed to Error
    console.log(error.message);
    console.log(error.name);
  }
}

/*
Flow:

error: unknown
       |
instanceof Error
       |
error: Error
*/

// ======================================================
// 3. "IN" TYPE GUARD
// ======================================================

/*
Used when checking properties.

Syntax:

"property" in object
*/

type User = {
  name: string;
};

type Admin = {
  permissions: string[];
};

function checkRole(person: User | Admin) {
  if ("permissions" in person) {
    // narrowed to Admin
    console.log(person.permissions);
  } else {
    // narrowed to User
    console.log(person.name);
  }
}

checkRole({ name: "John" });

checkRole({
  permissions: ["delete-user"],
});

/*
Flow:

person: User | Admin
              |
    "permissions" in person
         /            \
      Admin          User
*/

// ======================================================
// 4. EQUALITY TYPE GUARD
// ======================================================

/*
TypeScript narrows using equality checks.
*/

function process(value: string | null) {
  if (value !== null) {
    // value is string
    console.log(value.toUpperCase());
  } else {
    console.log("Null value");
  }
}

process("hello");
process(null);

// ======================================================
// 5. CUSTOM TYPE GUARD
// ======================================================

/*
You can create your own type guard.

Syntax:

function xyz(x): x is Type
*/

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(animal: Fish | Bird): animal is Fish {
  // returns boolean
  return "swim" in animal;
}

function moveAnimal(animal: Fish | Bird) {
  if (isFish(animal)) {
    // narrowed to Fish
    animal.swim();
  } else {
    // narrowed to Bird
    animal.fly();
  }
}

moveAnimal({
  swim() {
    console.log("Swimming");
  },
});

/*
IMPORTANT:

animal is Fish

means:

"If this function returns true,
tell TypeScript that animal is Fish"
*/

// ======================================================
// 6. TYPE GUARDS WITH ARRAYS
// ======================================================

function printData(data: string[] | string) {
  if (Array.isArray(data)) {
    // narrowed to string[]
    console.log(data.join(", "));
  } else {
    // narrowed to string
    console.log(data.toUpperCase());
  }
}

printData(["A", "B"]);
printData("hello");

// ======================================================
// 7. COMMON INTERVIEW EXAMPLE
// ======================================================

type SuccessResponse = {
  success: true;
  data: string;
};

type ErrorResponse = {
  success: false;
  message: string;
};

function handleResponse(response: SuccessResponse | ErrorResponse) {
  if (response.success) {
    // narrowed to SuccessResponse
    console.log(response.data);
  } else {
    // narrowed to ErrorResponse
    console.log(response.message);
  }
}

// ======================================================
// QUICK REVISION
// ======================================================

/*

1. typeof
-----------
For primitive values

typeof x === "string"


2. instanceof
--------------
For classes/objects

x instanceof Error


3. in
------
For checking properties

"name" in obj


4. equality narrowing
----------------------
null / undefined / literal checks

x !== null


5. custom type guard
---------------------

function isFish(x): x is Fish


6. Array.isArray
----------------
Array narrowing


MAIN IDEA:
----------

Type guard = narrows type

Before:
string | number

After:
string

*/
