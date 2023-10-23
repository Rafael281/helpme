function toggleDropdown() {
  let dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show-dropdown");
}


const botaoTopo = document.getElementById("botaoTopo");
let isDragging = false;
let offsetX, offsetY;

botaoTopo.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = botaoTopo.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const left = e.clientX - offsetX;
        const top = e.clientY - offsetY;

        // Verifica os limites da tela
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
    const rect = botaoTopo.getBoundingClientRect();
    offsetX = e.touches[0].clientX - rect.left;
    offsetY = e.touches[0].clientY - rect.top;
});

document.addEventListener("touchmove", (e) => {
    if (isDragging) {
        const left = e.touches[0].clientX - offsetX;
        const top = e.touches[0].clientY - offsetY;

        // Verifica os limites da tela
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
