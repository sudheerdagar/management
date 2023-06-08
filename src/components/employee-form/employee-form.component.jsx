import { useState } from "react";
import { addEmployee } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  fname: "",
  lname: "",
  age: "",
  number: "",
  salary: "",
  account: "",
  aadhar: ""
};

export const Employeeform = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fname, lname, age, number, salary, account, aadhar } = formFields;

  const resetformFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === "salary" || name === "number" || name === "aadhar" || name === "account") {
      const numericValue = value.replace(/\D/g, '');
      value = numericValue;
    }

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("this is handle submit");

    await addEmployee(formFields);
    resetformFields();
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="max-w-md p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Add Employee</h2>

        <label className="block">
          First name:
          <input
            type="text"
            placeholder="Enter first name"
            name="fname"
            value={fname}
            required
            onChange={handleChange}
            className="mt-1 p-1 border border-gray-300 rounded-sm w-full"
          />
        </label>

        <label className="block">
          Last name:
          <input
            type="text"
            placeholder="Enter last name"
            name="lname"
            value={lname}
            required
            onChange={handleChange}
            className="mt-1 p-1 border border-gray-300 rounded-sm w-full"
          />
        </label>

        <label className="block">
          Age:
          <input
            type="text"
            placeholder="Enter age"
            name="age"
            value={age}
            required
            onChange={handleChange}
            className="mt-1 p-1 border border-gray-300 rounded-sm w-full"
          />
        </label>

        <label className="block">
          Phone Number:
          <input
            type="tel"
            pattern="[0-9]{10}"
            value={number}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            name="number"
            className="mt-1 p-1 border border-gray-300 rounded-sm w-full"
          />
        </label>

        <label className="block">
          Salary:
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Enter salary"
            name="salary"
            value={salary}
            required
            onChange={handleChange}
            className="mt-1 p-1 border border-gray-300 rounded-sm w-full"
          />
        </label>

        <label className="block">
          ACC_NO:
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Enter account number"
            name="account"
            value={account}
            onChange={handleChange}
            className="mt-1 p-1 border border-gray-300 rounded-sm w-full"
          />
        </label>

        <label className="block">
          AAdhar:
          <input
            type="text"
            pattern="[0-9]*"
            placeholder="Enter Aadhar number"
            name="aadhar"
            value={aadhar}
            onChange={handleChange}
            className="mt-1 p-1 border border-gray-300 rounded-sm w-full"
          />
        </label>

        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4 w-full">
          Add Employee
        </button>
      </div>
    </form>
  );
};
