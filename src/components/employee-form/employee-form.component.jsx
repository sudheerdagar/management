import { useState } from "react";
import { addEmployee } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  fname: "",
  lname: "",
  age: "",
  number: "",
  salary:"",
  account:"",
  aadhar:""
};

export const Employeeform = () => {
  

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fname, lname, age,number,salary,account,aadhar} = formFields;


  const resetformFields = () => {
    setFormFields(defaultFormFields);
  };




  const handleChange = (event) => {
     
   

    let { name, value } = event.target;
    if(name=="salary"||name==="number"||name==="aadhar"||name==="account")
    {
        const numericValue = value.replace(/\D/g, '');
       
        value=numericValue;
    }

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit= async(event)=>{
    event.preventDefault();
    console.log("this is handle submit");
        
    
    await addEmployee(formFields);
      resetformFields();
      
    

  }




  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          type="text"
          placeholder="enter-first-name"
          name="fname"
          value={fname}
          required
          onChange={handleChange}
        ></input>
      </label>
      <br />

      <label>
        Last name:
        <input
          type="text"
          placeholder="enter-last-name"
          name="lname"
          value={lname}
          required
          onChange={handleChange}
        ></input>
      </label>
      <br />

      <label>
        Age:
        <input
          type="text"
          placeholder="enter-age"
          name="age"
          value={age}
          required
          onChange={handleChange}
        ></input>
      </label>
      <br />

      <label>
        Phone Number:
        <input
          type="tel"
          pattern="[0-9]{10}"
          value={number}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          name="number"
        />
      </label>
      <br/>

      <label>
        Salary:
        <input
          type="text"
          pattern="[0-9]*"
          placeholder="enter-age"
          name="salary"
          value={salary}
          required
          onChange={handleChange}
        ></input>
      </label>
      <br/>
      
      <label>
        ACC_NO:
        <input
          type="text"
          pattern="[0-9]*"
          placeholder="enter-account-number"
          name="account"
          value={account}
          onChange={handleChange}
        ></input>
      </label>
      <br/>
       
      <label>
        AAdhar:
        <input
          type="text"
          pattern="[0-9]*"
          placeholder="enter-aadhar-number"
          name="aadhar"
          value={aadhar}
          onChange={handleChange}
        ></input>
      </label>
      <br/>


      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
     add_employee
</button>

    </form>
  );
};
