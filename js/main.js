/*=============== SHOW MENU ===============*/
const toggle = document.getElementById("toggle");
const links = document.getElementById("links");
const close = document.getElementById("close");
toggle.addEventListener("click", () => links.classList.add("active"));
close.addEventListener("click", () => links.classList.remove("active"));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector("header");
window.addEventListener("scroll", chngBg);
function chngBg() {
  if (this.scrollY >= 50) header.classList.add("scroll");
  else header.classList.remove("scroll");
}

/*=============== FEATURES TABS ===============*/
const btns = document.querySelectorAll(".features .content .filter li");
const tabs = document.querySelectorAll(".features .content .tab");

btns.forEach((btn, idx) =>
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    tabs.forEach((tab) => tab.classList.add("hidden"));
    tabs[idx].classList.remove("hidden");
  })
);
/*=============== FAQs SHOW/HIDE ===============*/
const faqs = document.querySelectorAll(".faq .content ul li");
const toggles = document.querySelectorAll(
  ".faq .content ul li .qst-container .toggle"
);

toggles.forEach((toggle, i) =>
  toggle.addEventListener("click", () => {
    faqs.forEach((toggle, j) => {
      if (i != j) toggle.classList.remove("active");
    });
    faqs[i].classList.toggle("active");
  })
);

// ==== SCROLL REVEAL ANIMATION  =====
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
});
sr.reveal(".home .image, .sec-title, .sec-desc, .download .card");
sr.reveal(".home  .text", { delay: 400 });
sr.reveal(".features", { origin: "left", interval: 300});
sr.reveal(".faq ul, .contact span, .contact form ", { origin: "right" });