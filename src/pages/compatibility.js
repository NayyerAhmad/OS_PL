import * as React from 'react';
import SelectDropdown from '../components/SelectDropdown';
import Button from '@mui/material/Button';
import CompatibilityTable from '../components/CompatibilityTable';



export default function Compatibility() {
  const [operatingSystem, setOperatingSystem] = React.useState('');
  const [osOptions, setOsOptions] = React.useState([]);
  const [programmingLanguage, setProgrammingLanguage] = React.useState('');
  const [plOptions, setPlOptions] = React.useState([]);

  const fetchOsOptions = async () => {
    try {
      const response = await fetch('http://localhost:3001/OS/list');
      const data = await response.json();
      const uniqueOsNames = Array.from(new Set(data.data.map(item => item.name)));
      setOsOptions(uniqueOsNames);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlOptions = async () => {
    try {
      const response = await fetch('http://localhost:3001/pl/list');
      const data = await response.json();
      const uniquePlNames = Array.from(new Set(data.data.map(item => item.name)));
      setPlOptions(uniquePlNames);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchOsOptions();
    fetchPlOptions();
  }, []);

  const handleOperatingSystemChange = (event) => {
    setOperatingSystem(event.target.value);
  };

  const handleProgrammingLanguageChange = (event) => {
    setProgrammingLanguage(event.target.value);
  };

  const handleAddRelationshipClick = async () => {
    try {
      const osResponse = await fetch(`http://localhost:3001/OS/list?name=${operatingSystem}`);
      const osData = await osResponse.json();
      const os = osData.data[0];

      const plResponse = await fetch(`http://localhost:3001/pl/list?name=${programmingLanguage}`);
      const plData = await plResponse.json();
      const pl = plData.data[0];

      const response = await fetch('http://localhost:3001/eligibility/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id_os: os.id,
          name_os: os.name,
          name_pl: pl.name,
          id_pl: pl.id
        })
      });

      if (response.ok) {
        console.log('Relationship added successfully');
      } else {
        console.log('Failed to add relationship');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckCompatibilityClick = () => {
    // need to update this to handle the button functionality
  };

  return (
    <div>
      <p>Choose the Operating System and the Programming language to check their compatibility</p>
      <SelectDropdown
        options={osOptions}
        value={operatingSystem}
        onChange={handleOperatingSystemChange}
        label="Operating System"
      />
      <SelectDropdown
        options={plOptions}
        value={programmingLanguage}
        onChange={handleProgrammingLanguageChange}
        label="Programming Language"
      />
      <br/>
      <br/>
      <Button variant="contained" onClick={handleAddRelationshipClick}>Add Relationship</Button>
      <Button variant="contained" onClick={handleCheckCompatibilityClick}>Check Compatibility</Button>
      <br/>
      <br/>
      <h1> table</h1>
      {/* <CompatibilityTable/> */}
    </div>
  );
}
