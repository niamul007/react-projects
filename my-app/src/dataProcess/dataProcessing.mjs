import RAW_FORECAST_DATA from "./data.js";

// const data = RAW_FORECAST_DATA.list;

// function kelvinToCelsius(kelvin){
//     kelvin = kelvin- 273.15;
//     return kelvin.toFixed(1)+"°C"
// }
// // console.log(kelvinToCelsius(290))

// const temparature = data.map((item)=>{
//     const date = item.dt_txt;
//     const temp = kelvinToCelsius(item.main.temp);
//     const iconCode = item.weather[0].icon;
//     return {
//         date,
//         temp,
//         iconCode
//     }
// })
// console.log(temparature.length);
// console.log(temparature.slice(0,5))

const data = RAW_FORECAST_DATA.list;
// const uniqueDates = new Set();
// const processData = [];
// function kelvinToCelsius(kelvin) {
//   kelvin = kelvin - 273.15;
//   return kelvin.toFixed(1) + "°C";
// }

// const temparature = data.map((item) => {
//   const dateAndTime = item.dt_txt;
//   const temp = kelvinToCelsius(item.main.temp);
//   const description = item.weather[0].description;
//   const dateKey = item.dt_txt.slice(0,10);
//   if(!uniqueDates.has(dateKey)){
//     uniqueDates.add(dateKey)
//     processData.push({
//         date: dateKey,
//         temp:temp,
//         description :description
//     })
//   }
//   return {
//     dateAndTime,
//     temp,
//     description,
//   };
// });

// console.log(temparature.slice(0, 5));

// const uniqueDates = new Set();
// const processData = [];

// data.forEach((item) => {
//   const dateKey = item.dt_txt.slice(0, 10);
//   if (!uniqueDates.has(dateKey)) {
//     uniqueDates.add(dateKey);
//     processData.push({
//       date: dateKey,
//       temp: item.main.temp,
//       description: item.weather[0].description,
//     });
//   }
// });

// console.log("Total unique dates found:", uniqueDates.size);
// console.log("Processed Data (First 5 Unique Entries):", processData.slice(0, 5));
// Assuming RAW_FORECAST_DATA is available globally

// Assuming data is RAW_FORECAST_DATA.list

// This is still your local date (e.g., "Tue Dec 02 2025")
// 1. Helper function for conversion
const convertKelvinToCelsius = (kelvin) => { 
    if (typeof kelvin === 'number') {
        return (kelvin - 273.15).toFixed(1);
    }
    return null;
}; 

// 2. The main data filtering function
const filterForecastData = (list) => { 
    
    const finalForecast = [];
    const uniqueDates = new Set(); // Tracks dates already added (e.g., '2025-12-02')
    
    // Define the exclusion and selection rules
    const dateToExclude = new Date(list[0].dt * 1000).toDateString(); 
    const targetTimes = ['12:00:00', '15:00:00']; 

    for (const item of list) {
        const itemDateString = new Date(item.dt * 1000).toDateString();
        const simpleDateKey = item.dt_txt.slice(0, 10); // YYYY-MM-DD

        // --- RULE 1: Exclusion (Skip the first day of data) ---
        if (itemDateString === dateToExclude) {
            continue;
        }

        // --- RULE 2: Selection (Skip if not 12PM or 3PM) ---
        if (!targetTimes.some(time => item.dt_txt.includes(time))) {
            continue;
        }
        
        // --- RULE 3: Uniqueness (Add only the first one found for this date) ---
        // We stop after finding 5 unique days
        if (uniqueDates.size < 5 && !uniqueDates.has(simpleDateKey)) {
            
            uniqueDates.add(simpleDateKey); // Mark the date as saved
            
            // --- Day 6 Task: Final Data Mapping/Cleanup ---
            finalForecast.push({
                date: simpleDateKey,
                day: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
                
                // Convert temperature and assign to min/max
                tempMax: convertKelvinToCelsius(item.main.temp), 
                tempMin: convertKelvinToCelsius(item.main.temp), 
                
                description: item.weather[0].description,
                icon: item.weather[0].icon,
            });
        }
    }

    return finalForecast;
};


// 3. Execution and testing
const finalCleanData = filterForecastData(RAW_FORECAST_DATA.list);

console.log("-----------------------------------------");
console.log("🎉 FINAL CLEANED 5-DAY FORECAST DATA 🎉");
console.log("-----------------------------------------");
console.log("Total Items:", finalCleanData.length); 
console.log(finalCleanData);