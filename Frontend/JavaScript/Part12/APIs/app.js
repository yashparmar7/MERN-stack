// //! JSON.parse :

// let json =
//   '{"fact":"If your cat snores, or rolls over on his back to expose his belly, it means he trusts you.","length":90}';

// let validRes = JSON.parse(json);

// console.log(validRes);
// console.log(validRes.fact);
// console.log(validRes.length);

// //! JSON.stringify :

// let obj = {
//   name: "yash",
//   age: 20,
// };
// let js = JSON.stringify(obj);

// console.log(js);

//! API Request

let url = "https://catfact.ninja/fact";

//* using fetch

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data 1 :", data);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data 2 :", data2);
//   })
//   .catch((err) => {
//     console.log("error :", err);
//   });

//* using fetch with async await

async function getFact() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    console.log(data.fact);
  } catch (e) {
    console.log("error :", e);
  }
}

getFact();
