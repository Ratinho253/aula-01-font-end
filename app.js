'use strict'

const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const calcular = document.getElementById('calcular')
const situação = document.getElementById('situação')
const formulario = document.getElementById('formulario')

function somar() {
    situação.value = (Number(nota1.value) + Number(nota2.value)) / 2

    if (nota1.value > 10 || nota2.value > 10 || nota1.value < 0 || nota2.value < 0) {
        situação.value = 'digite uma nota válida'
        formulario.classList.remove('sombra-vermelha')
        formulario.classList.remove('sombra-verde')
        formulario.classList.add('sombra-laranja')
    } else {
        if (situação.value < 5) {
            situação.value = 'reprovado'
            formulario.classList.remove('sombra-laranja')
            formulario.classList.remove('sombra-verde')
            formulario.classList.add('sombra-vermelha')


        } else {
            situação.value = 'aprovado'
            formulario.classList.remove('sombra-vermelha')
            formulario.classList.remove('sombra-laranja')
            formulario.classList.add('sombra-verde')
        }

    }

}

calcular.addEventListener('click', somar)
