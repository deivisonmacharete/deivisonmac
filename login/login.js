//LOGICA BOTÃO VISUALIZAR SENHA
let btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});


//LOGICA PARA EFETUAR LOGIN
function entrar(){
  let email = document.querySelector('#email')
  let emailLabel = document.querySelector('#emailLabel')
 
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
 
  let msgError = document.querySelector('#msgError')
 
  //LOGICA PARA CHAMAR A LISTA DE USER
  let listaUser = []
    
  //LOGICA PARA VALIDAÇÃO DE USER
  let userValid = {
  nome: '',
  email: '',
  telefone:'',
  senha:''
  }
 
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
 
  listaUser.forEach((item) =>{
         if(email.value == item.emailCad && senha.value == item.senhaCad){
               
                userValid = {
                       nome: item.nomeCad,
                       email: item.emailCad,
                       telefone: item.telefoneCad,
                       senha: item.senhaCad
                }
         }
  })
 
  if(email.value == userValid.email && senha.value == userValid.senha){
         window.location.href = './../dashboard-crm/home.html'
  } else {
         emailLabel.setAttribute('style', 'color: red')
         email.setAttribute('style', 'border-color: red')
         senhaLabel.setAttribute('style', 'color: red')
         senha.setAttribute('style', 'border-color: red')
         msgError.setAttribute('style', 'display: block')
         msgError.innerHTML = 'Usuário ou senha incorretos'
         email.focus()//VOLTA PARA O CAMPO EMAIL CASO DE ERRO NA AUTENTICAÇÃO
  }
 

}

//LOGICA PARA EFETUAR LOGIN LUCAS
/*function entrar() {
  let email = document.querySelector("#email");

  let senha = document.querySelector("#senha");


  fetch(`./../usuarios.json`)
    .then((res) => res.json())
    .then((dados) => {
      usuarios(dados);
    });
  function usuarios(dados) {
    let entrou = false;

    dados.forEach((dados) => {
      const emailUsuario = dados.email;
      const senhaUsuario = dados.senha;
      if (email.value === emailUsuario && senha.value === senhaUsuario) {
        entrou = true;
        window.location.href = "./../dashboard-crm/home.html";
      } else if (entrou === false) {
        window.alert("Email ou senha incorretos");
      }
    });
  
  }
*/
