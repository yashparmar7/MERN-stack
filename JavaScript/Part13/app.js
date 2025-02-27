// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     // console.log(res);
//     // console.log(res.data);
//     // console.log(res.data.fact);
//     return res.data.fact;
//   } catch (e) {
//     console.log("ERROR :", e);
//     return "No fact found";
//   }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let fact = await getFacts();
//   //   console.log(fact);

//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

//! Dog API

// let url2 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let image = await getImage();
//   let img = document.querySelector("#image");
//   //   img.src = image;
//   //*OR
//   img.setAttribute("src", image);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url2);

//     //   console.log(res);
//     //   console.log(res.data.message);
//     return res.data.message;
//   } catch (e) {
//     console.log("ERROR :", e);
//     return "No image found";
//   }
// }

//! Sending Headers :

const urls = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(urls, config);
    console.log(res.data);
    console.log(res.data.joke);
  } catch (e) {
    console.log("ERROR :", e);
  }
}
