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
      setOsOptions(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPlOptions = async () => {
    try {
      const response = await fetch('http://localhost:3001/pl/list');
      const data = await response.json();
      setPlOptions(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchOsOptions();
    fetchPlOptions();
  }, []);

  const handleOperatingSystemChange = (event, object) => {
    setOperatingSystem(object.props);
  };

  const handleProgrammingLanguageChange = (event, object) => {
    setProgrammingLanguage(object.props);
    console.log(object.props)
  };

  const handleAddRelationshipClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/eligibility/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code_os: operatingSystem.value,
          name_os: operatingSystem.children,
          code_pl: programmingLanguage.value,
          name_pl: programmingLanguage.children
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
  const handleCheckCompatibilityClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/eligibility/${operatingSystem.value}/${programmingLanguage.children}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        console.log('Compatible');
      } else {
        console.log('Not compatible');
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <p>Choose the Operating System and the Programming language to check their compatibility</p>
      <SelectDropdown
        options={osOptions}
        value={operatingSystem.children}
        onChange={handleOperatingSystemChange}
        label="Operating System"
      />
      <SelectDropdown
        options={plOptions}
        value={programmingLanguage.children}
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
      <CompatibilityTable/>
    </div>
  );
}
