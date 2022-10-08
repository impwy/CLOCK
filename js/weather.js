const API_KEY = " 9af8a74f74f383f8a0fd85298f3bd0d3";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).than(Response => Response.json()).than(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name; 
        weather.innerText = data.weather[0].main;
    });
}

function onGeoEttor() {
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEttor)