import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import "../components/styles/forms.css"

function FormOS() {
  const [name, setName] = useState("");
  const [releasedYear, setReleasedYear] = useState("");

  const handleAddLanguage = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      released_year: releasedYear,
    };

    try {
      const response = await fetch("http://localhost:3001/OS/new", {
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
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            label="Released Year"
            variant="outlined"
            fullWidth
            type="number"
            value={releasedYear}
            onChange={(e) => setReleasedYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Add Operating System
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default FormOS;
