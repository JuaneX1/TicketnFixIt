
const firebaseConfig = {//Configuration of Project Key
  apiKey: "AIzaSyBHK2wxiv3mnnlzgLgpJGF_VFzNi8eyBdg",
  authDomain: "ticketnfixit.firebaseapp.com",
  projectId: "ticketnfixit",
  storageBucket: "ticketnfixit.appspot.com",
  messagingSenderId: "773980924474",
  appId: "1:773980924474:web:22988a75410ea232322303",
  measurementId: "G-22WP4RJKK8"
};

window.firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

let button = document.getElementById("button");

button.addEventListener("click", function(){

  //get the values which the user types
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  if (name =="" || phone == "" || address == ""){
    alert("Please enter the fields");
  }
  else{//Create object to database
    const ref = database.collection("User");
    const data = {//Add data
      name: name,
      phone: phone,
      address: address,
    }
    ref.add(data)
  }
})