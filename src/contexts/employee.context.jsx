import { createContext, useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import {
  db,
  removeEmployee,
  editEmployee,
  addEmployee
} from "../utils/firebase/firebase.utils";

export const EmployeeContext = createContext({
  employees: [],
  setEmployees: () => {},
  add: async() => {},
  edit: async() => {},
  remove: async() => {},
});

// eslint-disable-next-line react/prop-types
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "employees"), (snapshot) => {
      const fetchedEmployees = snapshot.docs.map((doc) => doc.data());

      setEmployees(fetchedEmployees);
    });

    return unsubscribe;
  }, []);

 


  const edit = async (employee) => {
    try {
      await editEmployee(employee);
    } catch (err) {
      console.log("error editing the employee", err);
    }
  };

  const remove = async (employee) => {
    console.log("i am inside context remove employee==>",employee)
    try {
      await removeEmployee(employee);
    } catch (err) {
      console.log("error removing the employee", err);
    }
  };

  const add = async (employee) => {
    try {
      await addEmployee(employee);
    } catch (err) {
      console.log("error removing the employee", err);
    }
  };

  const value = { employees, setEmployees, edit, remove,add };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};
