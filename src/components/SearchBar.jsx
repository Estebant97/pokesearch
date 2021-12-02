import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import { pokemons } from "../constants";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Image } from "./Image";
import {MainInfo} from "./MainInfo";
import { getPokemonByName } from "../api/getPokemon";
import { Container } from "@mui/material";
export default function SearchBar() {
  const [name, setName] = useState("");
  const [nameFromAuto, setNameFromAuto] = useState('');
  const [data, setData] = useState("");
  const [flag, setFlag] = useState(false);
  let [loading, setLoading] = useState(false)
  const handleClick = () => {
    setNameFromAuto(name);
    setFlag(true);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nameFromAuto}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [nameFromAuto]);
  return (
    <>
      <Grid container>
        <Grid item xl={6}>
          <Autocomplete
            id="free-solo-pkmn"
            freeSolo
            options={pokemons.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} label="Search for pokemon" />}
            onClose={(e) => {
              let n = e.target.innerText;
              if (n !== '') {
                setName(n.toLowerCase());
              } else {
                setFlag(false);
              }
            }}
          />
        </Grid>
        <Grid item xl={6}>
          <Button variant="contained" onClick={handleClick}>
            Search
          </Button>
        </Grid>
      </Grid>
      {flag && !loading &&  data && data && data.species && data.species.name && <h1 style={{textAlign: "center"}}>{data.species.name}</h1> }
      {flag && !loading && data && <Image data={data} />}
      {flag && !loading &&  data &&<MainInfo data={data} />}
    </>
  );
}
