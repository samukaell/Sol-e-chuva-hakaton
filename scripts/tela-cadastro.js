const tela = document.querySelector(".tela-cadastro");

tela.querySelector("form").addEventListener("submit", event =>{
    event.preventDefault();
    desabilitarTelaCadastro();
    
    //AQUI!
    // receberClimaInput();
    informacaoClima();
    htmlClima();
    carregarDadosClima();
});

function desabilitarTelaCadastro(){
    const tela = document.querySelector(".tela-cadastro");
    tela.classList.add("hidden");
}