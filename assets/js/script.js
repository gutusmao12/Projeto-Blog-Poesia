let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let comentario = document.querySelector('#comentario')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'white'
    }
}

function validaEmail() {

    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || (email.value.indexOf('.') == -1)) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'white'
    }
}

function validaComentario() {

    let txtComentario = document.querySelector('#txtComentario')
    if (comentario.value.length > 300) {
        txtComentario.innerHTML = 'Número de caracteres excedido'
        txtComentario.style.color = 'red'
    } else {
        txtComentario.innerHTML = 'Você ainda tem ' + (300 - comentario.value.length) + 'caracteres'
        txtComentario.style.color = 'white'
    }
}