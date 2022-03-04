const tela = document.querySelector(".tela-cadastro");

tela.querySelector("form").addEventListener("submit", event =>{
    console.log("Preechimento do cep aceito!");  
    event.preventDefault();
    desabilitarTelaCadastro();
});

function desabilitarTelaCadastro(){
    const tela = document.querySelector(".tela-cadastro");
    tela.classList.add("hidden");
}