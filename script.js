const btn = document.getElementById("getData");
const numbers = document.getElementById("number");
const names = document.getElementById("name");
const types = document.getElementById("type");
const card = document.querySelector(".cards");
const pict = document.getElementById("pict");

btn.addEventListener("click", async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
    method: "GET",
  });
  const json = await response.json();
  const name = json.name;
  const url = json.forms[0].url;
  const responseImg = await fetch(url, {
    method: "GET",
  });
  const jsonImg = await responseImg.json();
  const img = jsonImg.sprites.front_female;
  const image = types.parentElement.previousElementSibling;
  const number = json.id;
  const type = json.types[0].type.name;
  names.innerText = name;
  numbers.innerText = number;
  image.src = img;
  types.innerText = type;
  card.style.display = "block";
});
