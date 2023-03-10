import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FormOS from '../components/FormOS';
import CustomizedDialogs from "../components/EditPopoup";
import EditFormOS from '../components/EditFormOS';
import DeleteButton from '../components/PopupDelete';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'released_year', headerName: 'Released Year', width: 200 },
  { field: 'edit', headerName: 'Edit', width: 150,
      renderCell: (params) => (
        <CustomizedDialogs>
        <EditFormOS params={params}></EditFormOS>
      </CustomizedDialogs>
    )
  },
    {
      field: 'delete', 
      headerName: 'Delete', 
      width: 150, 
      renderCell: (params) => (
        <DeleteButton params={params} apiUrl="http://localhost:3001/OS/delete/" />
      )
    }
  ];

const OperatingSys = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/OS/list')
      .then(response => response.json())
      .then(data => setTableData(data.data));
  }, []);


  return (
    <div style={{ height: 700, width: '100%' }}>
      <h1>Operating System Form</h1>
      <p>Use the form below to add more operating systems into the data</p>
      <br/>
      <FormOS />
      <br/>
      <h1>Programming Language Table</h1>
      <br/>
      <DataGrid
        title="Programming Languages"
        rows={tableData}
        columns={columns}
        pageSize={10}      />
    </div>
  );
};

export default OperatingSys;