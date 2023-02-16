import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Computer, Code } from "@material-ui/icons";

function App() {
  const [os, setOs] = useState("");
  const [language, setLanguage] = useState("");

  const handleOsChange = (event) => {
    setOs(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCheckCompatibility = () => {
    // do something to check compatibility based on selected OS and language
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Computer />
        <FormControl style={{ minWidth: 120, marginLeft: 8 }}>
          <InputLabel id="os-label">Operating System</InputLabel>
          <Select
            labelId="os-label"
            id="os-select"
            value={os}
            onChange={handleOsChange}
          >
            <MenuItem value="windows">Windows</MenuItem>
            <MenuItem value="macos">macOS</MenuItem>
            <MenuItem value="linux">Linux</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
        <Code />
        <FormControl style={{ minWidth: 120, marginLeft: 8 }}>
          <InputLabel id="language-label">Programming Language</InputLabel>
          <Select
            labelId="language-label"
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
          >
            <MenuItem value="javascript">JavaScript</MenuItem>
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="java">Java</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div style={{ marginTop: 16 }}>
        <Button variant="contained" color="primary" onClick={handleCheckCompatibility}>
          Check Compatibility
        </Button>
      </div>
    </div>
  );
}

export default App;
