
import { useContext } from 'react';
import { AttendanceContext } from '../../contexts/attendance-context';
import { DatePicker } from '@mui/x-date-pickers';

import { useState,useEffect} from 'react';
import dayjs from 'dayjs';

const currentDate = dayjs();
// const formattedDate = currentDate.format('YYYY-MM-DD');
 



export const DateComponent = () => {


  const [date,setDate]=useState(currentDate);
  const {setSelectedDate}=useContext(AttendanceContext);

  useEffect(()=>{
      
    setSelectedDate(date);
  },[date])
  



  // Function to handle date selection and fetch attendance data for the selected date

  return (
    


    <DatePicker label="Enter Date"  value={date} onChange={(newdate)=>{
      setDate(newdate);
    }}/>
    // <input type="date" onChange={(e) => handleDateChange(e.target.value)} />
  );
};


