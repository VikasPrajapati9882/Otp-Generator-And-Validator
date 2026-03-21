let otp = document.querySelector("div");
let btn = document.querySelectorAll("button");
let verify = document.querySelector(".verify");
let reset = document.querySelector(".reset");
let input = document.querySelector(".validate");
let massage = document.querySelector("nav");
let section = document.querySelector(".section");

function otpGenerator(){
 let ranNumber = Math.floor(1+Math.random()*10000);
 if(ranNumber>999){
  return ranNumber;
 }
 else if(ranNumber>1 && ranNumber<10){
    return ranNumber*1000;
 }
 else if(ranNumber>=10 && ranNumber<=99){
   return ranNumber*100;
 }
 else if(ranNumber>=100 && ranNumber<=999){
    return ranNumber*10;
 }
}
btn[0].addEventListener("click",()=>{
       otp.innerText = otpGenerator();
    otp.style.fontSize ="20px";
    console.log(otp.innerText);      
    setTimeout(()=>{
      section.innerText = "OTP GENERATED SUCCESSFULLY";
    },200)
    section.innerText = "";
})

btn[1].addEventListener("click",()=>{
   otp.innerText = "CLICK FOR OTP";
   otp.style.fontSize = "15px";
   section.innerText = "";
})

verify.addEventListener("click",()=>{
   if(otp.innerText==input.value){
      setTimeout(()=>{
      massage.innerText = "OTP VERIFICATION SUCCESSFULLY";
      },200)
      massage.innerText ="";      
   }
   else if(input.value == ""){
      setTimeout(()=>{
         massage.innerText = "INVALID INPUT";
      },200)
      massage.innerText ="";
   }
   else{
      setTimeout(()=>{
         massage.innerText = "INVALID OTP";
      },200)
      massage.innerText ="";
   }
})

reset.addEventListener("click",()=>{
   massage.innerText = ""; 
   input.value="";        
})
console.log(section.innerText);