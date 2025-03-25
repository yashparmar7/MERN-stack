//! Call Stack

// function one() {
//   return 1;
// }
// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three(); // Output : 3

//! Callback Hell

// let h1 = document.querySelector("h1");

//* Formula 1 Right way

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     nextColorChange();
//   }, delay);
// }
// changeColor("red", 1000, () => {
//   changeColor("Orange", 1000, () => {
//     changeColor("Green", 1000, () => {
//       changeColor("Blue", 1000, () => {
//         changeColor("Yellow", 1000, () => {
//           changeColor("Purple", 1000);
//         });
//       });
//     });
//   });
// }); //* callback nesting -> callback hell

//*todo  apply promise on callback hell  */
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color was completed");
    return changeColor("Orange", 1000);
  })
  .then(() => {
    console.log("orange color was completed");
    return changeColor("Green", 1000);
  })
  .then(() => {
    console.log("green color was completed");
    return changeColor("Blue", 1000);
  })
  .then(() => {
    console.log("blue color was completed");
  });

//* Formula 2

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "Orange";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "Green";
// }, 3000);

//* Example  :

// function saveDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveDb(
//   "Hello! Good Morning",
//   () => {
//     console.log("success1 : Data saved");
//     saveDb(
//       "How Are You!",
//       () => {
//         console.log("success2 : Data2 saved");
//         saveDb(
//           "Where are you going!",
//           () => {
//             console.log("success3 : Data3 saved");
//           },
//           () => {
//             console.log("failure3 : Data3 failed");
//           }
//         );
//       },
//       () => {
//         console.log("failure2 : Data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("failure1 : Error saving data");
//   }
// );

//! Promises :

// function saveDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }

//! then() & catch()
// saveDb("Hello! Good Morning")
//   .then(() => {
//     console.log("Promise was resolved");
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

//* Promise chaining

// saveDb("Hello! Good Morning")
//   .then(() => {
//     console.log("data1 :saved");
//     saveDb("hello world!").then(() => {
//       console.log("data2 :saved");
//     });
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

//todo   Improved version
// saveDb("Hello! Good Morning")
//   .then(() => {
//     console.log("data1 :saved");
//     return saveDb("hello world!");
//   })
//   .then(() => {
//     console.log("data2 :saved");
//     return saveDb("yash parmar!");
//   })
//   .then(() => {
//     console.log("data3 :saved");
//   })
//   .catch(() => {
//     console.log("Promise was rejected");
//   });

//! result & error

// saveDb("Hello! Good Morning")
//   .then((result) => {
//     console.log("data1 :saved");
//     console.log("result of promise", result);
//     return saveDb("hello world!");
//   })
//   .then((result) => {
//     console.log("data2 :saved");
//     console.log("result of promise", result);
//     return saveDb("yash parmar!");
//   })
//   .then((result) => {
//     console.log("data3 :saved");
//     console.log("result of promise", result);
//   })
//   .catch((error) => {
//     console.log("Promise was rejected");
//     console.log("error of promise", error);
//   });
