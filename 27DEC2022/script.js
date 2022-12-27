// 1. callbacks
function good(data) {
  console.log("@SN ", data + " nagawade");
}
function myfun(callbacks) {
  (data = "suyog"), callbacks(data);
}
myfun(good);

// 2. promises

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
//method 1
promise
  .then((data) => console.log("data:=", data))
  .catch((error) => console.log("error:=", error));
//method 2
//Async & Await
async function demo() {
  let result = await promise;
  if (result) {
    console.log(result);
  }
}
demo();

// 3. LIFO in the Call Stack

/* In order to manage execution contexts (Global Execution Context and Function Execution Context), JavaScript employs a call stack. This call stack utilizes the concept of LIFO — Last In First Out. When executing a script, JavaScript creates a Global Execution Context and pushes it to the top of the call stack. */
