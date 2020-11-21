const body = document.querySelector("body");
const IMG_NUMBER = 9;

function paintImage(index) {
    const imgTagToBeRemoved = body.firstElementChild;
    body.removeChild(imgTagToBeRemoved);
    const image = new Image();
    image.src = `images/${index}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init(){
    const image = new Image();
    image.src = `images/1.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);

    let index = 2;
    setInterval(function() {
        if (index <= IMG_NUMBER) {
            paintImage(index);
            index = index + 1;
        } else {
            index = 1;
            paintImage(index);
            index = index + 1;
        }
    }, 10000);
}

init();