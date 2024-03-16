let container = document.querySelector(".container");
let signUpBuuton = document.querySelector(".signup-section header");
let loginButton = document.querySelector(".login-section header");
loginButton.addEventListener("click",()=>{
    container.classList.add('active');
});
signUpBuuton.addEventListener("click",()=>{
    container.classList.remove('active');
});
