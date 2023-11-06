All three methods will create an iterable Array from the Object<br>

-  that you can then use in conjunction with other Array and iterable methods.

# Notes

-  With an basic object, you cant know index, length
-  Arrays, strings, node lists, typed arrays, maps, sets, arguements keyword (inside a function ) are all iterable
-  for loop are designed to work with these iterable objects

   -  for (let prop of arr)
   -  foreach() // designed to be called once for each of the items in an iterable object
   -  filter(), map(), reduce()
      -  useful methods that belong to array objects

-  So some of the things mentioned above, cant be done with a basic object

### Create an iterable object from a basic object

-  Objects.keys(obj)
-  Objects.values(obj)
-  Objects.entries(obj)

### Questions

-  How can we iterate an Object??
-  How can we grab an object and transform it into an array
-  How can we extract from and incoming object its keys, values and entries
