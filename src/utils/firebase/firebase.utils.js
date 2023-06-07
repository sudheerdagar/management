
import { initializeApp } from "firebase/app";
import { getFirestore,doc, setDoc,collection,updateDoc,deleteDoc} from "firebase/firestore";

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
    console.log("hioiiiii");

  
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
