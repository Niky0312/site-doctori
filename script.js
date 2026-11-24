
// ===================================
// 1. CAUTARE MEDICI
// ===================================

function searchDoctors() {
    const input = document.getElementById("searchInput");

    if (input && input.value.trim() !== "") {
        localStorage.setItem("doctorSearchTerm", input.value.trim());
        window.location.href = "medici.html";
    }
}

function filterDoctors() {
    const input = document.getElementById("doctorSearch");

    if (!input) return;

    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll("#doctorList tr");

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
    });
}

// Preluăm căutarea de pe pagina principală
const doctorSearchInput = document.getElementById("doctorSearch");

if (doctorSearchInput) {
    const savedSearch = localStorage.getItem("doctorSearchTerm");

    if (savedSearch) {
        doctorSearchInput.value = savedSearch;
        filterDoctors();
        localStorage.removeItem("doctorSearchTerm");
    }
}


// ===================================
// 2. GALERIE FOTO
// ===================================

let currentImage = 0;

function openImage(src) {
    const images = document.querySelectorAll(".gallery img");
    const viewer = document.getElementById("imageViewer");

    currentImage = Array.from(images).findIndex(img => img.src === src);

    if (currentImage !== -1 && viewer) {
        document.getElementById("largeImage").src = images[currentImage].src;
        viewer.style.display = "flex";
    }
}

function changeImage(direction) {
    const images = document.querySelectorAll(".gallery img");

    if (images.length === 0) return;

    currentImage += direction;

    if (currentImage >= images.length) currentImage = 0;
    if (currentImage < 0) currentImage = images.length - 1;

    document.getElementById("largeImage").src = images[currentImage].src;
}

function closeImage() {
    const viewer = document.getElementById("imageViewer");

    if (viewer) {
        viewer.style.display = "none";
    }
}


// ===================================
// 3. FORMULAR CONTACT
// ===================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !phone || !subject || !message) {
            formMessage.textContent = "Completează toate câmpurile!";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.textContent = "Introdu o adresă de e-mail validă!";
            return;
        }

        if (!/^[0-9 +()-]{7,20}$/.test(phone)) {
            formMessage.textContent = "Introdu un număr de telefon valid!";
            return;
        }

        formMessage.textContent = "Mesajul a fost validat cu succes!";
        contactForm.reset();
    });
}


// ===================================
// 4. MOD LUMINOS / INTUNECAT
// ===================================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Mod luminos";
    }

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️ Mod luminos";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Mod întunecat";
        }
    });
}


// ===================================
// 5. BUTON INAPOI SUS
// ===================================


const backToTop = document.getElementById("backToTop");

if (backToTop) {
    backToTop.style.display = "block";

    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// ===================================
// 6. BUTON AJUTOR
// ===================================
const helpButton = document.getElementById("helpButton");
const helpBox = document.getElementById("helpBox");

if (helpButton && helpBox) {
    helpButton.addEventListener("click", function() {
        helpBox.style.display =
            helpBox.style.display === "block" ? "none" : "block";
    });
}

function closeHelp() {
    const box = document.getElementById("helpBox");
    if (box) {
        box.style.display = "none";
    }
}