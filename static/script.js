// CONTACT FORM (Enhanced UX)
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const responseEl = document.getElementById("response");
    responseEl.innerText = "Sending...";
    responseEl.style.color = "#00f7ff";

    const data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    try {
        const res = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        responseEl.innerText = result.message;
        responseEl.style.color = "#00ffae";

        // Clear form after success
        document.getElementById("contactForm").reset();

    } catch (error) {
        responseEl.innerText = "Error sending message. Try again!";
        responseEl.style.color = "#ff4d6d";
    }
});


// SCROLL REVEAL (Futuristic Smooth Animation)
const sections = document.querySelectorAll("section");

const revealSections = () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (top < trigger) {
            section.classList.add("active");
        }
    });
};

// Run on load + scroll
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// OPTIONAL: Smooth Fade-in on Page Load
document.body.style.opacity = 0;
window.addEventListener("load", () => {
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = 1;
});


// OPTIONAL: Button Glow Effect on Click
const button = document.querySelector("button");
button.addEventListener("click", () => {
    button.style.boxShadow = "0 0 25px #00f7ff, 0 0 50px #ff00ff";
    setTimeout(() => {
        button.style.boxShadow = "";
    }, 300);
});
