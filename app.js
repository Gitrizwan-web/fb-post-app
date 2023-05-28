function backgroundPicture() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "none";
    background.style.backgroundColor = "White";
    background.style.color = "Black";
    backgroundPost.style.backgroundImage = "none";
    backgroundPost.style.backgroundColor = "White";
    backgroundPost.style.color = "Black";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function backgroundPicture1() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "url(./image/color1.webp)";
    background.style.color = "White";
    backgroundPost.style.backgroundImage = "url(./image/color1.webp)";
    backgroundPost.style.color = "White";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function backgroundPicture2() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "url(./image/color2.jpg)";
    background.style.color = "White";
    backgroundPost.style.backgroundImage = "url(./image/color2.jpg)";
    backgroundPost.style.color = "White";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function backgroundPicture3() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "url(./image/color3.jpg)";
    background.style.color = "Black";
    backgroundPost.style.backgroundImage = "url(./image/color3.jpg)";
    backgroundPost.style.color = "Black";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function backgroundPicture4() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "url(./image/color4.jpg)";
    background.style.color = "White";
    backgroundPost.style.backgroundImage = "url(./image/color4.jpg)";
    backgroundPost.style.color = "White";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function backgroundPicture5() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "url(./image/color5.jpg)";
    background.style.color = "Black";
    backgroundPost.style.backgroundImage = "url(./image/color5.jpg)";
    backgroundPost.style.color = "Black";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function backgroundPicture6() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "url(./image/color6.webp)";
    background.style.color = "White";
    backgroundPost.style.backgroundImage = "url(./image/color6.webp)";
    backgroundPost.style.color = "White";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function backgroundPicture7() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "url(./image/color7.jpg)";
    background.style.color = "Black";
    backgroundPost.style.backgroundImage = "url(./image/color7.jpg)";
    backgroundPost.style.color = "Black";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function smileBackground() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");
    background.style.backgroundImage = "url(./image/smile.jpg)";
    background.style.color = "Black";
    backgroundPost.style.backgroundImage = "url(./image/smile.jpg)";
    backgroundPost.style.color = "Black";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";

}

function randomColor() {
    var background = document.getElementById("textarea");
    var backgroundPost = document.getElementById("body-post");

    var random = Math.floor(Math.random() * 16777215).toString(10);
    background.style.backgroundColor = "#" + random;
    backgroundPost.innerHTML = "#" + random;
    background.style.color = "Black";
    backgroundPost.style.backgroundColor = "#" + random;
    backgroundPost.style.color = "Black";
    backgroundPost.style.textAlign = "center";
    backgroundPost.style.fontSize = "28px";
}

function likeButton() {
    var like = document.getElementById("like");
    like.style.color = "#1B74e4";
}

function ShareButton() {
    var share = document.getElementById("share");
    share.style.color = "#1B74e4";
}

function redirectToViewpost() {
    var box = document.getElementById('box');
    var box1 = document.getElementById('box1');
    box.style.display = "none";
    box1.style.display = "block";
    var textVal = document.getElementById('textarea');
    var backgroundPost = document.getElementById("body-post");
    backgroundPost.innerHTML = textVal.value
}

function backToEdit() {
    var box = document.getElementById('box');
    var box1 = document.getElementById('box1');
    box.style.display = "block";
    box1.style.display = "none";
    var textVal = document.getElementById('textarea');
    var backgroundPost = document.getElementById("body-post");
    backgroundPost.innerHTML = textVal.value
}