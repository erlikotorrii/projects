const weatherData = [
    { city: 'New York', temperature: 16, humidity: 70, windSpeed: 7 },
    { city: 'London', temperature: 12, humidity: 80, windSpeed: 5 },
    { city: 'Tokyo', temperature: 22, humidity: 60, windSpeed: 4 },
    { city: 'Sydney', temperature: 25, humidity: 50, windSpeed: 6 },
    { city: 'Paris', temperature: 15, humidity: 65, windSpeed: 5 },
    { city: 'Berlin', temperature: 14, humidity: 60, windSpeed: 6 },
    { city: 'Moscow', temperature: 5, humidity: 75, windSpeed: 10 },
    { city: 'Toronto', temperature: 17, humidity: 55, windSpeed: 8 },
    { city: 'Rio de Janeiro', temperature: 26, humidity: 85, windSpeed: 7 },
    { city: 'Beijing', temperature: 20, humidity: 40, windSpeed: 3 },
    { city: 'Mumbai', temperature: 30, humidity: 70, windSpeed: 5 },
    { city: 'Los Angeles', temperature: 19, humidity: 65, windSpeed: 4 },
    { city: 'Cape Town', temperature: 18, humidity: 60, windSpeed: 6 },
    { city: 'Rome', temperature: 21, humidity: 55, windSpeed: 3 },
    { city: 'Bangkok', temperature: 33, humidity: 75, windSpeed: 2 },
    { city: 'Istanbul', temperature: 20, humidity: 60, windSpeed: 4 },
    { city: 'Lagos', temperature: 29, humidity: 80, windSpeed: 3 },
    { city: 'Buenos Aires', temperature: 23, humidity: 70, windSpeed: 5 },
    { city: 'Chicago', temperature: 10, humidity: 65, windSpeed: 7 },
    { city: 'Shanghai', temperature: 19, humidity: 80, windSpeed: 6 },
  ];
  
  
  function fetchWeather(city) {
    for (let i = 0; i < weatherData.length; i++) {
      if (weatherData[i].city.toLowerCase() === city.toLowerCase()) {
        return weatherData[i]; 
      }
    }
  }
  
  function displayCurrentWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
  
    if (data) {
      weatherDisplay.innerHTML = `
        <h4>Current weather for ${data.city}</h4>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind Speed: ${data.windSpeed} km/h</p>
      `;
    } else {
      alert("City not found!");
    }
  }
  
  function fetchForecast(city) {
    const weather = fetchWeather(city);
    if (!weather) return []; 
  
    const forecast = []; 
    for (let i = 0; i < 5; i++) { 
      forecast.push({ 
        day: i + 1,
        temperature: weather.temperature + i 
      });
    }
    return forecast;
  }
  
  function displayForecast(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
  
    let forecastHTML = `<h4>5-Day Forecast</h4>`;
    data.forEach(day => {
      forecastHTML += `<p>Day ${day.day}: Temperature: ${day.temperature}°C</p>`;
    });
  
    weatherDisplay.innerHTML += forecastHTML;
  }
  
  function searchWeather() {
    const cityNameInput = document.getElementById('cityName').value;
    const weather = fetchWeather(cityNameInput);
  
    if (weather) { 
      displayCurrentWeather(weather);
      displayForecast(fetchForecast(cityNameInput));
      saveRecentSearch(cityNameInput);
      displayRecentSearches();
    } else {
      displayCurrentWeather(null);
      displayForecast([]);
    }
  }
  
  function saveRecentSearch(city) {
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
  
    if (!recentSearches.includes(city)) {
      recentSearches.push(city); 
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }
  }
  
  function displayRecentSearches() {
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    const recentSearchesContainer = document.getElementById('recentSearches');
  
    recentSearchesContainer.innerHTML = ''; 
  
    recentSearches.forEach(city => {
      const cityElement = document.createElement('p');
      cityElement.textContent = city;

      cityElement.addEventListener('click', () => {
        document.getElementById('cityName').value = city;
        searchWeather();
      });
  
      recentSearchesContainer.appendChild(cityElement);
    });
  }
  
  displayRecentSearches();
  
  