let active = 0;

const changePic = (shift) => {
    const pictures = document.getElementsByClassName("slideshow-pic");
    const captions = document.getElementsByClassName("slideshow-caption");
    const len = pictures.length;
    pictures[active].classList.remove("slideshow-pic-active");
    captions[active].classList.remove("slideshow-caption-active");
    active = (((active + shift) % len) + len) % len; // modulo, for negative values
    pictures[active].classList.add("slideshow-pic-active");
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
