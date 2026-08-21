const name = "Amit Tomar "
const repocount = 1

console.log(`my name is ${name} and my repocount is ${repocount}`);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);  // when we write the wrong memory address it shows udefined 

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('m'));

const newname = name.substring(5 , 10); // substring ignores the negative sign
console.log(newname);

const secname = name.slice(-1 , 5);// for negative sign we use slice 
console.log(secname);

const anothername = "   HELLO    "
console.log(anothername);
console.log(anothername.trim()); // trim used for remove the extra spaces from the string like from "  hello   " slim removes the spaces and provide output as hello.

const url = "https://google.com/google%20company"
console.log(url.replace('%20' , '-')); 


