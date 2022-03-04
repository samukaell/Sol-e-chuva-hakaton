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
        })
        .catch(()=>{
            alert("Localização inválida")
        });  
}

function receberClima(){
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
    climaIcone = `https://openweathermap.org/img/wn/${dadosOpenweather.weather.icon}.png`;
    climaDescricao = dadosOpenweather.weather.description;
    ventoVelocidade = `${dadosOpenweather.wind.speed} m/s`;
    ventoAngulo = `${dadosOpenweather.wind.deg}°`;
    nuvens = `${dadosOpenweather.clouds.all}%`;
    temperatura = `${dadosOpenweather.main.temp}°C`;
    temperaturaMax = `${dadosOpenweather.main.temp_max}°C`;
    temperaturaMin = `${dadosOpenweather.main.temp_min}°C`;
}
