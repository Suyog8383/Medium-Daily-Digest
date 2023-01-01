//1. Number separator

let largeNumber = 1_000_000;
console.log("@SN ", largeNumber);

// 2. Event listeners run only once

let data = document.getElementById("main");
data.addEventListener("click", () => console.log("@SN "), { once: true });

//3. console.log Variable wrapper

const name = "suyog";
console.log({ name });

//5. Get min/max values from an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("@SN max", Math.max(...numbers));
console.log("@SN min", Math.min(...numbers));
