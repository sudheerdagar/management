
import { initializeApp } from "firebase/app";
import { getFirestore,doc, setDoc,collection,updateDoc,deleteDoc,query,where,getDocs} from "firebase/firestore";
import { Timestamp} from 'firebase/firestore';
import dayjs from "dayjs";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

const firebaseConfig = {
    apiKey: "AIzaSyA36zGsLpgApdiwiIyyaZx2r5nuqyXqkRI",
    authDomain: "rising-93b59.firebaseapp.com",
    projectId: "rising-93b59",
    storageBucket: "rising-93b59.appspot.com",
    messagingSenderId: "544642985796",
    appId: "1:544642985796:web:9f95e365c7825476747111"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

/////DATA HANDLING FOR RISING

export const addEmployee=async (employee)=>{
  

  
    const empRef=doc(collection(db,"employees"));
    console.log("empref===>",empRef);
    let obj=employee;
    obj.id=empRef.id;



     try{
         await setDoc(empRef,obj);
     }
     catch(err)
     {
        console.log(err);
     }
    
}

// Edit employee in Firestore
export const editEmployee = async (employee) => {
  try {
    // const db = getFirestore();
    const {id}=employee;
    const employeeRef = doc(db, "employees",id);

    
    await updateDoc(employeeRef, employee);
    console.log("Employee updated successfully");
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};

// Remove employee from Firestore
export const removeEmployee = async (employee) => {
  try {
    // const db = getFirestore();
    const {id}=employee;

   
    const employeeRef = doc(db, "employees",id);

    await deleteDoc(employeeRef);
    console.log("Employee removed successfully");
  } catch (error) {
    console.error("Error removing employee:", error);
  }
};




// Function to create a new attendance record for an employee on a specific date
export const createAttendanceRecord = async (employeeId, date, data) => {
  const attendanceCollectionRef = collection(db, 'employees', employeeId, 'Attendance');
  const attendanceDocumentRef = doc(attendanceCollectionRef);

  const attendanceData = { ...data, date: Timestamp.fromDate(date) };
  
  let obj={...attendanceData,id:attendanceDocumentRef.id}

  await setDoc(attendanceDocumentRef, obj);
};

// Function to update the attendance record for an employee on a specific date
export const updateAttendanceRecord = async (attendance) => {
  const {employeeId,attendanceId}=attendance
  const attendanceDocRef = doc(db, 'employees', employeeId, 'Attendance', attendanceId);
  await updateDoc(attendanceDocRef,attendance);
};

// Function to fetch attendance records for all employees on a specific date
export const fetchAttendanceRecords = async (date) => {
  const attendanceQuery = query(
    collection(db, 'employees'),
    where('Attendance.date', '==', Timestamp.fromDate(date))
  );

  const attendanceSnapshot = await getDocs(attendanceQuery);

  const attendanceRecords = attendanceSnapshot.docs.map((doc) => {
    const employeeId = doc.id;
    const attendanceData = doc.data().Attendance;

    return {
      employeeId,
      ...attendanceData,
    };
  });

  return attendanceRecords;
};


// Function to check if an attendance record exists for an employee on a specific date
export const checkAttendanceRecordExists = async (attendance) => {
  const { employeeId, date } = attendance;
  const startDate = dayjs(date).startOf('day').toDate();
  const endDate = dayjs(date).endOf('day').toDate();
  console.log("startdate==>",startDate);
  console.log("enddate===>",endDate);


  const attendanceCollectionRef = collection(db, 'employees', employeeId, 'Attendance');
  const attendanceQuery = query(attendanceCollectionRef, where('date', '>=', startDate)&&where('date', '<=', endDate));

  const attendanceSnapshot = await getDocs(attendanceQuery);

  if (attendanceSnapshot.size > 0) {
    return attendanceSnapshot.docs[0].data();
  } else {
    const attendanceDocumentRef = doc(attendanceCollectionRef);
    const obj = { ...attendance, attendanceId: attendanceDocumentRef.id, date: Timestamp.fromDate(dayjs(date).toDate()) };
    await setDoc(attendanceDocumentRef, obj);
    return obj;
  }
};

