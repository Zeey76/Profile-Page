const toggleTheme = () => {
  const body = document.documentElement;
  const icon = document.querySelector("#themeToggle i");

  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    icon.className = "fas fa-moon";
    localStorage.setItem("theme", "light"); // Save theme as 'light'
  } else {
    body.setAttribute("data-theme", "dark");
    icon.className = "fas fa-sun";
    localStorage.setItem("theme", "dark"); // Save theme as 'dark'
  }
};

// Initialize theme icon based on system preference or saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  // Apply saved theme from local storage
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector("#themeToggle i").className = "fas fa-sun";
  }
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // Apply system preference if no saved theme exists
  document.documentElement.setAttribute("data-theme", "dark");
  document.querySelector("#themeToggle i").className = "fas fa-sun";
}

// UTC Time Update
const updateUTCTime = () => {
  const timeElement = document.getElementById("utcTime");
  const now = new Date();
  const utcTimeString = now.toUTCString();
  timeElement.innerHTML = `<i class="fas fa-clock"></i> ${utcTimeString}`;
};

updateUTCTime();
setInterval(updateUTCTime, 1000);
