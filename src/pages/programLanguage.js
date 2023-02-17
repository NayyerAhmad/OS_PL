import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FormPL from '../components/FormPL';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CustomizedDialogs from "../components/EditLanguagePopoup";
import EditFormPL from '../components/EditFormPL';


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
      <IconButton onClick={() => {
        const id = params.row.id;
        fetch(`http://localhost:3001/pl/delete/${id}`, {method:"DELETE"})
          .then(response => response.json())
          .then(data => console.log(data))
      }}>
        <DeleteIcon />
      </IconButton>
    )
  }
];

const Programming = () => {
  const [tableData, setTableData] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pl/list')
      .then(response => response.json())
      .then(data => setTableData(data.data));
  }, []);

  const handleRowSelection = (selection) => {
    const selectedRowIds = selection.map(selectedRow => parseInt(selectedRow, 10));
    const rowsToDelete = tableData.filter(row => selectedRowIds.includes(row.id));
    setDeletedRows(rowsToDelete);
  };

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
        onSelectionModelChange={selection => handleRowSelection(selection.selectionModel)}
      />
    </div>
  );
};

export default Programming;
