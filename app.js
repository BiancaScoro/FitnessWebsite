let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    openHam.style.display = open;
    closeHam.style.display = close;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

const membership = document.querySelector(".membership-tabs");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

membership.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});