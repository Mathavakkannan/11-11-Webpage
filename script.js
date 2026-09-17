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

// =========================
// CONTACT FORM VALIDATION
// =========================

const contactForm =
    document.querySelector("#contactForm");

if (contactForm) {

   contactForm.addEventListener("submit", function (event) {

    console.log("Contact form submitted.");


        // Get form values

        const name =
            document.querySelector("#name").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const phone =
            document.querySelector("#phone").value.trim();

        const message =
            document.querySelector("#message").value.trim();


        // Check name

        if (name === "") {

            alert("Please enter your name.");

            return;

        }


        // Check email

        if (!email.includes("@")) {

            alert("Please enter a valid email address.");

            return;

        }


        // Check phone

        if (phone.length < 10) {

            alert("Please enter a valid phone number.");

            return;

        }


        // Check message

        if (message === "") {

            alert("Please enter your message.");

            return;

        }


        // Everything is valid

        alert(
            "Thank you, " +
            name +
            "! Your message is ready to be sent."
        );


        console.log("Name:", name);

        console.log("Email:", email);

        console.log("Phone:", phone);

        console.log("Message:", message);


        // Clear form

        contactForm.reset();

    });

}
