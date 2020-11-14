const likeBtnContainer = document.querySelector(".js-likeBtn");
const likeBtn = likeBtnContainer.querySelector("button");
const TRUE_OR_FALSE_LS_KEY = 'isLike';
const TRUE_LS_VALUE = 'true'
const LIKE_COUNT_LS_KEY = 'likeCount'; //dummy
localStorage.setItem(LIKE_COUNT_LS_KEY, '1435'); //dummy

function disableLikeBtn(){
    getItem= localStorage.getItem(LIKE_COUNT_LS_KEY);
    localStorage.removeItem(LIKE_COUNT_LS_KEY);
    localStorage.setItem(LIKE_COUNT_LS_KEY, getItem + '+1');  //---dummy

    likeBtn.disabled = true;
    likeBtn.innerText = `THANKS!💖${localStorage.getItem(LIKE_COUNT_LS_KEY)}`;
}

function addLike(){    
    disableLikeBtn();
    localStorage.setItem(TRUE_OR_FALSE_LS_KEY, TRUE_LS_VALUE);
}

function paintLikeCount(){
    const isLike = localStorage.getItem(TRUE_OR_FALSE_LS_KEY);
    if (isLike === TRUE_LS_VALUE){
        disableLikeBtn();
    } else {
        likeBtn.innerText = `Click if you like this website! 💕${localStorage.getItem(LIKE_COUNT_LS_KEY)}`
    }
}

function init(){
    paintLikeCount();
}

init();
