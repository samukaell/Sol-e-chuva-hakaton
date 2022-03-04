
function htmlClima(){
    clima = `
        <div class="icone"><img src=${climaIcone} alt="Icone Clima"></div>
        <div class="informacao">
            <li>Descrição: ${climaDescricao} </li>
            <li>Temperatura: ${temperatura} </li>
            <li>Temperatura Mínima: ${temperaturaMin}</li>
            <li>Temperatura Máxima: ${temperaturaMax}</li>
            <li>Umidade: ${umidade} </li>
            <li>Nuvens: ${nuvens} </li>
            <li>Velocidade do vento: ${ventoVelocidade} </li>
            <li>Angulação do vento: ${ventoAngulo} </li>
        </div>
    `;
    return clima;
}
function carregarDadosClima(){
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerHTML = htmlClima();
}