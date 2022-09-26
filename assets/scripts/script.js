// var nome = "Gabriel"; //variável de escopo global
// let nome = "Gabriel"; //variável de escopo local, pode alterar o valor
// const nome = "Gabriel"; //variável de escopo local, não pode alterar o valor

// let nome = "Gabriel";

// // const container = document.getElementsByClassName("conteudo");

// const container = document.querySelector(".container");

// function aparecerNome() {
//   // let data = new Date();
//   // alert(data);

//   console.log(container);

//   container.style.backgroundColor = "red";
//   container.innerHTML = "<h1>Texto trocado</h1>";
// }

/*
Maneiras de buscar algo no document:

por tag: getElementByTagName()
por id : getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome inválido'
    txtNome.style.color = 'red'
    nomeOk = false
  }
  else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')

  //se o campo email não tiver @ ele vai retornar o que esta dentro
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    emailOk = false
  }
  else {
    txtEmail.innerHTML = "E-mail válido"
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')

  if(assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
    assuntoOk = false
  }
  else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!')
  }
  else {
    alert('Preencha o formulário corretamento antes de enviar...')
  }
}

function mapaZoom() {
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal() {
  mapa.style.width = '450px'
  mapa.style.height = '250px'
}