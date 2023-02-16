import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FormOS from '../components/FormOS';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'released_year', headerName: 'Released Year', width: 200 }
];

const Programming = () => {
  const [tableData, setTableData] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/OS/list')
      .then((response) => response.json())
      .then((data) => {
        setTableData(data.data)});
  }, []);

  const handleRowSelection = (selection) => {
    const selectedRowIds = selection.map((selectedRow) => parseInt(selectedRow, 10));
    const rowsToDelete = tableData.filter((row) => selectedRowIds.includes(row.id));
    setDeletedRows(rowsToDelete);
    console.log(deletedRows);
  };

  return (
    <div style={{ height: 700, width: '100%' }}>
      <FormOS/>
      <DataGrid
        title="Operating Systems"
        rows={tableData}
        columns={columns}
        pageSize={12}
        onSelectionModelChange={(selection) => handleRowSelection(selection.selectionModel)}
      />
    </div>
  );
};

export default Programming;
