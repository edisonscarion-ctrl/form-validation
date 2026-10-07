const form=document.getElementById("mama");
const email=document.getElementById("Email");
const error=document.getElementById("error");
const error1=document.getElementById("error1");
const error2=document.getElementById("error2");
const firstName=document.getElementById("firstName")
const lastName=document.getElementById("lastName");

form.addEventListener("submit",(e)=>{
    // this e and its value for preventing default behaviour of submitting itself
     e.preventDefault();

//    this is where regex comes into use
   const Valueregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const regexName=/^[^\s*] +[^a-zA-ZA] $/;

//    and here we compare reality using test method on regex
   if(!Valueregex.test(email.value)||!regexName.test(firstName.value)||!regexName.test(lastName.value)){
    error.style.display="block";
    error1.style.display="block";
    email.style.border="2px solid red"
     firstName.style.border="2px solid red"
    error2.style.display="block";
    lastName.style.border="2px solid red"
   }
   else{
   error.style.display="none";
    error1.style.display="none";
    email.style.border="2px solid green"
     firstName.style.border="2px solid green"
    error2.style.display="none";
    lastName.style.border="2px solid green"
   }
});