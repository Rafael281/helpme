
const mostrarMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Verificar se as variáveis existem
    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            // Adicionamos a classe show-menu ao elemento div com a classe menu
            nav.classList.toggle('mostrarMenu')
            // Alterar o ícone
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
mostrarMenu('header-toggle', 'navbar')

const linkCor = document.querySelectorAll('.menuLink')

function corLink() {
    linkCor.forEach(l => l.classList.remove('ativo'))
    this.classList.add('ativo')
}

linkCor.forEach(l => l.addEventListener('click', corLink))
