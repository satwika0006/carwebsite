// Alert welcome message on homepage
window.onload = function() {
    alert("Welcome to SpeedX Cars! 🚗🔥");
}

// Add click effect to all cards
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.1)";
        setTimeout(() => card.style.transform = "scale(1.05)", 300);
        alert("You clicked on " + card.querySelector("h3").innerText);
    });
});

// Gallery image zoom on click
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoom");
    });
});