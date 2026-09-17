// =========================
// WEBSITE LOADED
// =========================

window.addEventListener("load", function () {

    console.log("11:11 Automotive website loaded successfully.");

});


// =========================
// NAVIGATION
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Navigation clicked:",
            link.textContent
        );

    });

});


// =========================
// HERO BUTTON
// =========================

const heroButton =
    document.querySelector(".hero-btn");

if (heroButton) {

    heroButton.addEventListener("click", function (event) {

        event.preventDefault();

        alert("Welcome to 11:11 Automotive Services!");

        window.location.href = "#services";

    });

}


// =========================
// SERVICE BUTTON
// =========================

const serviceButton =
    document.querySelector(".service-btn");

if (serviceButton) {

    serviceButton.addEventListener("click", function () {

        alert(
            "Thank you for choosing 11:11 Automotive!"
        );

        console.log(
            "For Services button clicked."
        );

    });

}


// =========================
// ADDRESS BUTTON
// =========================

const addressButton =
    document.querySelector(".address-btn");

if (addressButton) {

    addressButton.addEventListener("click", function () {

        console.log(
            "Address button clicked."
        );

    });

}


// =========================
// SERVICE CARDS
// =========================

const serviceCards =
    document.querySelectorAll(".service");

serviceCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const serviceName =
            card.querySelector("h2").textContent;

        alert(
            "You selected: " + serviceName
        );

    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "11:11 Automotive JavaScript is working!"
);
