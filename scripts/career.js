const previewBtn = document.getElementById("view-pdf-btn");
let shown = false;

previewBtn.addEventListener("click", () => {
    const iframe = document.getElementById("pdf-viewer");
    if (!shown) {
        iframe.classList.add("pdf-viewer-active");
        previewBtn.innerHTML = "X Close";
        shown = true;
    } else {
        iframe.classList.remove("pdf-viewer-active");
        previewBtn.innerHTML = `<span class="iconify" data-icon="ant-design:eye-filled" data-inline="true"></span> Preview`;
        shown = false;
    }
});
