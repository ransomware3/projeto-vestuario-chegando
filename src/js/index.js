const btnEnviar = document.getElementById('btn')
const inputEmail = document.getElementById('email')
const alterarDisplay = document.querySelectorAll('.alterar-display')

alterarDisplay.forEach((item, indice) => {
    btnEnviar.addEventListener('click', () => {
        item.style.display = 'block'
    })
})