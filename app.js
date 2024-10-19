
// const pokemon1 = document.getElementById('pokemon1');

// const fetchPokemon = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     const pokemeonName = data.name;
//     pokemon1.innerText = pokemeonName;
// }

// fetchPokemon(1);

// const logid = document.getElementById('change');

// const grabJoke = async () => {
//     const url = 'https://official-joke-api.appspot.com/random_joke';
//     const response = await fetch(url);
//     const data = await response.json();
//     const joke = `${data.setup} ${data.punchline}`;
//     logid.innerText = joke;
//     console.log(logid)
// }

// grabJoke();


// 'https://www.balldontlie.io/api/v1/players/1'

// u can grab using data.first_name or data.last_name, or data.team.full_name or data.position or data.weight

// const playerDiv = document.getElementById('player-info');

// const fetchButton = document.getElementById('fetch-player');

// const fetchPlayers = async ()=> {


// const url = 'https://cors-anywhere.herokuapp.com/https://www.balldontlie.io/api/v1/players/1';
// const response = await fetch(url);
// const data = await response.json();
// playerDiv.innerHTML = `${data.first_name}, ${data.last_name}, ${data.position}`;

// }


// fetchButton.addEventListener('click', fetchPlayers);

const city = document.getElementById('city');

const button = document.getElementById('submit');


const cityName = document.getElementById('cityName');
const country = document.getElementById('country');
const temperature = document.getElementById('temperature');
const time = document.getElementById('time');
const feelsLike = document.getElementById('feelsLike');
const windSpeed = document.getElementById('windSpeed');
const icon = document.getElementById('icons');
const fetchWeatherData = async () => {
    const cityValue = city.value;
    const url = `https://api.weatherstack.com/current?access_key=b0bc374afa5d7c64a7f64c593064f9a6&query=${cityValue}&units=f`;
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        const data = result
        console.log(result);
        cityName.innerHTML = data.location.name;
        country.innerHTML = data.location.country;
        temperature.innerHTML = `${data.current.temperature} &#176`;
        time.innerHTML = `The current time is ${data.location.localtime}`;
        // humidity.innerHTML = data.current.humidity;
        // feelsLike.innerHTML = data.current.feelslike;
        // windSpeed.innerHTML = data.current.wind_speed;
        icon.src  = data.current.weather_icons;
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

button.addEventListener('click', fetchWeatherData)
// 










