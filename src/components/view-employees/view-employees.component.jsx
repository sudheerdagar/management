
import { EmployeeContext } from "../../contexts/employee.context";
import { useContext } from "react";

import { EmployeeContainer } from "../employee-container/employee-container.component"
export const Employees=()=>{

    const {employees}=useContext(EmployeeContext);
    console.log("i am inside view employees==>",employees);

    


      

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
                        AGE
                    </th>
                    <th scope="col" className="px-6 py-3">
                        AADHAR
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ACCOUNT_NO
                    </th>
                    <th scope="col" className="px-6 py-3">
                        SALARY
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Edit
                    </th> 
                    <th scope="col" className="px-6 py-3">
                    Remove
                    </th> 
                </tr>
            </thead>
            <tbody>
            {employees.map((employee)=>{
                const {id}=employee
                console.log("id===>",id);

            
                return (<EmployeeContainer key= {id} employee={employee}/>)
            })


            }
       


        </tbody>
        </table>
        </div>
 
    )
}