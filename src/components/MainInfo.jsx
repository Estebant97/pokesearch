import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { TypeAttribute } from "./TypeAttribute";

export const MainInfo = ({ data }) => {
  return (
    <>
      <Grid container>
        <Grid item xl={12}>
          {data &&
            data.types &&
            data?.types.map((type, index) => {
              let url = type.type?.url;
              return (
                <>
                  <h1>Type: </h1>
                  <h2 key={`pkmn${index}`}>{type.type?.name}</h2>
                  <TypeAttribute key={`pkmnType${index}`} url={url} />
                </>
              );
            })}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xl={12}></Grid>
      </Grid>
    </>
  );
};
