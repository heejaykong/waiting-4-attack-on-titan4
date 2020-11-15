var db = firebase.firestore();
const docRef = db.doc('/anonymousLikes/anonymousLikeData');
const likeBtnContainer = document.querySelector('.js-likeBtn');
const likeBtn = likeBtnContainer.querySelector('button');

function setLikes(integer){
    docRef.set({
        likes: integer
    }).then(function() {
        console.log('Saved likes Count!');
    }).catch(function(error){
        console.log('error: ', error);
    });
}

function getLikes(){
    docRef.get().then(function(doc) {
        if (doc.exists) {
            const likes = doc.data();
            console.log('getLikes => returned value is', likes);
            return likes;
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function addLike(){
    let currentLikes = getLikes();
    setLikes(++currentLikes);
}

function disableBtn(btnName){
    btnName.disabled = true;
}

function handleLikeClick(){
    disableBtn(likeBtn);
    addLike();
    const currentLikes = getLikes();
    likeBtn.innerText = `THANKS!💖${currentLikes}`;
}

function paintLikes(integer){
    likeBtn.innerText = `Click if you like this website! 💕${integer}`;
}

function init(){
    setLikes(12);
    const currentLikes = getLikes();
    console.log('init>currentlikes>'+ currentLikes);
    paintLikes(currentLikes);
    likeBtn.addEventListener('click', handleLikeClick);
}

init();


// const TRUE_OR_FALSE_LS_KEY = 'isLike';
// const TRUE_LS_VALUE = 'true';

// function disableLikeBtn(){
//     // getItem= localStorage.getItem(LIKE_COUNT_LS_KEY); //first get db current likes
//     // localStorage.removeItem(LIKE_COUNT_LS_KEY);     // reset db likes to likes+1
//     // localStorage.setItem(LIKE_COUNT_LS_KEY, getItem + '+1');  //---여기까지 dummy 

//     likeBtn.disabled = true;
//     // likeBtn.innerText = `THANKS!💖${localStorage.getItem(LIKE_COUNT_LS_KEY)}`; //get db current likes
// }

// function addLike(){    
//     disableLikeBtn();
//     localStorage.setItem(TRUE_OR_FALSE_LS_KEY, TRUE_LS_VALUE);
// }

// function paintLikeCount(){
//     const isLike = localStorage.getItem(TRUE_OR_FALSE_LS_KEY);
//     if (isLike === TRUE_LS_VALUE){
//         disableLikeBtn();
//     } else {
//         docRef.set({
//             likes: currentLikes
//         }).then(function() {
//             console.log('saved!');
//         }).catch(function(error){
//             console.log('error: ', error);
//         });
//         // likeBtn.innerText = `Click if you like this website! 💕${localStorage.getItem(LIKE_COUNT_LS_KEY)}`; //get db current likes
//     }
// }

// function init(){
//     paintLikeCount();
// }

// init();
