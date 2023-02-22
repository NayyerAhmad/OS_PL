import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import "../components/styles/forms.css"

function EditFormEligibility(params) {
  const [dataId] = useState(params.params.row.id);
  const [nameOS, setNameOS] = useState(params.params.row.nameOS);
  const [namePL, setNamePL] = useState(params.params.row.namePL);

  const handleAddLanguage = async (event) => {
    event.preventDefault();

    const data = {

      name_os: nameOS,
      name_pl: namePL,
    };

    try {
      const response = await fetch("http://localhost:3001/eligibility/edit/" + dataId, {
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
            label="Name OS"
            variant="outlined"
            fullWidth
            value={nameOS}
            onChange={(e) => setNameOS(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Name PL"
            variant="outlined"
            fullWidth
            value={namePL}
            onChange={(e) => setNamePL(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Edit Operating System
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditFormEligibility;
