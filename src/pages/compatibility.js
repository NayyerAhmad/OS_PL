import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import FormCompatibility from './home';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name_os', headerName: 'Operating System', width: 200 },
  { field: 'name_pl', headerName: 'Programming Language', width: 300 }
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
      <FormCompatibility/>
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
