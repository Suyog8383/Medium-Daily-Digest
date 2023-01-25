waterFun();
function waterFun() {
  console.log("@SN water added"); //@SN water added
}
waterFun1();
var waterFun1 = function () {
  console.log("@SN water added");
}; // TypeError: waterFun1 is not a function
