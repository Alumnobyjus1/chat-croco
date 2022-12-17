
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
     apiKey: "AIzaSyCC5HQ_-7Y_b4JnJinBbItE7xR32xT-1Tk",
     authDomain: "croco-4822a.firebaseapp.com",
     databaseURL: "https://croco-4822a-default-rtdb.firebaseio.com",
     projectId: "croco-4822a",
     storageBucket: "croco-4822a.appspot.com",
     messagingSenderId: "1028757133460",
     appId: "1:1028757133460:web:ef50bfffbdafc1585a7c81",
     measurementId: "G-2V4TF5EYW7"
   };
   
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "hola "+user_name+"!";  
  
    function addRoom(){    
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location.replace("kwitter_page.html");
      
      }
      
  
  function getData() 
  {firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
  
      //Final del código
      });});}
  
  getData();
  function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location.replace("index.html");
      
  }
  
  function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location.replace("kwitter_page.html");
  }
  
      