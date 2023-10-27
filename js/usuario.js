function toggleDropdown() {
  let dropdown = document.getElementById("users");
  dropdown.classList.toggle("userShow");
}



const botaoTopo = document.getElementById("botaoTopo");
let isDragging = false;
let initialX, initialY;

botaoTopo.addEventListener("mousedown", (e) => {
    isDragging = true;
    initialX = e.clientX - botaoTopo.getBoundingClientRect().left;
    initialY = e.clientY - botaoTopo.getBoundingClientRect().top;
    e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const left = e.clientX - initialX;
        const top = e.clientY - initialY;

        const maxWidth = window.innerWidth - botaoTopo.offsetWidth;
        const maxHeight = window.innerHeight - botaoTopo.offsetHeight;

        botaoTopo.style.left = Math.min(Math.max(0, left), maxWidth) + "px";
        botaoTopo.style.top = Math.min(Math.max(0, top), maxHeight) + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

botaoTopo.addEventListener("touchstart", (e) => {
    isDragging = true;
    initialX = e.touches[0].clientX - botaoTopo.getBoundingClientRect().left;
    initialY = e.touches[0].clientY - botaoTopo.getBoundingClientRect().top;
    e.preventDefault();
});

document.addEventListener("touchmove", (e) => {
    if (isDragging) {
        const left = e.touches[0].clientX - initialX;
        const top = e.touches[0].clientY - initialY;

        const maxWidth = window.innerWidth - botaoTopo.offsetWidth;
        const maxHeight = window.innerHeight - botaoTopo.offsetHeight;

        botaoTopo.style.left = Math.min(Math.max(0, left), maxWidth) + "px";
        botaoTopo.style.top = Math.min(Math.max(0, top), maxHeight) + "px";
    }
});

document.addEventListener("touchend", () => {
    isDragging = false;
});

botaoTopo.addEventListener("click", () => {
    voltarAoTopo();
});

window.addEventListener("scroll", () => {
    mostrarBotaoTopo();
});

function mostrarBotaoTopo() {
    botaoTopo.style.display = "block";
}

function voltarAoTopo() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
