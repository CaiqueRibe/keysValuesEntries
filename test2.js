const test = {
   key1: "value1",
   key2: "value2",
   key3: "value3",
   key4: "value4",
   key5: "value5",
}

let keys = Object.keys(test) // will only get the keys LHS of the object
// console.log(keys)

let values = Object.values(test) // will only get the values RHS of the object
// console.log(values)

let entries = Object.entries(test) // will get both the keys and avalues of the object and tranform it into an array
console.log(entries)

// all of these will store the result into arrays
// which will then make the objects values iterable
//  - will now be an array stead of an object but with the same values
