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

const nums = [1,2,2,3,4,4,5];
const unique = [...new Set(nums)];
// console.log(unique);

const names = ["Niamul", "Ahsan", "Rafiq", "Niamul", "Ahsan"];
const uniqueNames = names.filter((name, index) => {
  return names.indexOf(name) === index;
});
// console.log(uniqueNames);


function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
// the expression /[aeiou]/gi is a regular expression that matches all vowels (a, e, i, o, u) in a string, regardless of case (both uppercase and lowercase).
// console.log(countVowels("javascript"));
function randomPassword(len) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$";
  let pass = "";
  for (let i = 0; i < len; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }
  return pass;
}

console.log(randomPassword(8));

export default data;