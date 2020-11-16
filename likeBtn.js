var db = firebase.firestore();
const docRef = db.doc('/anonymousLikes/anonymousLikeData');
const likeBtnContainer = document.querySelector('.js-likeBtn');
const likeBtn = likeBtnContainer.querySelector('button');
const LS_KEY_IS_LIKE = 'isLiked';
const LS_VALUE_TRUE = 'true';

function showLike(){
    likeBtn.innerText = `THANKS!💖${currentLikes}`;
}

function addLike(){
    docRef.set({
        likes: currentLikes + 1
    }).then(function() {
        showLike();
    }).catch(function(error){
        console.log('error: ', error);
    });
}

function disableBtn(btnName){
    document.addEventListener("DOMContentLoaded", function(event) {
        btnName.disabled = true;
    });
}

function handleLikeClick(){
    disableBtn(likeBtn);
    localStorage.setItem(LS_KEY_IS_LIKE, LS_VALUE_TRUE);
    addLike();
}

let currentLikes;
function getRealTimeUpdates(){
    docRef.onSnapshot(function(doc){
        if (doc.exists) {
            currentLikes = doc.data().likes;
            const isLiked = localStorage.getItem(LS_KEY_IS_LIKE);
            if (isLiked === 'true'){
                likeBtn.disabled = true;
                likeBtn.innerText = `THANKS!💖${currentLikes}`;
            } else {
                likeBtn.innerText = `Click if you like this website!💕${currentLikes}`;
            }
        }
    });
}

function init(){
    getRealTimeUpdates(); //fires whenever database changes
    likeBtn.addEventListener('click', handleLikeClick);
}

init();
