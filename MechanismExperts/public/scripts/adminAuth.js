// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKvYfqjPO5TqObA3W9zxq-u3E4L-smLSU",
  authDomain: "mechanism-experts.firebaseapp.com",
  databaseURL: "https://mechanism-experts-default-rtdb.firebaseio.com",
  projectId: "mechanism-experts",
  storageBucket: "mechanism-experts.appspot.com",
  messagingSenderId: "513342823559",
  appId: "1:513342823559:web:452358db74a5008429ac22",
  measurementId: "G-G15E0PJW22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();

window.login = function () {
  var adminEmail = document.getElementById("adminEmail");
  var adminPassword = document.getElementById("adminPassword");
  if (adminEmail.value != "" || adminPassword.value != "") {
    var adminObj = {
      adminEmail: adminEmail.value,
      adminPassword: adminPassword.value,
    };
    adminEmail.value = "";
    adminPassword.value = "";
    signInWithEmailAndPassword(
      auth,
      adminObj.adminEmail,
      adminObj.adminPassword
    )
      .then((userCredential) => {
        const user = userCredential.user;
        //   adminObj.id = user.uid;
        //   var reference = ref(db, "admins/" + adminObj.id + "/");
        //   set(reference, adminObj);
        alert("The admin has been logged in successfully");
        window.location.href = "../pages/adminPanel.html";
        // Signed in
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error, errorCode, errorMessage);
      });
  } else {
    alert("Fields cannot be empty");
  }
};

window.getUsersData = function () {
  var dataParentUsers = document.getElementById("dataParent");
  var reference = ref(db, "contactData/");
  onValue(reference, function (dataFromDb) {
    var data = Object.values(dataFromDb.val());
    dataParentUsers.innerHTML = "";
    for (var i = 0; i < data.length; i++) {
      dataParentUsers.innerHTML += `
    <tr>
        <td class='text-white'>
            
            <p class='fs-5'>${data[i].firstName}</p>
            
        </td>
        <td class='text-white'>
            
            <p class='fs-5'>${data[i].lastName}</p>
            
        </td>
        <td class='text-white'>
            
            <p class='fs-5'>${data[i].email}</p>
            
        </td>
        <td class='text-white'>
            
            <p class='fs-5'>${data[i].comment}</p>
            
        </td>
    </tr>
    `;
    }
  });
};
getUsersData();

window.getQuoteData = function () {
  var reference = ref(db, "quotationData/");
  var dataParent = document.getElementById("main");
  onValue(reference, function (dataFromDb) {
    var quoteData = Object.values(dataFromDb.val());
    dataParent.innerHTML = "";
    for (var i = 0; i < quoteData.length; i++) {
      dataParent.innerHTML += `
         <div class = 'p-5 mb-5 border border-3 border-warning'>
                <h2 class = 'text-center text-warning'>Quote Number: <span class = "text-success fw-bolder">${i}</span></h2>
                <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> First Name: </b> <span class = 'px-2 text-white'>${quoteData[i].firstName}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                <b class = 'text-primary'> Last Name: </b> <span class = 'px-2 text-white'>${quoteData[i].lastName}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                <b class = 'text-primary'> Contact Number: </b> <span class = 'px-2 text-white'>${quoteData[i].mobileNumber}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> Email: </b><span class = 'px-2 text-white'>${quoteData[i].email}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> Project Type: </b> <span class = 'px-2 text-white'>${quoteData[i].projectType}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> Estimated Budget: </b> <span class = 'px-2 text-white'>${quoteData[i].budget}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> Maximum Allotted Time: </b> <span class = 'px-2 text-white'>${quoteData[i].maxTime}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> Skillset Needed: </b> <span class = 'px-2 text-white'>${quoteData[i].skill}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> Country: </b> <span class = 'px-2 text-white'>${quoteData[i].country}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> Requirements File: </b> <span class = 'px-2 text-white'>${quoteData[i].reqFile}</span>
                </p>
            </li>
            <br>
            <li class = 'my-1 border-bottom border-primary border-opacity-25 mb-5'>
                <p class = 'fs-5'>
                    <b class = 'text-primary'> Message: </b> <span class = 'px-2 text-white'>${quoteData[i].message}</span>
                </p>
            </li>
         </div>
         <br>
         `;
    }
  });
};
getQuoteData();

window.logout = function () {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("Signed out successfully...");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};
