const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const map = document.querySelector("#map");
const body = document.body;
const menuli = document.querySelector("#menuli");
hamb.addEventListener("click", hambHandler);
menuli.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    map.classList.toggle("open");
    body.classList.toggle("noscroll");
    menuli.classList.toggle("push");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);


}