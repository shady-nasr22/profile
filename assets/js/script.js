const track = document.querySelector(".certificate-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const certificates = document.querySelectorAll(".certificate");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function scrollTrack(direction) {
    if (!track) return;

    track.scrollBy({
        left: direction * 460,
        behavior: "smooth"
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => scrollTrack(1));
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => scrollTrack(-1));
}

certificates.forEach((img) => {
    img.addEventListener("click", () => {
        if (lightbox && lightboxImage) {
            lightbox.style.display = "flex";
            lightboxImage.src = img.src;
        }
    });
});

if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener("click", () => {
        if (lightbox) lightbox.style.display = "none";
    });
}

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

function sendWhatsApp() {

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || phone === "" || message === "") {

        alert("Please fill in all fields.");

        return;

    }

    const btn = document.getElementById("sendBtn");

    btn.classList.add("loading");

    setTimeout(() => {

        const text =

            `👤 Name: ${name}%0A`

            +

            `📞 Phone: ${phone}%0A%0A`

            +

            `💬 Message:%0A${message}`;

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



document.addEventListener("selectstart", function (e) {
    e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            console.log("Menu toggled");
        });

        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
});
