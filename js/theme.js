const toggleButton = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  // Function to update theme
  function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    icon.src = isDark ? "images/sun-solid.svg" : "images/moon-solid.svg";
    localStorage.setItem("darkMode", isDark); // Save choice
  }

  // Load saved theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("darkMode") === "true";
    setTheme(saved);
  });

  // Toggle on click
  toggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setTheme(!isDark);
  });