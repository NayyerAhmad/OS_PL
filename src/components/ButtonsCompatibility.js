import React from "react";
import { Button, Grid } from "@material-ui/core";
import "../components/styles/forms.css"

function ButtonsCompatibility() {

  return (
    <form>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <Button variant="contained" color="primary" type="submit">
            Add Compatibility
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" type="submit">
            Check Compatibility
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ButtonsCompatibility;
