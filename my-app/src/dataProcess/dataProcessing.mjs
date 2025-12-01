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
const uniqueDates = new Set();
const processData = [];
function kelvinToCelsius(kelvin) {
  kelvin = kelvin - 273.15;
  return kelvin.toFixed(1) + "°C";
}

const temparature = data.map((item) => {
  const dateAndTime = item.dt_txt;
  const temp = kelvinToCelsius(item.main.temp);
  const description = item.weather[0].description;
  const dateKey = item.dt_txt.slice(0,10);
  if(!uniqueDates.has(dateKey)){
    uniqueDates.add(dateKey)
    processData.push({
        date: dateKey,
        temp:temp,
        description :description
    })
  }
  return {
    dateAndTime,
    temp,
    description,
  };
});

console.log(temparature.slice(0, 5));


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

console.log("Total unique dates found:", uniqueDates.size);
console.log("Processed Data (First 5 Unique Entries):", processData.slice(0, 5));
