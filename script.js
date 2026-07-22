const v3Styles = document.createElement("link");
v3Styles.rel = "stylesheet";
v3Styles.href = "v3.css";
document.head.appendChild(v3Styles);

const mobileStyles = document.createElement("link");
mobileStyles.rel = "stylesheet";
mobileStyles.href = "mobile-focus.css";
document.head.appendChild(mobileStyles);

const stickyCta = document.createElement("a");
stickyCta.href = "#join";
stickyCta.className = "mobile-sticky-cta";
stickyCta.textContent = "Join the Prague waitlist";
document.body.appendChild(stickyCta);

const replaceExactText = (from, to) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    if (node.nodeValue.includes(from)) {
      node.nodeValue = node.nodeValue.replaceAll(from, to);
    }
  });
};

const applyInclusivePositioning = () => {
  document.title = "Offscreen Kids Club | Prague Founding Chapter";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "A parent-present real-world activity club for mums, dads, guardians and kids in Prague. Small offline drops, clear gear, small groups and more first times."
    );
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute(
      "content",
      "Less screen time. More first times. Parent-present offline drops for mums, dads, guardians and kids in Prague."
    );
  }

  replaceExactText(
    "A parent-present activity club for kids and families who want better weekends:",
    "A parent-present activity club for mums, dads, guardians and families who want better weekends:"
  );

  replaceExactText(
    "Started with dads. Open to parents. Built for kids.",
    "Started with dads. Open to mums, parents and guardians. Built for sons, daughters and every kid who needs more real-world confidence."
  );

  replaceExactText(
    "Book one activity when spots are available. No membership needed to test the vibe.",
    "Book one activity when spots are available. Mums, dads and guardians can test the vibe without a subscription."
  );

  replaceExactText(
    "Host an approved skill, earn OKC credits and help shape the first Prague chapter.",
    "Host an approved skill, earn OKC credits and help shape the first Prague chapter. Mums, dads and guardians can host."
  );

  replaceExactText(
    "Football mornings with small-sided games, parents involved, zero pressure.",
    "Football mornings with small-sided games, girls and boys welcome, parents involved, zero pressure."
  );

  replaceExactText(
    "Offscreen Kids Club is designed to feel easy for parents and reliable for kids:",
    "Offscreen Kids Club is designed to feel easy for mums, dads and guardians, and reliable for kids:"
  );

  replaceExactText(
    "Captain Parents host small, approved drops around skills they love.",
    "Captain Parents are mums, dads or guardians who host small, approved drops around skills they love."
  );

  replaceExactText(
    "Can mothers, single parents or divorced parents join?",
    "Can mums, single parents, divorced parents or guardians join?"
  );

  replaceExactText(
    "Yes. The club is open to parents and guardians. The goal is better real-world memories with kids.",
    "Yes. The club is open to mums, dads, single parents, divorced parents and guardians. The goal is better real-world memories with sons and daughters."
  );

  replaceExactText(
    "The host questions are optional",
    "The Captain Parent questions are optional"
  );

  document.querySelectorAll("option").forEach((option) => {
    if (option.textContent.trim() === "I can be a Captain Parent") {
      option.textContent = "I can host a drop as a Captain Parent";
    }
  });

  const messageTextarea = document.querySelector('textarea[name="message"]');
  if (messageTextarea) {
    messageTextarea.placeholder = "Example: I can host music, crafts, beginner rollers, football, cooking, hiking or photography. Max 5 kids. Required gear: helmets + rollers.";
  }
};

