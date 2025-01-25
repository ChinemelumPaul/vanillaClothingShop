// for search 
// const searchId = document.querySelector("#search-id");
// const searchOverlay = document.querySelector("#search-overlay");
// const closeButton = document.querySelector("#close-button");

// const showStyle = function(event){
//     event.preventDefault();
//     searchOverlay.style.display = "block";
//     console.log("yes")

// }

// searchId.addEventListener("click", showStyle)

// closeButton.addEventListener("click",function(event){
//     event.preventDefault();
//     searchOverlay.style.display = "none";
//     console.log("yes")

// })

// // for Account
// const register = document.querySelector("#register");
// const form = document.querySelector("#form");
// const signUp = document.querySelector("#sign-up");
// const signIn = document.querySelector("#sign-in");
// const signUpButton= document.querySelector("#sign-up-button");
// const signInButton  = document.querySelector("#sign-in-button");

// const registerSignIn = document.querySelector("#register-sign-in");


// signUp.addEventListener("click", function(event){
//     event.preventDefault();
//     register.style.display = "block";
   
    
//     console.log("yes")

// })

// signUpButton.addEventListener("click", function(event){
//     event.preventDefault();
//     register.style.display = "none";
//     console.log("yes")

// })

// signIn.addEventListener("click", function(event){
//     event.preventDefault();
//     registerSignIn.style.display = "block";

//     console.log("yes")


// })

// signInButton.addEventListener("click", function(event){
//     event.preventDefault();
//     registerSignIn.style.display = "none";
//     console.log("yes")

// })

// nav bar menu when screen size reduces #responsive
const barId1 = document.querySelector("#bar-id-1");
const barId2 = document.querySelector("#bar-id-2");
const navBar1 =  document.querySelector("#navbar1");
const navBar2 = document.querySelector("#navbar2");


 barId1.addEventListener("click", function(){
  navBar1.classList.add("actives"); 
  console.log("yes");
    })

barId2.addEventListener("click", function(){
   navBar2.classList.add("actives");
   console.log("yes");
    })

// nav-bar on smaller screen close button 

const closeReplacement1 = document.querySelector("#close-replacement-1");
const closeReplacement2 = document.querySelector("#close-replacement-2");

closeReplacement1.addEventListener("click", function(){
    navBar1.classList.remove("actives");
})

closeReplacement2.addEventListener("click", function(){
    navBar2.classList.remove("actives");
})


//login / register (account page)
const login = document.querySelector("#login");
const reg = document.querySelector("#reg");

const loginForm = document.querySelector("#login-form")
const regForm = document.querySelector("#reg-form")
const indicator = document.querySelector("#indicator")

login.addEventListener("click", function(){
    loginForm.style.transform = "translateX(400px)";
    regForm.style.transform = "translateX(400px)";
    indicator.style.transform = "translateX(80px)";
})

reg.addEventListener("click", function(){
    loginForm.style.transform = "translateX(0px)";
    regForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(180px)";
})