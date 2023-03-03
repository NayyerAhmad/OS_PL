import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteButton from './PopupDelete';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'name_os', headerName: 'Operating System', width: 200 },
  { field: 'name_pl', headerName: 'Programming Language', width: 200 },
  {
    field: 'delete', 
    headerName: 'Delete', 
    width: 150, 
    renderCell: (params) => (
      <DeleteButton params={params} apiUrl="http://localhost:3001/eligibility/delete/" />
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

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        title="Programming Languages"
        rows={tableData}
        columns={columns}
        pageSize={10}
      />
    </div>
  );
};

export default CompatibilityTable;
