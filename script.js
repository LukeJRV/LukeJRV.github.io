// Dark Mode [Toggle_Button & Body Element]
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;
const header = document.querySelector("header");

// Function to [Toggle Dark Mode]
function toggleDarkMode() {
  // Toggle Dark Mode Class [Body/Header]
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");

