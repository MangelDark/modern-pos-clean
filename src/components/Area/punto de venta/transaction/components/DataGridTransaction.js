import * as React from 'react';
import { DataGrid  } from '@mui/x-data-grid';
import styles from '../css/datagrid.module.css';


const columns = [
    { field: 'id', headerName: 'ID', flex:1, hide: true},
    {
      field: "details",
      headerName: "ITEM",
      flex:1,
      align:'left',
  
      renderCell: (params) => (
        <div>
          
           <div className={styles['contenedor-detail-datatable-cells']}>
           <p className={styles['textPrimary']}>{params.value.item}</p>
          <p color="textSecondary" className={styles['textSecondary']}>salary: {params.value.salary}</p>
        </div>
        </div>
       
      )
    },
     { field: 'quantity', headerName: 'QUANTITY', flex:1, align:'right',},
     {
      field: 'salesrepresentation',
      headerName: 'SALES REPRESENTATION',
      type: 'number',
      flex:1,
      align:'left',
     },
     {
      field: 'total',
      headerName: 'TOTAL( WITHOUT TAX )',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex:1,
      align:'right',
     },
  ];
  
const rows = [
  {
    id: 1,
    salesrepresentation: 'Snow', 
    item: 'Jon', 
    quantity: 35,
    total:  `$ ${20}`,
    details:{ item: "Job",salary: "$60,000.00"}
  },
  { 
    id: 2, 
    salesrepresentation: 'Snow', 
    item: 'Jon', 
    quantity: 35,
    total:  `$ ${20}`,
    details:{ item: "Job", salary: "$60,000.00"}
  },
  { 
    id: 3, 
    salesrepresentation: 'Snow', 
    item: 'Jon', 
    quantity: 35,
    total:  `$ ${20}`,
    details:{ item: "Job", salary: "$60,000.00"}
  },
  { 
    id: 4, 
    salesrepresentation: 'Snow', 
    item: 'Jon', 
    quantity: 35,
    total:  `$ ${20}`,
    details:{ item: "Job", salary: "$60,000.00"}
  },
  { 
    id: 5, 
    salesrepresentation: 'Snow', 
    item: 'Jon', 
    quantity: 35,
    total:  `$ ${20}`,
    details:{ item: "Job", salary: "$60,000.00"}
  },
  { 
    id: 6, 
    salesrepresentation: 'Snow', 
    item: 'Jon', 
    quantity: 35,
    total:  `$ ${20}`,
    details:{ item: "Job", salary: "$60,000.00"}
  },
  { 
    id: 7, 
    salesrepresentation: 'Snow', 
    item: 'Jon', 
    quantity: 35,
    total:  `$ ${20}`,
    details:{ item: "Job", salary: "$60,000.00"}
  },
  { 
    id: 8, 
    salesrepresentation: 'Snow', 
    item: 'Jon', 
    quantity: 35,
    total:  `$ ${20}`,
    details:{ item: "Job", salary: "$60,000.00"}
  },
  
];



 const DataGridTransaction = () =>  {
  return (
    <div style={{ height: '100%', width: '100%'}}>
      <DataGrid         
        rows={rows}
        columns={columns}
        hideFooter
        rowHeight={60}
      />
    </div>
  );
}

export default DataGridTransaction;