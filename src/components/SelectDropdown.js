import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDropdown({ options, value, onChange, label }) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={label}
        id={label.toLowerCase()}
        value={value}
        onChange={onChange}
        label={label}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
