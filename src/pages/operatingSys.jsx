import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FormOS from '../components/FormOS';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CustomizedDialogs from "../components/EditPopoup";
import EditFormOS from '../components/EditFormOS';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

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
      <DeleteButton params={params} />
    )
  }
];

const DeleteButton = ({params}) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleDelete = () => {
    const id = params.row.id;
    fetch(`http://localhost:3001/OS/delete/${id}`, {method:"DELETE"})
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const OperaingSys = () => {
  const [tableData, setTableData] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/OS/list')
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
        pageSize={10}
        onSelectionModelChange={selection => handleRowSelection(selection.selectionModel)}
      />
    </div>
  );
};

export default OperaingSys;