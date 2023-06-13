/* eslint-disable react/prop-types */
import { AttendanceContext } from "../../contexts/attendance-context";
import { useContext,useState,useEffect} from "react";
import { checkAttendanceRecordExists,updateAttendanceRecord} from "../../utils/firebase/firebase.utils";
import dayjs from 'dayjs';



export  const AttendanceContainer=({employee})=>{
  const {selectedDate}=useContext(AttendanceContext);

  const [isEditing, setIsEditing] = useState(false);
   
 

  const defaultAttendance={
      fname:employee.fname,
      lname:employee.lname,
      number:employee.number,
      in_time:null,
      out_time:null,
      overtime:null,
      employeeId:employee.id,
      date:selectedDate,
      attendanceId:null,
      date2:dayjs(selectedDate).toDate().toLocaleDateString()
  }

  const [editedAttendance,setEditedAttendance]=useState(defaultAttendance);

  useEffect(()=>{
    const fetch=async()=>{
       const result=await checkAttendanceRecordExists(defaultAttendance);
       setEditedAttendance(result);
    }
    fetch();
  },[selectedDate])

 
 



  const handleEdit = () => {
    if (isEditing) {
      // Save the edited employee
      updateAttendanceRecord(editedAttendance);
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedAttendance({ ...editedAttendance, [name]: value });
  };

    


    return(
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {isEditing ? (
          <input
            type="text"
            name="fname"
            value={editedAttendance.fname}
            onChange={handleInputChange}
          />
        ) : (
          editedAttendance.fname
        )}
      </th>
      <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="lname"
              value={editedAttendance.lname}
              onChange={handleInputChange}
            />
          ) : (
            editedAttendance.lname
          )}
        </td>

        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="number"
              value={editedAttendance.number}
              onChange={handleInputChange}
            />
          ) : (
            editedAttendance.number
          )}
        </td>

        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="in_time"
              value={editedAttendance.in_time}
              onChange={handleInputChange}
            />
          ) : (
            editedAttendance.in_time
          )}
        </td>

        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="out_time"
              value={editedAttendance.out_time}
              onChange={handleInputChange}
            />
          ) : (
            editedAttendance.out_time
          )}
        </td>

        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="overtime"
              value={editedAttendance.overtime}
              onChange={handleInputChange}
            />
          ) : (
            editedAttendance.overtime
          )}
        </td>
      
      <td className="px-6 py-4">
        {isEditing ? (
          <button onClick={handleEdit} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Save
          </button>
        ) : (
          <button onClick={handleEdit} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Edit
          </button>
        )}
      </td>

      </tr>

    
    )
}