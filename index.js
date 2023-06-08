const usernameInput=document.getElementById("username");
const emailInput=document.getElementById('email');
const passwordInput=document.getElementById('password');
const confirmPasswordInput=document.getElementById('confirm-password');
const signupButton=document.getElementById("btn");
const warningPara=document.getElementsByClassName('para');
const modalCloseButton=document.getElementById('close-button');
const modalContainer=document.getElementById('modal-container');
const form=document.getElementById("signupForm");
const mainContainer=document.querySelector('.main-container');
// signupButton.addEventListener("mouseover",()=>{
//     // usernameInput.style.border=' 2px solid red';
//     signupButton.style.backgroundColor='white';
// });
const passwordViewImage=document.getElementById('view-img');
// const passwordHideImage=document.getElementById('hide-view');
// signupButton.disabled=true;
usernameInput.addEventListener("focus",()=>{
    usernameInput.style.borderBlockColor="red";
});
emailInput.addEventListener("focus",()=>{
    emailInput.style.borderBlockColor="red";
});
passwordInput.addEventListener("focus",()=>{
    passwordInput.style.borderBlockColor="red";
});
confirmPasswordInput.addEventListener("focus",()=>{
    confirmPasswordInput.style.borderBlockColor="red";
});

usernameInput.addEventListener("input",()=>{
    if(usernameInput.value.length>3 && usernameInput.value.length<25){
        warningPara[0].classList.add('validation');  
        usernameInput.style.borderBlockColor="green";
     }
    else{
        warningPara[0].classList.remove('validation');
    }
}
);

emailInput.addEventListener("input",()=>{
    const email= emailInput.value.trim();
    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
if (emailRegex.test(email)) {
    warningPara[1].classList.add('validation'); 
    emailInput.style.borderBlockColor="green";
} else {
    warningPara[1].classList.remove('validation'); 
}
});

passwordInput.addEventListener("input",()=>{
    password=passwordInput.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(password)) {
      console.log("Valid password");
      warningPara[2].classList.add('validation'); 
       passwordInput.style.borderBlockColor="green";
    } else {
      console.log("Invalid password");
      warningPara[2].classList.remove('validation');  

    }}
);

confirmPasswordInput.addEventListener("input",()=>{
    if(passwordInput.value!=confirmPasswordInput.value){
        warningPara[3].classList.remove('validation');
    }else{
       warningPara[3].classList.add('validation');  
       confirmPasswordInput.style.borderBlockColor="green";
    }
    
});
// console.log(passwordViewImage);

passwordViewImage.addEventListener("click", (e)=>{
    e.preventDefault();
    if(passwordViewImage.getAttribute("src")==='passview.png'){
        passwordInput.setAttribute("type","text");
        passwordViewImage.setAttribute("src","hide.png");
    }else{
        passwordInput.setAttribute("type","password");
        passwordViewImage.setAttribute("src","passview.png");
    }  
});
// passwordHideImage.addEventListener("click", ()=>{
//     passwordInput.setAttribute("type","password");
//     passwordHideImage.setAttribute("src","passview.png");

// })
// console.log(passwordViewImage.getAttribute("src"));
// for(var i=0;i<warningPara.length;i++){
//     var count=0;
//     if(warningPara[i].classList.contains('vallidation')){
//         console.log(warningPara[i].classList);
//       count++;
//     }
//     if(count==4){
//         signupButton.disabled=false;
//     }
// }
if(warningPara[0].classList.contains('validation') &&
 warningPara[1].classList.contains('validation') &&
  warningPara[2].classList.contains('validation') &&
  warningPara[3].classList.contains('validation')){
   signupButton.disabled=false;
}
signupButton.addEventListener("click",(e)=>{
    e.preventDefault();
   e.stopPropagation();
    console.log("signupButton is clicked");
    mainContainer.classList.add('validation');
    modalContainer.classList.remove('validation');
    

});
modalCloseButton.addEventListener("click",()=>{
    mainContainer.classList.remove('validation');
    modalContainer.classList.add('validation');
    passwordInput.value="";
    emailInput.value="";
    usernameInput.value="";
    confirmPasswordInput.value="";
});


