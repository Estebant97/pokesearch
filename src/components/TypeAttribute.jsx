import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import axios from "axios";
export const TypeAttribute = ({ url }) => {
  const [dataType, setDataType] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDataType(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [url]);
  return (
    <>
      <Grid container>
        <Grid item xl={6}>
          <h1>strong against</h1>
          {dataType.damage_relations?.double_damage_to.map((double, index) => {
            return <h2 key={`pkmn${double}${index}`}>{double.name}</h2>;
          })}
        </Grid>
        <Grid item xl={6}>
          <h1>weak against</h1>
          {dataType.damage_relations?.double_damage_from.map((double, index) => {
            return <h2 key={`pkmn${double}${index}`}>{double.name}</h2>;
          })}
        </Grid>
      </Grid>
    </>
  );
};
