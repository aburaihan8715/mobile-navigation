// variables
const toggleIcon = document.getElementById("toggle_icon");
const sideMenu = document.getElementById("side_menu");

// function for open and close side menu
toggleIcon.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});
