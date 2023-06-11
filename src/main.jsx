import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { EmployeeProvider } from './contexts/employee.context.jsx';
import { AttendanceProvider } from './contexts/attendance-context.jsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
    
   
    <EmployeeProvider>
    <AttendanceProvider>
    <App/>
    </AttendanceProvider>
    
    </EmployeeProvider>
    </LocalizationProvider>
  </React.StrictMode>
)
