import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import firebase from "../firebase/firebase";

function Deneme() {



  const submitHandler = (event) => {
    event.preventDefault();

    const userRef = firebase.database().ref("reyhan/");
  const  values = [
        {
            "user":{
              "token" : "token",
              "name" : "user nick or name",
            },
            "result":{
              "correct":2,
              "wrong":1,
              "time":60
            },
            "answers":[1,0,2]
          }
    ]

          userRef.orderByChild("user")
          
          .once("value", (snap) => {
        
            userRef.push().set(values);
            
          
        })
    
  };

  return (
    <div>
     
       
          
      

       
    </div>
  );
}

export default Deneme;