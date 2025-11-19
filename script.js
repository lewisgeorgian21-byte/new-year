// ------------------------------
// Image Modal Functionality
// ------------------------------

// Get modal elements
const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("modal-close");

// Clickable images
const images = document.querySelectorAll(".section img");

// Open modal with smooth effect
images.forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "block";
        requestAnimationFrame(() => {
            modal.classList.add("show");
        });
    });
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
    closeModal();
});

// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// ------------------------------
// Smooth Close Function
// ------------------------------
function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 250); // smooth fade-out timing
}
