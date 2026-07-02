const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const form = document.querySelector("#waitlistForm");
const note = document.querySelector("#formNote");

form?.addEventListener("submit", () => {
  const formData = new FormData(form);
  const submission = {
    name: formData.get("name"),
    email: formData.get("email"),
    childAge: formData.get("childAge"),
    interest: formData.get("interest"),
    message: formData.get("message"),
    createdAt: new Date().toISOString()
  };

  const saved = JSON.parse(localStorage.getItem("offscreenWaitlist") || "[]");
  saved.push(submission);
  localStorage.setItem("offscreenWaitlist", JSON.stringify(saved));

  if (note) {
    note.textContent = "Sending your founding invite request...";
  }
});
