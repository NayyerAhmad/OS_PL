import React from "react";
import CustomizedDialogs from "../components/EditLanguagePopoup";
import FormPL from '../components/FormPL';


function App() {
  return (
    <div className="App">
      <CustomizedDialogs>
        <FormPL></FormPL>
      </CustomizedDialogs>
    </div>
  )
}

export default App;