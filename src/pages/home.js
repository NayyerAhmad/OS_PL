import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [operatingSystem, setOperatingSystem] = React.useState('');
  const [osNames, setOsNames] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/eligibility/list')
      .then(response => response.json())
      .then(data => setOsNames(data.data.map(item => item.name_os)))
      .catch(error => console.log(error));
  }, []);

  const handleChange = (event) => {
    setOperatingSystem(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="OS-label">Operating System</InputLabel>
        <Select
          labelId="OS"
          id="os_name"
          value={operatingSystem}
          onChange={handleChange}
          label="Operating System"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {osNames.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
