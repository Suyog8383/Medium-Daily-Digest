//Timing Events in JavaScript
// 1.setTimeout
//1st way to write setTimeout
/* setTimeout(() => {
  alert("hello");
}, 2000); */

//2nd way to write setTimeout
let interval01 = setTimeout(setTime, 5000);
function setTime() {
  const date = new Date();
  console.log(date.getFullYear());
}
//stop the execution
clearTimeout(interval01);

//2. setInterval
//1st way to write setInterval
/* setInterval(() => {
  alert("2023");
}, 1000); */

//2nd way to write setInterval
/* let interval = setInterval(setTime2, 1500);
function setTime2() {
  alert("Go");
}
//stop the execution
clearInterval(interval); */
