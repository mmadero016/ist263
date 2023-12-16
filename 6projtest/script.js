let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Auto-advance slides every 5 seconds
setInterval(function () {
    plusSlides(1);
}, 5000);

// script.js

document.addEventListener("DOMContentLoaded", function () {
    var joinUsLink = document.getElementById("join-us-link");
    var subscriptionBox = document.getElementById("subscription-box");

    joinUsLink.addEventListener("click", function (event) {
        event.preventDefault();
        subscriptionBox.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling when the popup is open
    });

    var closeBtn = document.getElementById("close-btn");
    closeBtn.addEventListener("click", function () {
        subscriptionBox.style.display = "none";
        document.body.style.overflow = ""; // Allow scrolling when the popup is closed
    });

    var form = document.getElementById("subscription-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from submitting

        // Get the email input value
        var emailInput = document.getElementById("email");
        var email = emailInput.value;

        // You can add additional validation here

        // Display a confirmation message
        alert("Thank you for subscribing! Check your email for confirmation.");
        
        // Optionally, hide the subscription box after submission
        subscriptionBox.style.display = "none";
        document.body.style.overflow = ""; // Allow scrolling when the popup is closed
    });
});
