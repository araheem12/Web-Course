document.getElementById('search-btn').addEventListener('click', function() {
    var city = document.getElementById('city').value;
    var apiKey = '9920008360e6212a01a59fd9eb579f46'; // Replace 'YOUR_API_KEY' with your actual OpenWeather API key
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        displayWeather(data);
      } else {
        alert('Error: ' + xhr.statusText);
      }
    };
    xhr.send();
  });
  
  function displayWeather(data) {
    var weatherData = document.getElementById('weather-data');
    weatherData.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
      <p>Description: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  }
  