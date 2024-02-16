import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as XLSX from 'xlsx';

function Table() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/src/DB/db.xlsx');
      const blob = await response.blob();
      const reader = new FileReader();
      
      reader.onload = (event) => {
        const binaryString = event.target.result;
        const workbook = XLSX.read(binaryString, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        
        // Assuming the first row contains headers
        const headers = jsonData[0];
        const rows = jsonData.slice(1);

        const formattedData = rows.map((row) => {
          const rowData = {};
          headers.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });

        setRowData(formattedData);
      };

      reader.readAsBinaryString(blob);
    };

    fetchData();
  }, []);

  const columnDefs = rowData.length > 0 ? Object.keys(rowData[0]).map((key) => ({
    headerName: key,
    field: key
  })) : [];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
      />
    </div>
  );
}

export default Table;