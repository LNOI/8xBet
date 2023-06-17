import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import "./style.css"
import { Button } from '@mui/material';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'event', headerName: 'Event', width: 300 },
  { field: 'description', headerName: 'Description', width: 800 },
];


const rows = [
  { id: 1, event: "Hội nghị phát triển phần mềm 2023", description:"Nội dung: Hội nghị phát triển phần mềm 2023 là một sự kiện quan trọng trong lĩnh vực công nghệ thông tin, thu hút sự tham gia của các chuyên gia hàng đầu từ khắp nơi trên thế giới."},
  { id: 2, event: "Ra mắt phiên bản mới của ngôn ngữ lập trình Python", description:"Python 4.0 - Phiên bản mới với nhiều tính năng đột phá"},
  { id: 3, event: "Công ty công bố ứng dụng di động mới", description:"Ra mắt ứng dụng di động mới có tên là XYZ Mobile,"},
  { id: 4, event: "Chúc mừng sinh nhật Leader Hop", description:"Cống hiện 10 năm của anh trong quá trình phát triển công ty"},
  { id: 5, event: "Toàn bộ nhân viên 8XBET bị công an bắt", description:"Toàn bộ nhân viên 8XBET bị công an bắt vì ko kịp deadline"},
];

export default function Noti() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [event, setEvent] = React.useState("");
  const [description,setDescription] = React.useState("");

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
    <h2 style={{marginTop:"5%"}}>Notification</h2>
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid
        rows={rows}
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
    <Button onClick={handleClickOpen} color='primary'>Create Event</Button>
    </Grid>
    </Grid>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          {/* <img style={{width:"50%"}} src={AvtStaff} alt="" srcset="" /> */}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.email)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="event"
            label="event"
            onChange={(e)=>setEvent(e.target.value)}
            value={event}
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            value={description}
            fullWidth
            onChange={(e)=>setDescription(e.target.value)}
            variant="standard"
          />
        
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create/Send event</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}