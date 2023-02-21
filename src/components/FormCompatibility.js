import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CustomizedDialogs from '../components/EditPopoup';
import EditFormOS from '../components/EditFormOS';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'code_os', headerName: 'Operating System', width: 200 },
  { field: 'code_pl', headerName: 'Programming Language', width: 200 },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 150,
    renderCell: (params) => (
      <CustomizedDialogs>
        <EditFormOS params={params}></EditFormOS>
      </CustomizedDialogs>
    )
  }
];

const CompatibilityTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/eligibility/list')
      .then(response => response.json())
      .then(data => setTableData(data.data));
  }, []);

  const handleRowSelection = (selection) => {
    const selectedRowIds = selection.map(selectedRow => parseInt(selectedRow, 10));
    const rowsToDelete = tableData.filter(row => selectedRowIds.includes(row.id));
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

export default CompatibilityTable;
