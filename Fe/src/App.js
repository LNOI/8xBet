import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login';
import Document from './components/Documents/Document';
import Content from './components/Content/Content';
import Employee from './components/Employee/Employee';
import Noti from './components/Noti/Noti';

function App() {
  const [page,setPage] = useState(1)
  const [is_admin,setIs_admin] = useState(false)
  return (
    <>
      {
        page ===1 ? <Login setPage={setPage} setIs_admin={setIs_admin}></Login>:null
      }
      
      {
        page ===2 ? <>
        <Document setPage={setPage} ></Document>
        <Content></Content>
        {/* <Employee></Employee> */}
        </>:null
      }
      {
        page ===3 ? <>
        <Document setPage={setPage}></Document>
        <Employee></Employee>
        </>:null
      }
      {
        page ===4 ? <>
        <Document setPage={setPage}></Document>
        <Noti></Noti>
        </>:null
      }
     
    </>
  )
}

export default App;
