
import './App.css'
import { Employeeform } from './components/employee-form/employee-form.component';
import { Employees } from './components/view-employees/view-employees.component';



const  App=()=> {
     


  return (
    

<div className="text-center">
      <div className="w-full">
        <h1 className="m-4 text-4xl font-extrabold text-blue-700">Employee form</h1>
      </div>

      <Employeeform />

      <div>
        <h1 className="m-4 text-4xl font-extrabold text-blue-700">Employee List</h1>
      </div>
      <Employees/>
      {/* Render Employee List Component */}
    </div>
  )
}

export default App
