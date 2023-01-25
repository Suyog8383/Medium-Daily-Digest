let promise = new Promise((resole, reject) => {
  let str = "suyog";
  let str2 = "suyog";
  if (str === str2) {
    resole("success");
  } else {
    reject("error");
  }
});

promise.then((data) => console.log(data)).catch((data) => console.log(data));

// async function demoPromise() {
//   let result = await promise;
//   if (result) {
//     console.log("@SN ", result);
//   }
// }

// console.log("@SN ", demoPromise());
