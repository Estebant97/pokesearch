import { PKMN_API_URL } from "../constants";
export function getPokemonByName(name) {
  console.log(name);
  fetch(`${PKMN_API_URL}${name}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
