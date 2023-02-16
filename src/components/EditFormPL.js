import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import "../components/styles/forms.css"

function EditFormPL(params) {
  const [dataId] = useState(params.params.row.id);
  const [name, setName] = useState(params.params.row.name);
  const [releasedYear, setReleasedYear] = useState(params.params.row.released_year);
  const [githubRank, setGithubRank] = useState(params.params.row.githut_rank);
  const [pyplRank, setPyplRank] = useState(params.params.row.pypl_rank);
  const [tiobeRank, setTiobeRank] = useState(params.params.row.tiobe_rank);

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
      const response = await fetch("http://localhost:3001/pl/edit/" + dataId, {
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
