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

    heroButton.addEventListener("click", function () {

        console.log(
            "Explore Services button clicked."
        );

    });

}


// =========================
// SERVICE BUTTON
// =========================

const serviceButton =
    document.querySelector(".service-btn");


if (serviceButton) {

    serviceButton.addEventListener("click", function () {

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
