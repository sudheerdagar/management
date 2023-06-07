import { useContext,useState } from "react";
import { EmployeeContext } from "../../contexts/employee.context";

// eslint-disable-next-line react/prop-types
export const EmployeeContainer = ( {employee} ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isRemoving,setIsRemoving]=useState(false);

    const [editedEmployee, setEditedEmployee] = useState(employee);
    console.log("editedEmployee==>",editedEmployee);
  
    const { edit, remove } = useContext(EmployeeContext);
  
    const handleEdit = () => {
      if (isEditing) {
        // Save the edited employee
        edit(editedEmployee);
      }
      setIsEditing(!isEditing);
    };
  
    const handleRemove = () => {
      if (isRemoving) {
        remove(editedEmployee);
      }
      setIsRemoving(!isRemoving);

    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEditedEmployee({ ...editedEmployee, [name]: value });
    };
  
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {isEditing ? (
            <input
              type="text"
              name="fname"
              value={editedEmployee.fname}
              onChange={handleInputChange}
            />
          ) : (
            editedEmployee.fname
          )}
        </th>
        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="lname"
              value={editedEmployee.lname}
              onChange={handleInputChange}
            />
          ) : (
            editedEmployee.lname
          )}
        </td>
        {/* Render other fields in a similar way */}
        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="number"
              value={editedEmployee.number}
              onChange={handleInputChange}
            />
          ) : (
            editedEmployee.number
          )}
        </td>
          
        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="age"
              value={editedEmployee.age}
              onChange={handleInputChange}
            />
          ) : (
            editedEmployee.age
          )}
        </td>

        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="aadhar"
              value={editedEmployee.aadhar}
              onChange={handleInputChange}
            />
          ) : (
            editedEmployee.aadhar
          )}
        </td>

        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="account"
              value={editedEmployee.account}
              onChange={handleInputChange}
            />
          ) : (
            editedEmployee.account
          )}
        </td>
        <td className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              name="salary"
              value={editedEmployee.salary}
              onChange={handleInputChange}
            />
          ) : (
            editedEmployee.salary
          )}
        </td>




        {/* Render other fields in a similar way */}
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
  
        <td className="px-6 py-4">
          {isRemoving ? (
            <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={handleRemove}>
              Confirm Remove
            </button>
          ) : (
            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleRemove}>
              Remove
            </button>
          )}
        </td>
      </tr>
    );
  };
  