import { useState } from 'react';
import Modal from 'react-modal';
import { Employeeform } from './components/employee-form/employee-form.component';
import { Employees } from './components/view-employees/view-employees.component';
import { DateComponent } from './components/date-picker/date-picker.component';
import { AttendanceTable } from './components/employee-attendance/employee-attendance';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Rating from './components/rating/rating.component';

Modal.setAppElement('#root');

const App = () => {
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [showRating, setShowRating] = useState(false);

  const openEmployeeForm = () => {
    setShowEmployeeForm(true);
  };

  const closeEmployeeForm = () => {
    setShowEmployeeForm(false);
  };

  const openAttendance = () => {
    setShowAttendance(true);
  };

  const closeAttendance = () => {
    setShowAttendance(false);
  };

  const openEmployeeList = () => {
    setShowEmployeeList(true);
  };

  const closeEmployeeList = () => {
    setShowEmployeeList(false);
  };

  const openRating = () => {
    setShowRating(true);
  };

  const closeRating = () => {
    setShowRating(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-8">
        <div className="m-4">
          <button onClick={openEmployeeForm} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Employee
          </button>
        </div>
        <div className="m-4">
          <button onClick={openAttendance} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Details of Attendance
          </button>
        </div>
        <div className="m-4">
          <button onClick={openEmployeeList} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Employee List
          </button>
        </div>
        <div className="m-4">
          <button onClick={openRating} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Rating
          </button>
        </div>
      </div>

      <Modal
        isOpen={showEmployeeForm}
        onRequestClose={closeEmployeeForm}
        contentLabel="Employee Form"
      >
        <>
          <Employeeform />
          <button onClick={closeEmployeeForm} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Back
          </button>
        </>
      </Modal>

      <Modal
        isOpen={showAttendance}
        onRequestClose={closeAttendance}
        contentLabel="Attendance Details"
      >
        <>
          <DateComponent />
          <AttendanceTable />
          <button onClick={closeAttendance} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Back
          </button>
        </>
      </Modal>

      <Modal
        isOpen={showEmployeeList}
        onRequestClose={closeEmployeeList}
        contentLabel="Employee List"
      >
        <>
          <Employees />
          <button onClick={closeEmployeeList} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Back
          </button>
        </>
      </Modal>

      <Modal
        isOpen={showRating}
        onRequestClose={closeRating}
        contentLabel="Rating"
      >
        <>
          <Rating />
          <button onClick={closeRating} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Back
          </button>
        </>
      </Modal>
      <Footer />
    </>
  );
};

export default App;
