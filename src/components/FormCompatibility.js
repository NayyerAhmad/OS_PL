import React, { useState } from "react";

function FormCompatibility() {
  const [operatingSystem, setOperatingSystem] = useState("");
  const [operatingLanguage, setOperatingLanguage] = useState("");

  const handleAddLanguage = async (event) => {
    event.preventDefault();

    const data = {
      name_os: operatingSystem,
      name_pl: operatingLanguage,
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
      <label>
        Operating System:
        <input type="text" value={operatingSystem} onChange={(e) => setOperatingSystem(e.target.value)} />
      </label>
      <br />
      <label>
        Released Year:
        <input type="text" value={operatingLanguage} onChange={(e) => setOperatingLanguage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Relationship</button>
    </form>
  );
}

export default FormCompatibility;
