const form = document.querySelector(".js-form");
const inputBox = form.querySelector("input");
const usernameTitle = form.querySelector("h1");

function displayUsername(string){
    if (string) usernameTitle.innerHTML = `Hello, ${string}!`;
}

function submitUsername(){
    localStorage.setItem('username', inputBox.value);
    const currentUsername = localStorage.getItem('username');
    displayUsername(currentUsername);
    inputBox.value = "";
}

displayUsername(localStorage.getItem('username'));