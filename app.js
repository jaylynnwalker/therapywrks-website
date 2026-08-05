const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  hamburgerBtn.classList.toggle("active", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const willOpen = !item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("open");
      faqItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
    }
  });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = contactForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
  formMessage.textContent = "";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" }
    });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error("Submission failed");
    formMessage.textContent = "Thank you. Your inquiry has been submitted.";
    contactForm.reset();
  } catch (error) {
    formMessage.textContent = "We couldn't submit your inquiry. Please try again shortly.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Inquiry";
  }
});
