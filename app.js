// HAMBURGER MENU

const hamburgerBtn =
  document.getElementById("hamburgerBtn");

const navMenu =
  document.getElementById("navMenu");

const navLinks =
  document.querySelectorAll(".nav-menu a");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


// CLIENT PORTAL LINK
// Replace this URL later with your actual scheduling platform

const clientPortalBtn =
  document.getElementById("clientPortalBtn");

clientPortalBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Example placeholder
  window.location.href =
    "https://www.simplepractice.com";
});


// CONTACT FORM

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  console.log("New Client Inquiry:", {
    name,
    email
  });

  formMessage.textContent =
    "Thank you. Your inquiry has been submitted.";

  contactForm.reset();
});

// FAQ ACCORDION

const faqQuestions =
  document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const answer =
      question.nextElementSibling;

    const isVisible =
      answer.style.display === "block";

    document
      .querySelectorAll(".faq-answer")
      .forEach((item) => {
        item.style.display = "none";
      });

    if (!isVisible) {
      answer.style.display = "block";
    }

  });

});