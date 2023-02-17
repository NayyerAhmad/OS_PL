import * as React from 'react';
import SelectDropdown from '../components/SelectDropdown';
import FormCompatibility from '../components/FormCompatibility';

export default function SelectVariants() {
  const [operatingSystem, setOperatingSystem] = React.useState('');
  const [osNames, setOsNames] = React.useState([]);
  const [programmingLanguage, setProgrammingLanguage] = React.useState('');
  const [plNames, setPlNames] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/eligibility/list')
      .then(response => response.json())
      .then(data => {
        const uniqueOsNames = new Set();
        const uniquePlNames = new Set();
        data.data.forEach(item => {
          uniqueOsNames.add(item.name_os);
          uniquePlNames.add(item.name_pl);
        });
        setOsNames(Array.from(uniqueOsNames));
        setPlNames(Array.from(uniquePlNames));
      })
      .catch(error => console.log(error));
  }, []);

  const handleOperatingSystemChange = (event) => {
    setOperatingSystem(event.target.value);
  };

  const handleProgrammingLanguageChange = (event) => {
    setProgrammingLanguage(event.target.value);
  };

  return (
    <div>
      <p>use the form to store more relationships</p>
      <FormCompatibility />
      <br/>

      <p>Choose the Operating System and the Programming language to check their compatibility</p>
      <SelectDropdown
        options={osNames}
        value={operatingSystem}
        onChange={handleOperatingSystemChange}
        label="Operating System"
      />
      <SelectDropdown
        options={plNames}
        value={programmingLanguage}
        onChange={handleProgrammingLanguageChange}
        label="Programming Language"
      />
    </div>
  );
}
