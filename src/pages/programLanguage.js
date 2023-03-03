import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FormPL from '../components/FormPL';
import CustomizedDialogs from "../components/EditPopoup";
import EditFormPL from '../components/EditFormPL';
import DeleteButton from '../components/PopupDelete';


const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'released_year', headerName: 'Released Year', width: 200 },
  { field: 'githut_rank', headerName: 'GitHut Rank', width: 200 },
  { field: 'pypl_rank', headerName: 'PyPL Rank', width: 200 },
  { field: 'tiobe_rank', headerName: 'TIOBE Rank', width: 200 },
  { field: 'edit', headerName: 'Edit', width: 150,
      renderCell: (params) => (
        <CustomizedDialogs>
        <EditFormPL params={params}></EditFormPL>
      </CustomizedDialogs>
    )
  },
  {
    field: 'delete', 
    headerName: 'Delete', 
    width: 150, 
    renderCell: (params) => (
      <DeleteButton params={params} apiUrl="http://localhost:3001/pl/delete/" />
    )
  }
];


const Programming = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pl/list')
      .then(response => response.json())
      .then(data => setTableData(data.data));
  }, []);


  return (
    <div style={{ height: 700, width: '100%' }}>
      <h1>Programming Language Form</h1>
      <p>Use the form below to add more languages into the data</p>
      <br/>
      <FormPL />
      <br/>
      <h1>Programming Language Table</h1>
      <br/>
      <DataGrid
        title="Programming Languages"
        rows={tableData}
        columns={columns}
        pageSize={10}
      />
    </div>
  );
};

export default Programming;
