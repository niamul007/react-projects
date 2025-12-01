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

function kelvinToCelsius(kelvin){
    kelvin = kelvin - 273.15 ;
    return kelvin.toFixed(1)+ "°C"
}

const temparature = data.map((item)=>{
    const date = item.dt_txt;
    const temp = item.main.temp;
    const description = item.weather[0].description;
    return{
        date,
        temp,
        description
    }
});

console.log(temparature.slice(0,5));