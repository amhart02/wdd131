const menuButton = document.querySelector(".menu-button");
const picture = document.querySelector(".gallery");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 700) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

function viewerTemplate (pic, alt) {
    return `
    <div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}" class="viewer-picture">
    </div>`;
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
        viewer.remove();
}

function viewHandler(event) {
    const clickedElement = event.target;
    const sourceInfo = clickedElement.src.split("-");
    const newImageSource = sourceInfo[0] + "-full.jpeg";
    const newImageAlt = clickedElement.alt;
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImageSource, newImageAlt));
    const viewerButton = document.querySelector(".close-viewer");
    viewerButton.addEventListener("click", closeViewer);
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
picture.addEventListener("click", viewHandler);
handleResize();
