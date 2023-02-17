import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import "../components/styles/forms.css"

function FormCompatibility() {
  const [nameOS, setNameOS] = useState("");
  const [namePL, setNamePL] = useState("");

  const handleAddLanguage = async (event) => {
    event.preventDefault();

    const data = {
      name_os: nameOS,
      name_pl: namePL,
    };

    try {
      const response = await fetch("http://localhost:3001/eligibility/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleAddLanguage}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={2}>
          <TextField
            label="Operating System"
            variant="outlined"
            fullWidth
            value={nameOS}
            onChange={(e) => setNameOS(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Programming Language"
            variant="outlined"
            fullWidth
            value={namePL}
            onChange={(e) => setNamePL(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Add Compatibility
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default FormCompatibility;
