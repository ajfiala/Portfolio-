//const APIKey = g5rmBKKeBHn3beHC1ar0d02bxt6vBUhgD3IGgfSG;
const API_URL =
  "https://api.nasa.gov/planetary/apod?count=1&api_key=g5rmBKKeBHn3beHC1ar0d02bxt6vBUhgD3IGgfSG";
const IMG_PATH =
  "https://apod.nasa.gov/apod/image/2102/Pelican_PetraskoEtAl_3555.jpg";

const main = document.getElementById("main");
const btn = document.querySelector(".btn");

// Get picture
getPic(API_URL);

async function getPic(url) {
  const res = await fetch(url);
  const data = await res.json();
  arr = data[0];
  console.log(arr.hdurl);

  main.innerHTML = `<img class="image" src="${arr.hdurl}"/>`;
  {
    /* body.innerHTML = `<img class="image" src="${arr.hdurl}"/>`; */
  }
}

function newPic() {
  main.innerHTML = "";
}

// Event listeners
btn.addEventListener("click", function (e) {
  window.location.reload();

  e.preventDefault();
});
