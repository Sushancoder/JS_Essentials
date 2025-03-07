function showweatherDetails(event) {
    event.preventDefault();

    // const city = document.getElementById('city').value;
    // const apiKey = 'daf4aabcea1faaaba27e38b96e561e49'; // Replace 'YOUR_API_KEY' with your actual API key
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = 'daf4aabcea1faaaba27e38b96e561e49'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
            console.log(data)
        })
        
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );