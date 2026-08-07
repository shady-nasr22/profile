/* ==================================================
   CERTIFICATE SLIDER
================================================== */

const track = document.querySelector(".certificate-track");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");


if (track && nextButton && prevButton) {

    nextButton.addEventListener("click", () => {

        track.scrollBy({
            left: 460,
            behavior: "smooth"
        });

    });


    prevButton.addEventListener("click", () => {

        track.scrollBy({
            left: -460,
            behavior: "smooth"
        });

    });

}


/* ==================================================
   CERTIFICATE LIGHTBOX
================================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

const certificates = document.querySelectorAll(".certificate");


if (lightbox && lightboxImage) {

    certificates.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImage.src = img.src;

        });

    });


    const closeLightbox =
        document.querySelector(".close-lightbox");


    if (closeLightbox) {

        closeLightbox.addEventListener("click", () => {

            lightbox.style.display = "none";

        });

    }


    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


/* ==================================================
   WHATSAPP CONTACT
================================================== */

function sendWhatsApp() {

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        phone === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }


    const btn =
        document.getElementById("sendBtn");


    btn.classList.add("loading");


    setTimeout(() => {

        const text =

            `👤 Name: ${encodeURIComponent(name)}%0A` +

            `📞 Phone: ${encodeURIComponent(phone)}%0A%0A` +

            `💬 Message:%0A${encodeURIComponent(message)}`;


        window.open(

            `https://wa.me/201025130799?text=${text}`,

            "_blank"

        );


        btn.classList.remove("loading");


        document.getElementById("name").value = "";

        document.getElementById("phone").value = "";

        document.getElementById("message").value = "";


    }, 1000);

}


/* ==================================================
   DISABLE TEXT SELECTION / RIGHT CLICK
================================================== */

document.addEventListener("selectstart", function (e) {

    e.preventDefault();

});


document.addEventListener("contextmenu", function (e) {

    e.preventDefault();

});


/* ==================================================
   MOBILE NAVBAR
================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {


    /* ==========================
       OPEN / CLOSE MENU
    ========================== */

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("active");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        /* Change hamburger icon */

        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            if (isOpen) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });


    /* ==========================
       CLOSE MENU AFTER CLICKING LINK
    ========================== */

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });

}
