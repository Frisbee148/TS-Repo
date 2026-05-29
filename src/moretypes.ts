let response: any = '42'

let numericLength: number = (response as string).length

type Book = {
  name : string
}

let bookString = '{"name":"who moved my cheese"}'
let bookObject = JSON.parse(bookString); //string to obj


console.log(bookObject);

//type assertion forcing a type onto a object this causes typescript to trust you no conversion
const inputElement = document.getElementById("username") as HTMLInputElement

let value: any

value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase() // will throw eror 

let newValue: unknown = "chai"

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5

if (typeof newValue == "string") {
  newValue.toUpperCase
}

function neverReturn(): never{
  //used in infinite web server
  while (true) {
  }
}





