// contact form data extraction
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var comment = document.getElementById('comment');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
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
  measurementId: "G-G15E0PJW22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()

window.getData = function(){
    if(fname.value == '' || lname.value == '' || email.value == '' || comment.value == ''){
        alert('Fields Cannot Be Empty')
    }
    else{
        var customer = {
            firstName: fname.value,
            lastName: lname.value,
            email: email.value,
            comment: comment.value,
            time: new Date().getHours() + ":" + new Date().getMinutes(),
        }
        var reference = ref(db, 'contactData/' + fname.value + '/');
        var newRef = push(reference)
        set(newRef, customer)
        // console.log(customer)
        
        fname.value = '';
        lname.value = '';
        email.value = '';
        comment.value = '';
    }
}

var microsoft = document.getElementById('micr');
var jpMorgan = document.getElementById('morg');
var efs = document.getElementById('efs');
var afflux = document.getElementById('affl')

window.imgToGif1 = function(){
    microsoft.src = 'https://cdn.dribbble.com/users/778585/screenshots/4180944/endtagexploration_microsoftdribbble.gif'
}

window.gifToImg1 = function(){
    microsoft.src = 'https://www.pngmart.com/files/4/Microsoft-Logo-PNG-Picture.png'
}

window.imgToGif2 = function(){
    jpMorgan.src = 'https://images.squarespace-cdn.com/content/v1/5feb53185d3dab691b47361b/1609930688940-VT0ZDCO6OG19NU8RXNP4/c70e9-chase_header_blog.gif?format=500w'
}

window.gifToImg2 = function(){
    jpMorgan.src = 'https://logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Emblem.png'
}

window.imgToGif3 = function(){
    efs.src = 'https://www.efsmi.com/images/preloader2.gif'
}

window.gifToImg3 = function(){
    efs.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/EFS_Logo.png/1200px-EFS_Logo.png'
}

window.imgToGif4 = function(){
    afflux.src = 'https://i0.wp.com/aeonenergy.co.nz/wp-content/uploads/2018/07/how-solar-energy-works.gif?fit=1024%2C400&ssl=1'
}

window.gifToImg4 = function(){
    afflux.src = 'https://www.affluxsolutions.com/images/AffluxLogo.jpg'
}

var mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

window.scrollFunction = function() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Request a quote data extraction
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var mobileNum = document.getElementById('Mobile-Number');
var mail = document.getElementById('emailQuote');
var projectType = document.getElementById('projectType');
var budget = document.getElementById('EvaluateBudget');
var maxTime = document.getElementById('time');
var skill = document.getElementById('skill');
var country = document.getElementById('country');
var reqFile = document.getElementById('file');
var message = document.getElementById('message');
var descParent = document.getElementById('descParent');

window.getReqData = function(){
    if(firstName.value == '' || lastName.value == '' || mail.value == '' || mobileNum.value == '' || projectType.value == '' ||
    budget.value == '' || maxTime.value == '' || skill.value == '' || country.value == '' || reqFile.value == '' || message.value == ''){
        alert('Fields Cannot Be Empty');
    }
    else{
        var client = {
            firstName: firstName.value,
            lastName: lastName.value,
            mobileNumber: mobileNum.value,
            email: mail.value,
            projectType: projectType.value,
            budget: budget.value,
            maxTime: maxTime.value,
            skill: skill.value,
            country: country.value,
            reqFile: reqFile.value,
            message: message.value
        }
        var reference = ref(db, 'quotationData/');
        var newRef = push(reference)
        set(newRef, client)
    }
        
        // console.log(client);
        firstName.value = '';
        lastName.value = '';
        mobileNum.value = '';
        mail.value = '';
        projectType.value = '';
        budget.value = '';
        maxTime.value = '';
        skill.value = '';
        country.value = '';
        reqFile.value = '';
        message.value = '';
        
        
        // console.log(client.firstName)
        // console.log(descParent)
        // window.open('requests.html')

        descParent.innerHTML= ''
        descParent.innerHTML = `
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> First Name: </b> <span class = 'px-2'>${client.firstName}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
             <b class = 'text-primary'> Last Name: </b> <span class = 'px-2'>${client.lastName}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
             <b class = 'text-primary'> Contact Number: </b> <span class = 'px-2'>${client.mobileNumber}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> Email: </b><span class = 'px-2'>${client.email}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> Project Type: </b> <span class = 'px-2'>${client.projectType}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> Estimated Budget: </b> <span class = 'px-2'>${client.budget}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> Maximum Allotted Time: </b> <span class = 'px-2'>${client.maxTime}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> Skillset Needed: </b> <span class = 'px-2'>${client.skill}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> Country: </b> <span class = 'px-2'>${client.country}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> Requirements File: </b> <span class = 'px-2'>${client.reqFile}</span>
             </p>
         </li>
         <br>
         <li class = 'my-1 border-bottom border-primary border-opacity-25'>
             <p class = 'fs-5'>
                <b class = 'text-primary'> Message: </b> <span class = 'px-2'>${client.message}</span>
             </p>
         </li>
         <br>
         `
         alert('Your quote has been received!')
}
