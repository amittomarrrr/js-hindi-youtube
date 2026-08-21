// stack and heap memory 
 /*
  1. in stack memory we use primitive data type.
  I=> in stack copy memory will change not the real memory will change.
  2. in heap memory we use non primtive data type.
  I=> in heap we perform the operations on the real data and the real memory data will change after applying the operations.
 */

  // examples of stack 
  let myname = "amit"

  let yourname = myname
  yourname = "tomar"

  console.log(myname);
  console.log(yourname);

  // example of heap 

  let userone = {
    email : "google.com",
    upi : "google@ybl"
  }

  let usertwo = userone
  usertwo.email = "hello.com"

  console.log(userone.email);
  console.log(usertwo.email);
  
  


  
  