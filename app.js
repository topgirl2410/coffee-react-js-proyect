const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');


menuOpenButton.addEventListener("click", () => {
    // Toggle the "show-mobile-menu" class on the body element
    document.body.classList.toggle("show-mobile-menu");
})



menuCloseButton.addEventListener("click", () => menuOpenButton.click())  