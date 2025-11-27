const data = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/japan");
  if (!res.ok) {
    throw new Error("Fetching Faild");
  }
  const data = await res.json();
  return console.log(data);
};
console.log(data());


export default data;