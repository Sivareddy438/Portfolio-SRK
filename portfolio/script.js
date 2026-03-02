/* ======================================
   STEP 1: THEME TOGGLE (DARK / LIGHT)
   ====================================== */

// Get HTML root element
const html = document.documentElement;

// Get theme toggle button and icon
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// 1️⃣ Load saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
} else {
  // Default theme (dark)
  html.setAttribute("data-theme", "dark");
  updateThemeIcon("dark");
}

// 2️⃣ Change theme on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

// 3️⃣ Function to change theme icon
function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIcon.src = "dark.jpg";
  } else {
    themeIcon.src = "light.jpg";
  }
}

/* ======================================
   SIDEBAR TOGGLE WITH OVERLAY
   ====================================== */

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleSidebar() {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
}
/* READ MORE FIX */

const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const moreContent = btn.previousElementSibling;

    if (!moreContent) return;

    moreContent.classList.toggle("open");

    btn.textContent = moreContent.classList.contains("open")
      ? "Read less"
      : "Read more";
  });
});

// TYPING JOB ROLES
new Typed("#typed-role", {
  strings: [
    "Data Analyst",
    "Power BI & SQL Developer",
    "Business Intelligence Enthusiast",
    "Turning Data into Insights",
    "Associate Software Engineer"
  ],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1200,
  loop: true
});

document.querySelectorAll(".sidebar-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");
  });
});