const applyDropOnlyLaunchModel = () => {
  const participationSection = document.querySelector(".participation");

  if (participationSection) {
    const eyebrow = participationSection.querySelector(".eyebrow");
    const heading = participationSection.querySelector("h2");
    const cards = participationSection.querySelectorAll(".step");

    if (eyebrow) eyebrow.textContent = "Three ways to take part";
    if (heading) heading.textContent = "Choose a drop, join the founding list, or host a skill.";

    if (cards[0]) {
      cards[0].querySelector("h3").textContent = "Book a Drop";
      cards[0].querySelector("p").textContent = "Choose the activity that fits your child. Each drop shows its exact price, age, capacity, gear and level before you book.";
    }

    if (cards[1]) {
      cards[1].querySelector("h3").textContent = "Join the Founding List";
      cards[1].querySelector("p").textContent = "Joining is free. Get early access to the first Prague drops and decide separately which ones your family wants to book.";
    }

    if (cards[2]) {
      cards[2].querySelector("h3").textContent = "Become a Captain Parent";
      cards[2].querySelector("p").textContent = "Host an approved skill, earn OKC credits and help build the Prague chapter. Mums, dads and guardians can host.";
    }
  }

  const pricingSection = document.querySelector(".membership");

  if (pricingSection) {
    pricingSection.innerHTML = `
      <div class="membership-copy">
        <p class="eyebrow">Simple launch model</p>
        <h2>Choose a drop. Pay only for that drop.</h2>
        <p>
          There is no monthly subscription at launch. Every drop has its own date, price,
          age range, capacity, required gear and cancellation terms. Join the founding
          waitlist for free, then book only the experiences that make sense for your family.
        </p>
      </div>

      <div class="pricing-card">
        <p class="plan">Founding Drop Access</p>
        <h3>From 490 CZK <span>/ family</span></h3>
        <p class="plan-text">The exact price is always shown before booking.</p>
        <ul>
          <li>No subscription or recurring charge</li>
          <li>Pay only for the drops you choose</li>
          <li>Small, age-aware groups</li>
          <li>Parents or guardians remain present</li>
          <li>Gear and level listed upfront</li>
          <li>Premium seasonal drops priced separately</li>
        </ul>
        <a href="#join" class="button primary full">Join the founding waitlist</a>
        <p class="pricing-note">Joining the waitlist is free. You will receive the full drop details before deciding or paying.</p>
      </div>
    `;
  }

  const faqItems = document.querySelectorAll(".faq-grid details");

  faqItems.forEach((item) => {
    const summary = item.querySelector("summary");
    const answer = item.querySelector("p");
    const question = summary?.textContent.trim();

    if (question === "Can I join without becoming a member?") {
      summary.textContent = "Do I need a subscription?";
      answer.textContent = "No. At launch, every drop is booked and paid separately. Join the waitlist for free and choose only the drops your family wants.";
    }

    if (question === "What does Founding Parents include?") {
      summary.textContent = "What does joining the founding waitlist mean?";
      answer.textContent = "It is free and gives you early access to the first Prague drops. You are not charged until you actively choose and book a specific drop.";
    }
  });

  const formNote = document.querySelector("#formNote");
  if (formNote) {
    formNote.textContent = "Joining the waitlist is free. No subscription, no recurring charge, and no payment until you choose a specific drop.";
  }
};

applyInclusivePositioning();
applyDropOnlyLaunchModel();

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

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (note) {
    note.textContent = "Sending your founding waitlist request...";
  }

  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton?.textContent;

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  }

  const formData = new FormData(form);
  const submission = {
    name: formData.get("name"),
    email: formData.get("email"),
    childAge: formData.get("childAge"),
    interest: formData.get("interest"),
    captainMaxCapacity: formData.get("captainMaxCapacity"),
    requiredGear: formData.get("requiredGear"),
    message: formData.get("message"),
    source: "offscreen-kids-club-vercel",
    createdAt: new Date().toISOString()
  };

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error("Formspree submission failed");
    }

    const saved = JSON.parse(localStorage.getItem("offscreenWaitlist") || "[]");
    saved.push(submission);
    localStorage.setItem("offscreenWaitlist", JSON.stringify(saved));

    form.reset();

    if (note) {
      note.textContent = "Done. You are on the free founding waitlist. I’ll send the first Prague drop details before any booking or payment.";
    }

    if (submitButton) {
      submitButton.textContent = "Request sent";
    }
  } catch (error) {
    if (note) {
      note.textContent = "Something went wrong. Please DM Nico or email nicollanas@gmail.com and I’ll add you manually.";
    }

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText || "Join waitlist";
    }
  }
});
