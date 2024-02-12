let SearchForm = document.querySelector(".searchForm");
let FormBtn = document.querySelector("#loginBtn");
let loginForm = document.querySelector(".LoginFormContainer");
let FormClose = document.querySelector("#FormClose");

document.querySelector("#searchBtn").onclick = () =>{
    SearchForm.classList.toggle("active");
};

// Login Form
FormBtn.addEventListener("click", () => {
    loginForm.classList.toggle("active");
    SearchForm.classList.remove("active")
});
FormClose.addEventListener("click", () => {
    loginForm.classList.remove("active");
});