
import './App.css'
// import { Employeeform } from './components/employee-form/employee-form.component';
// import { Employees } from './components/view-employees/view-employees.component';
import { DateComponent } from './components/date-picker/date-picker.component'
import { AttendanceTable } from './components/employee-attendance/employee-attendance'



const  App=()=> {
     


  return (
    <div>
    <DateComponent/>
    <AttendanceTable/>
    </div>
    )


    

// {/* <div className="text-center">
//       <div className="w-full">
//         <h1 className="m-4 text-4xl font-extrabold text-blue-700">Employee form</h1>
//       </div>

//       <Employeeform />

//       <div>
//         <h1 className="m-4 text-4xl font-extrabold text-blue-700">Employee List</h1>
//       </div>
//       <Employees/>
      
//     </div> */}
  
}

export default App
