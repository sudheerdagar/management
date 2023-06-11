// components/AttendanceTable.js
import { useContext } from 'react';
import {EmployeeContext} from '../../contexts/employee.context';
import { AttendanceContainer } from '../attendance-container/attendance-container.component';
// import { AttendanceContext } from '../../contexts/attendance-context';

export const AttendanceTable = () => {
  
  const {employees}=useContext(EmployeeContext);
//   const {selectedDate}=useContext(AttendanceContext);
  console.log("i am running in table");




  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        FIRST NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        LAST NAME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        NUMBER
                    </th>
                    <th scope="col" className="px-6 py-3">
                        IN_TIME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        OUT_TIME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        OVERTIME
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody>
            {
              employees.map((employee)=>{
                 return(<AttendanceContainer key={employee.id} employee={employee}/>)
               
              })
            }
        </tbody>
        </table>
        </div>
 
  );
};


 