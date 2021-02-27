const navbar = document.getElementById("navbar");
const toggleBtn = document.getElementById("toggle");
const linkContainer = document.querySelector(".link-container");
const links = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-link");

window.addEventListener("scroll", (e) => {
    e.preventDefault();

    const offsetY = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (offsetY > navHeight) {
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    }
});

window.onresize = () => {
    if (window.innerWidth > 900) {
        linkContainer.style.height = "auto";
    }
}

toggleBtn.addEventListener('click', () => {
    const linksHeight = links.getBoundingClientRect().height;
    const linkContainerHeight = linkContainer.getBoundingClientRect().height;
    if (linkContainerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
    }
    else {
        linkContainer.style.height = 0;
    }
});

scrollLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (window.innerWidth < 900) {
            linkContainer.style.height = 0;
        }
    })
})