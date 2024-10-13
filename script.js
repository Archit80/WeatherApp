const body = document.querySelector("body");
const apiKey = "4a00da6d8f9437c4c94a54b69ef0275d";

const bgVideo = document.querySelector("video");

const btn = document.querySelector("#btn");
const input = document.querySelector("input");
const weather = document.querySelector(".weather");
const icon = document.querySelector(".icon");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");

btn.addEventListener("click", () => {
    let city = input.value;
    getWeather(city);
})
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        btn.click();
    }
});
const bgPics = {
    "Rain": "https://i.ytimg.com/vi/cEKP7GKQZQk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBMMbRPholL1kjPdyJlCSSwaRgeZA",
    "Haze": "https://images.pexels.com/photos/28888438/pexels-photo-28888438/free-photo-of-foggy-urban-light-rail-platform-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Clouds": "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg",
    "Mist": "https://images.pexels.com/photos/1605325/pexels-photo-1605325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "Clear": "https://images.pexels.com/photos/221125/pexels-photo-221125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
}
const getWeather = (city) => {
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response=>response.json())
    .then(data => {
        const iconCode = data.weather[0].icon;
        icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${iconCode}.png" 
        alt = "WeatherIcon" />`;

        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

        const weatherTemp = data.main.temp;
        temp.innerHTML = `${weatherTemp}°C`;

        const weatherBG = data.weather[0].main;
        const weatherDesc = data.weather[0].description;
        description.innerHTML = `(${weatherDesc[0].toUpperCase() +
        weatherDesc.slice(1)})`;
        
        body.style.backgroundImage = `url(${bgPics[weatherBG]})`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';
        bgVideo.style.display = 'none';
    })
}
