// =========================
// WEBSITE LOADED
// =========================

window.addEventListener("load", function () {

    console.log(
        "11:11 Automotive website loaded successfully."
    );

});


// =========================
// NAVIGATION
// =========================

const navLinks =
    document.querySelectorAll(".nav-links a");

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

    heroButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Welcome to 11:11 Automotive Services!"
            );

            window.location.href = "#services";

        }
    );

}


// =========================
// SERVICE BUTTON
// =========================

const serviceButton =
    document.querySelector(".service-btn");

if (serviceButton) {

    serviceButton.addEventListener(
        "click",
        function () {

            alert(
                "Thank you for choosing 11:11 Automotive!"
            );

            console.log(
                "For Services button clicked."
            );

        }
    );

}


// =========================
// ADDRESS BUTTON
// =========================

const addressButton =
    document.querySelector(".address-btn");

if (addressButton) {

    addressButton.addEventListener(
        "click",
        function () {

            console.log(
                "Address button clicked."
            );

        }
    );

}


// =========================
// SERVICE CARDS
// =========================

const serviceCards =
    document.querySelectorAll(".service");

serviceCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const serviceName =
                card.querySelector("h2").textContent;

            alert(
                "You selected: " + serviceName
            );

        }
    );

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "11:11 Automotive JavaScript is working!"
);


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.querySelector("#contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            // Stop normal form submission

            event.preventDefault();


            // =========================
            // GET FORM VALUES
            // =========================

            const name =
                document
                    .querySelector("#name")
                    .value
                    .trim();


            const email =
                document
                    .querySelector("#email")
                    .value
                    .trim();


            const phone =
                document
                    .querySelector("#phone")
                    .value
                    .trim();


            const message =
                document
                    .querySelector("#message")
                    .value
                    .trim();


            // =========================
            // VALIDATION
            // =========================

            if (name === "") {

                alert(
                    "Please enter your name."
                );

                return;

            }


            if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            if (phone.length < 10) {

                alert(
                    "Please enter a valid phone number."
                );

                return;

            }


            if (message === "") {

                alert(
                    "Please enter your message."
                );

                return;

            }


            // =========================
            // SEND TO FORMSPREE
            // =========================

            try {

                const response =
                    await fetch(
                        "https://formspree.io/f/xdekogrl",
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "Accept":
                                    "application/json"

                            },

                            body: JSON.stringify({

                                name: name,

                                email: email,

                                phone: phone,

                                message: message

                            })

                        }
                    );


                // =========================
                // SUCCESS
                // =========================

                if (response.ok) {

                    alert(
                        "Thank you, " +
                        name +
                        "! Your message has been sent successfully."
                    );

                    contactForm.reset();

                }


                // =========================
                // FORMSPREE ERROR
                // =========================

                else {

                    let result = null;

                    try {

                        result =
                            await response.json();

                    } catch (error) {

                        console.log(
                            "Could not read error response."
                        );

                    }


                    console.error(
                        "Formspree error:",
                        result
                    );


                    alert(
                        "Sorry, your message could not be sent. Please try again."
                    );

                }

            }


            // =========================
            // CONNECTION ERROR
            // =========================

            catch (error) {

                console.error(
                    "Form error:",
                    error
                );

                alert(
                    "Something went wrong. Please check your internet connection and try again."
                );

            }

        }
    );

}
