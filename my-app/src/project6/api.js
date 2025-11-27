const data = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/japan");
  if (!res.ok) {
    throw new Error("Fetching Faild");
  }
  const data = await res.json();
  return console.log(data);
};
// console.log(data());

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("Hello"));'


function revers(str){
  return str.split("").reverse().join("");
}
console.log(revers("Niamul"));
// what join does is it joins the array elements into a string with the specified separator.


export default data;