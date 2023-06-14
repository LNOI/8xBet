import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import "./style.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AvtStaff from "../../assets/img/staff.jpg"
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'birth_date',
    headerName: 'Birth date',
    width: 130
   
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 70
   
  },
  {
    field: 'position',
    headerName: 'Position',
    width: 130
  },
  {
    field: 'contact',
    headerName: 'Phone number',
    width: 130
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 70
  },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"BackEnd",gender: "Male" },
  { id: 2, lastName: 'Snow1', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"BackEnd",gender: "Male" },
  { id: 3, lastName: 'Snow2', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"BackEnd",gender: "Male" },
  { id: 4, lastName: 'Snow3', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"Culi dev",gender: "Male" },
  { id: 5, lastName: 'Snow4', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"Culi dev",gender: "Male" },
  { id: 6, lastName: 'Snow5', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"Culi dev",gender: "Male" },
  { id: 7, lastName: 'Snow6', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"Culi dev",gender: "Male" },
  { id: 8, lastName: 'Snow7', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"Culi dev",gender: "Male" },
  { id: 9, lastName: 'Snow8', firstName: 'Jon',birth_date:"1-1-2001", age: 35,contact: '06572343242',position:"Culi dev",gender: "Male" },
];

export default function Employee() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='containerTable'>
    
    <Grid container columns={{ xs: 4, md: 12 }} style={{display:"flex",justifyItems:"center"}}>
    <Grid item xs={10} margin={"auto"} >
    <h2 style={{marginTop:"5%"}}>List Employee</h2>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        onRowClick={()=>{handleClickOpen()}}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{margin:"auto"}}
      />
    </div>
    </Grid>
    </Grid>
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <img style={{width:"50%"}} src={AvtStaff} alt="" srcset="" />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
           
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
         
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="CMND/CCCD"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Birth Date"
         
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type='datetime-local'
         
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}