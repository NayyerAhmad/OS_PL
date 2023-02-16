import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import "../components/styles/forms.css"

function EditFormPL() {
  const [name, setName] = useState("");
  const [releasedYear, setReleasedYear] = useState("");
  const [githubRank, setGithubRank] = useState("");
  const [pyplRank, setPyplRank] = useState("");
  const [tiobeRank, setTiobeRank] = useState("");

  const handleAddLanguage = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      released_year: releasedYear,
      githut_rank: githubRank,
      pypl_rank: pyplRank,
      tiobe_rank: tiobeRank
    };

    try {
      const response = await fetch("http://localhost:3001/pl/edit/", {
        method: "PUT",
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
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Released Year"
            variant="outlined"
            fullWidth
            type="number"
            value={releasedYear}
            onChange={(e) => setReleasedYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="GitHub Rank"
            variant="outlined"
            fullWidth
            type="number"
            value={githubRank}
            onChange={(e) => setGithubRank(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="PyPL Rank"
            variant="outlined"
            fullWidth
            type="number"
            value={pyplRank}
            onChange={(e) => setPyplRank(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="TIOBE Rank"
            variant="outlined"
            fullWidth
            type="number"
            value={tiobeRank}
            onChange={(e) => setTiobeRank(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Edit Language
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditFormPL;
