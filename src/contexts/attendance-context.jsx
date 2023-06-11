// context/AttendanceContext.js
import  { createContext,useState } from 'react';

export const AttendanceContext = createContext();

// eslint-disable-next-line react/prop-types
export const AttendanceProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const value={
    selectedDate,
    setSelectedDate,
  }
 


  return (
    <AttendanceContext.Provider
      value={value}
    >
      {children}
    </AttendanceContext.Provider>
  );
};


