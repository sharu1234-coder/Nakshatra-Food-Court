// ✅ Auto Year (Footer)
const year = new Date().getFullYear();
document.getElementById("year").innerHTML =
  `© ${year} Nakshatra Food Court. All rights reserved.`;


// ✅ Order Button (Swiggy / Zomato)
function orderNow() {
  window.open("https://www.swiggy.com", "_blank");
}


// ✅ Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ✅ Scroll Animation (fade-in)
const faders = document.querySelectorAll(".fade");

function revealOnScroll() {
  faders.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 80) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Run once on load
revealOnScroll();


// ✅ Button Click Animation (small UX touch)
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});


// ✅ Sticky Navbar (optional premium feel)
/*const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.position = "sticky";
    nav.style.top = "0";
    nav.style.background = "#021010";
    nav.style.zIndex = "1000";
  }
});*/


// ✅ Scroll to Top Button (auto create)
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});