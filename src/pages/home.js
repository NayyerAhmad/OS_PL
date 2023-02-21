import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FormOS from '../components/FormOS';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CustomizedDialogs from "../components/EditPopoup";
import EditFormOS from '../components/EditFormOS';


const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name_os', headerName: 'Operating System', width: 200 },
  { field: 'name_pl', headerName: 'Programming Language', width: 200 },
  { field: 'edit', headerName: 'Edit', width: 150,
      renderCell: (params) => (
        <CustomizedDialogs>
        <EditFormOS params={params}></EditFormOS>
      </CustomizedDialogs>
    )
  },
  // {
  //   field: 'delete', 
  //   headerName: 'Delete', 
  //   width: 150, 
  //   renderCell: (params) => (
  //     <IconButton onClick={() => {
  //       const id = params.row.id;
  //       fetch(`http://localhost:3001/OS/delete/${id}`, {method:"DELETE"})
  //         .then(response => response.json())
  //         .then(data => console.log(data))
  //     }}>
  //       <DeleteIcon />
  //     </IconButton>
  //   )
  // }
];

const OperaingSys = () => {
  const [tableData, setTableData] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/eligibility/list')
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
