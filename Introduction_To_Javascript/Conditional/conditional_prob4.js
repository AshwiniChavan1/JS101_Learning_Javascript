//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let reg_username="abc";
let reg_pass="12345";

let ent_username="abc";
let ent_pass="12345";
if(ent_username==reg_username){
  
  if(ent_pass==reg_pass){
    console.log("Login Succesfull");
    } else {
    console.log("Incorrect Password");
    }
} else {
  console.log("Wrong Credential");
  
}