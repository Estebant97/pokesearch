import React from "react";
import Grid from "@mui/material/Grid";

export const Image = ({ data }) => {
  const imgStyle = {
    height: 200,
    width: 200,
  };
  if (!data) return null;
  return (
    <Grid container>
      <Grid item xl={6}>
        <img
          src={data.sprites?.front_default}
          alt={data?.name || ""}
          style={imgStyle}
        />
      </Grid>
      <Grid item xl={6}>
        <img
          src={data.sprites?.front_shiny}
          alt={data?.name}
          style={imgStyle}
        />
      </Grid>
    </Grid>
  );
};
