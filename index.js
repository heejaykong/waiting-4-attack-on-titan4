const mytitle = document.querySelector("#mytitle");

const CLICKED_CLASS = "clicked"

function handleClick(){
    mytitle.classList.toggle(CLICKED_CLASS);
}
function init(){
    mytitle.addEventListener("click", handleClick);
}

init();

// ########################################

function drawbg() {
    const string = "images/" + index + ".jpg";
    document.body.style.backgroundImage = `url(${string})`;
    console.log(index);
}

let index = 1;
// setInterval(function() {
//     if(index<=8) {
//         drawbg();
//         index = index + 1;
//     } else {
//         index = 1;
//         drawbg();
//         index = index + 1;
//     }
// }, 3000);
