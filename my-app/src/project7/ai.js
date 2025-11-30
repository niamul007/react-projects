// --- Global or Component-Level Variables ---
const API_KEY = '653f8950547083fe96d14f04426fe038'; // Use one consistent name
// The lat and lon variables were temporary and should be removed.

// --- Helper Functions ---

const convertKelvinToCelsius = (kelvin) => { 
    if (typeof kelvin === 'number') {
        return (kelvin - 273.15).toFixed(1);
    }
    return null;
}; 

// Function to process the 40-item forecast list
const filterForecastData = (list) => { 
    const dailyData = {};
    const today = new Date().toDateString(); // Get today's date string for comparison

    list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const itemDateString = date.toDateString();
        
        // 1. Skip all entries for the current day
        if (itemDateString === today) {
            return;
        }

        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }); 
        const hour = date.getHours();

        // 2. Pick the data point closest to 12:00 PM (noon) for each day
        // This is a robust way to ensure we get a representative daily entry
        if (!dailyData[dayName] || Math.abs(hour - 12) < Math.abs(new Date(dailyData[dayName].dt * 1000).getHours() - 12)) {
            dailyData[dayName] = item;
        }
    });

    // 3. Convert the map of 5 objects back into a clean array and process the data
    const finalForecast = Object.values(dailyData)
        .slice(0, 5) // Ensure we only take the next 5 days
        .map(item => ({
            date: item.dt * 1000,
            day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
            tempMax: convertKelvinToCelsius(item.main.temp_max),
            tempMin: convertKelvinToCelsius(item.main.temp_min),
            description: item.weather[0].description,
            icon: item.weather[0].icon,
        }));
        
    return finalForecast;
}; 

// --- Main Fetch Function ---
const fetchData = async (cityName) => {
    // These functions must be defined by `useState` in the component scope
    setLoading(true); 
    setError(null);
    
    try {
        // --- CALL 1: Get Current Weather & Coordinates ---
        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
        const currentRes = await fetch(currentUrl);
        
        if (!currentRes.ok) {
            const errData = await currentRes.json();
            throw new Error(errData.message || `City not found: ${currentRes.status}`);
        }
        
        const currentData = await currentRes.json();
        const { lat, lon } = currentData.coord; 

        // --- CALL 2: Get 5-Day / 3-Hour Forecast ---
        // FIX: Use API_KEY consistently
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`; 
        const forecastRes = await fetch(forecastUrl);
        
        if (!forecastRes.ok) {
            throw new Error(`Forecast Error: ${forecastRes.status}`);
        }
        
        const forecastData = await forecastRes.json();

        // --- DATA UNIFICATION & PROCESSING ---
        const dailyForecast = filterForecastData(forecastData.list);
        
        // Create ONE clean object to store in state
        const finalData = {
            current: {
                location: currentData.name,
                country: currentData.sys.country,
                temp: convertKelvinToCelsius(currentData.main.temp),
                feelsLike: convertKelvinToCelsius(currentData.main.feels_like),
                description: currentData.weather[0].description,
                icon: currentData.weather[0].icon,
                dt: currentData.dt,
                windSpeed: currentData.wind.speed,
                humidity: currentData.main.humidity,
            },
            forecast: dailyForecast, // 5 clean forecast items
        };

        setWeatherData(finalData); // Store the clean, combined data
        
    } catch (err) {
        console.error("Error fetching weather:", err.message);
        setError(err.message);
        setWeatherData(null);
    } finally {
        setLoading(false);
    }
};
