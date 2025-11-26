const data = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/japan");
  if (!res.ok) {
    throw new Error("Fetching Faild");
  }
  const data = await res.json();
  return console.log(data);
};

const newData = data();
const arr = newData.map((item) => ({
  name: item.name.common,
  capital: item.capital[0], 
    region: item.region,
    population: item.population,
    flag: item.flags.png,
}));    

console.log(arr)
export default data;