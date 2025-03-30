const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

// Toggle sidebar's collapsed state
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

menuToggler.addEventListener("click", () => {
  toggleMenu();
});
