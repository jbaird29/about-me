let active = 0;

const changePic = (shift) => {
    const pictures = document.getElementsByClassName("slideshow-pic");
    const captions = document.getElementsByClassName("slideshow-caption");
    const len = pictures.length;
    // remove the old picture
    pictures[active].style.animation = shift > 0 ? "slideouttoleft 0.5s" : "slideouttoright 0.5s";
    pictures[active].classList.remove("active");
    pictures[active].classList.add("inactive");
    captions[active].classList.remove("slideshow-caption-active");
    // add the new picture
    active = (((active + shift) % len) + len) % len; // modulo, for negative values
    pictures[active].style.animation = shift > 0 ? "slideinfromright 0.5s" : "slideinfromleft 0.5s";
    pictures[active].classList.add("active");
    pictures[active].classList.remove("inactive");
    captions[active].classList.add("slideshow-caption-active");
};

// used: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
const intervalID = setInterval(() => changePic(1), 3000);

document.getElementById("next-btn").addEventListener("click", () => {
    changePic(1);
    clearInterval(intervalID);
});
document.getElementById("previous-btn").addEventListener("click", () => {
    changePic(-1);
    clearInterval(intervalID);
});
