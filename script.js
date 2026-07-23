const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide() {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
}

setInterval(changeSlide, 3000);

let cart = 0;

const buttons = document.querySelectorAll(".cart-btn");

const cartCount = document.getElementById("cart-count");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.innerText = cart;

        button.innerText = "Added ✓";

        button.disabled = true;

    });

});