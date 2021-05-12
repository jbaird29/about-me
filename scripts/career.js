const previewBtn = document.getElementById("view-pdf-btn");
let shown = false;

previewBtn.addEventListener("click", () => {
    const iframe = document.getElementById("pdf-viewer");
    if (!shown) {
        iframe.classList.add("pdf-viewer-active");
        previewBtn.innerText = "X Close";
        shown = true;
    } else {
        iframe.classList.remove("pdf-viewer-active");
        previewBtn.innerText = "Preview";
        shown = false;
    }
});
