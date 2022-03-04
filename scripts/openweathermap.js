const chaveApi = '15a833c7bf57cfe85fca3e4558e57816'

let dadosOpenweather;

let temperatura;
let temperaturaMin;
let temperaturaMax;

let nuvens;
let ventoVelocidade;
let ventoAngulo;

let climaDescricao;
let climaIcone;
let umidade;

function receberClimaNavegador(){
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitudeGeolocation}&lon=${longitudeGeolocation}&lang=pt_br&units=metric&appid=${chaveApi}`
    console.log(apiUrl);
    axios
        .get(apiUrl)
        .then(resposta => { 
            dadosOpenweather = resposta.data;
            console.log(dadosOpenweather);
            desabilitarTelaCadastro();
            informacaoClima();

        })
        .catch(()=>{
            alert("Localização inválida")
        });  
}

function receberClimaInput(){
    let cidade = document.querySelector('.tela-cadastro input').value
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=${chaveApi}`
    console.log(apiUrl);
    axios
        .get(apiUrl)
        .then(resposta => { 
            dadosOpenweather = resposta.data;
            console.log(dadosOpenweather);
        })
        .catch(()=>{
            alert("Cidade inválida")
        });  
}

function informacaoClima(){
    umidade = `${dadosOpenweather.main.humidity}%`;
    // climaIcone = `https://openweathermap.org/img/wn/${dadosOpenweather.weather.icon}.png`;
    climaIcone = `https://openweathermap.org/img/wn/${dadosOpenweather.weather[0].icon}.png`;
    climaDescricao = dadosOpenweather.weather[0].description;
    ventoVelocidade = `${dadosOpenweather.wind.speed} m/s`;
    ventoAngulo = `${dadosOpenweather.wind.deg}°`;
    nuvens = `${dadosOpenweather.clouds.all}%`;
    temperatura = `${dadosOpenweather.main.temp}°C`;
    temperaturaMax = `${dadosOpenweather.main.temp_max}°C`;
    temperaturaMin = `${dadosOpenweather.main.temp_min}°C`;
    console.log("ICONE ->"+climaIcone);
    console.log("Descrisao ->"+dadosOpenweather.weather[0].description);
    console.log("Velocidade ->"+ventoVelocidade);

    htmlClima(climaIcone,climaDescricao, temperatura,temperaturaMin, temperaturaMax,umidade, ventoVelocidade, nuvens);
    carregarDadosClima();
}



