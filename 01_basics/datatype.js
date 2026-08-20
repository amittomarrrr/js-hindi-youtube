"use strict"; // treat all js code as newer version

//alert(3+3) we are using nodejs not browser 

// number => 2 to the power 53
// bigint 
// string => ""
// boolean=> true/false
// null => standalone value 
// undefined =>
// symbol => unique

// object

console.log(typeof "hello");
console.table(typeof ["hello", 1234 , null , undefined, true]); // output shows object in a table format because of array.

// to see the type of each element inside the array , we would need to write it differently
console.table(["hello", 1234 , null , undefined, true].map(item => typeof item)); 
