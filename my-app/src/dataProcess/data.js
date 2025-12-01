const RAW_FORECAST_DATA = {
  "city": {
    "name": "London",
    "country": "GB",
    "timezone": 0
  },
  "list": [
    // --- DAY 1 (Current Day - Ignore) ---
    { "dt": 1764478800, "dt_txt": "2025-12-01 15:00:00", "main": { "temp": 286.15 }, "weather": [{ "description": "light rain", "icon": "10d" }] },
    { "dt": 1764489600, "dt_txt": "2025-12-01 18:00:00", "main": { "temp": 284.55 }, "weather": [{ "description": "clear sky", "icon": "01n" }] },
    // --- DAY 2 (Next Forecast Day) ---
    { "dt": 1764511200, "dt_txt": "2025-12-02 00:00:00", "main": { "temp": 278.91 }, "weather": [{ "description": "broken clouds", "icon": "04n" }] },
    { "dt": 1764532800, "dt_txt": "2025-12-02 06:00:00", "main": { "temp": 279.03 }, "weather": [{ "description": "scattered clouds", "icon": "03d" }] },
    { "dt": 1764554400, "dt_txt": "2025-12-02 12:00:00", "main": { "temp": 283.41 }, "weather": [{ "description": "overcast clouds", "icon": "04d" }] }, // <--- Target Item 1
    { "dt": 1764576000, "dt_txt": "2025-12-02 18:00:00", "main": { "temp": 280.12 }, "weather": [{ "description": "light rain", "icon": "10n" }] },
    // --- DAY 3 ---
    { "dt": 1764604800, "dt_txt": "2025-12-03 03:00:00", "main": { "temp": 277.89 }, "weather": [{ "description": "light snow", "icon": "13n" }] },
    { "dt": 1764626400, "dt_txt": "2025-12-03 09:00:00", "main": { "temp": 280.95 }, "weather": [{ "description": "clear sky", "icon": "01d" }] },
    { "dt": 1764648000, "dt_txt": "2025-12-03 15:00:00", "main": { "temp": 285.67 }, "weather": [{ "description": "broken clouds", "icon": "04d" }] }, // <--- Target Item 2
    { "dt": 1764669600, "dt_txt": "2025-12-03 21:00:00", "main": { "temp": 282.33 }, "weather": [{ "description": "moderate rain", "icon": "10n" }] },
    // --- DAY 4 ---
    { "dt": 1764694800, "dt_txt": "2025-12-04 03:00:00", "main": { "temp": 280.05 }, "weather": [{ "description": "drizzle", "icon": "09n" }] },
    { "dt": 1764716400, "dt_txt": "2025-12-04 09:00:00", "main": { "temp": 281.82 }, "weather": [{ "description": "fog", "icon": "50d" }] },
    { "dt": 1764738000, "dt_txt": "2025-12-04 15:00:00", "main": { "temp": 286.99 }, "weather": [{ "description": "clear sky", "icon": "01d" }] }, // <--- Target Item 3
    { "dt": 1764759600, "dt_txt": "2025-12-04 21:00:00", "main": { "temp": 284.18 }, "weather": [{ "description": "scattered clouds", "icon": "03n" }] },
    // --- DAY 5 ---
    { "dt": 1764781200, "dt_txt": "2025-12-05 03:00:00", "main": { "temp": 282.55 }, "weather": [{ "description": "few clouds", "icon": "02n" }] },
    { "dt": 1764802800, "dt_txt": "2025-12-05 09:00:00", "main": { "temp": 283.61 }, "weather": [{ "description": "clear sky", "icon": "01d" }] },
    { "dt": 1764824400, "dt_txt": "2025-12-05 15:00:00", "main": { "temp": 287.05 }, "weather": [{ "description": "thunderstorm", "icon": "11d" }] }, // <--- Target Item 4
    { "dt": 1764846000, "dt_txt": "2025-12-05 21:00:00", "main": { "temp": 285.11 }, "weather": [{ "description": "moderate rain", "icon": "10n" }] },
    // --- DAY 6 (Final Day) ---
    { "dt": 1764867600, "dt_txt": "2025-12-06 03:00:00", "main": { "temp": 283.01 }, "weather": [{ "description": "light snow", "icon": "13n" }] },
    { "dt": 1764910800, "dt_txt": "2025-12-06 15:00:00", "main": { "temp": 285.90 }, "weather": [{ "description": "clear sky", "icon": "01d" }] } // <--- Target Item 5
    // NOTE: This list is abbreviated, the actual list has 40 items.
  ]
};
export default RAW_FORECAST_DATA;

// Day 2: The Uniqueness Problem
// Goal: Identify the unique dates in the forecast.

// Task: Use the dt_txt string and the JavaScript Set data structure to create a set containing the unique YYYY-MM-DD date strings. Ignore the time part.

// Output: A Set containing 6 unique dates (Today's date + 5 forecast dates).