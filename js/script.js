const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".itensSubmenu");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".CollapseSidebar");
const sidebarExpand = document.querySelector(".sidebarEspandido");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("submenuShow");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("submenuShow");
      }
    });
  });
});

if (window.innerWidth < 999999) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}