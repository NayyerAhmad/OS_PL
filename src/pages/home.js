import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
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
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField
          label="Name"
          value={nameOS}
          onChange={(e) => setNameOS(e.target.value)}
          margin="normal"
          variant="outlined"
          size="small"
        />
        <TextField
          label="Released Year"
          type="number"
          value={namePL}
          onChange={(e) => setNamePL(e.target.value)}
          margin="normal"
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<AddCircle />}
        >
          Add Relationship
        </Button>
      </Box>
    </form>
  );
}

export default FormCompatibility;
