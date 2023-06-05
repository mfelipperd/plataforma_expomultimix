import { GridColDef } from "@mui/x-data-grid";

const columnsDataGrid: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    
    {
      field: 'phone',
      headerName: 'telefone',
      width: 110,
      editable: true,
    },
    {
      field: 'cnpj',
      headerName: 'CNPJ',
      width: 150,
      editable: true,
    },
    {
      field: 'enterpriseName',
      headerName: 'Nome da empresa',
      width: 160,
    },
    {
      field: 'city',
      headerName: 'Ciedade/Estado',
      width: 150,
    },
    {
      field: 'marketing',
      headerName: 'Como soube da feira?'
      
    },
    { field: 'id', headerName: 'ID', width: 90 },
  ];

  export default columnsDataGrid;