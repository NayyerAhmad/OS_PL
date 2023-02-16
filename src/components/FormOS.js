import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
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
      <Box display="flex" flexDirection="column" alignItems="center">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          variant="outlined"
          size="small"
        />
        <TextField
          label="Released Year"
          type="number"
          value={releasedYear}
          onChange={(e) => setReleasedYear(e.target.value)}
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
          Add Operating System
        </Button>
      </Box>
    </form>
  );
}

export default FormOS;
