let westeros = {
   cersei: "Lannister",
   arya: "Stark",
   jon: "Snow",
   brienne: "Tarth",
   daenerys: "Targaryen",
   theon: "Greyjoy",
   jorah: "Mormont",
   margaery: "Tyrell",
   sandor: "Clegane",
   samwell: "Tarly",
   ramsay: "Bolton",
}
// print out whole object
console.log(westeros)

// prints out only the keys of that object (in this case the first names)
let keys = Object.keys(westeros)
console.log(keys)

keys.forEach((key) => {
   console.log(key + "1")
})

keys.forEach((key) => {
   westeros[key + "1"] = westeros[key] //  This line creates a new key in the westeros object. The new key is the original key with "1" appended to it, and its value is set to the value of the original key.
   // console.log(westeros[key])
   delete westeros[key]
})
console.log(westeros)

let vals = Object.values(westeros)
console.log(vals)

let entries = Object.entries(westeros)
console.log(entries)

entries.forEach((index, value, array) => {
   console.log(value)
   console.log(index)
   // console.log(array)
})
