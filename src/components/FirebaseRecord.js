
import firebase from "../firebase/firebase";
export default function Deneme(id, liste, c, w, userName, time,) {

  var md5 = require('md5');

  let oCode = md5(md5(id));
  let pCode = md5(id + time)


  const userRef = firebase.database().ref(`exams/${oCode}/users/${pCode}`);

  /*liste.forEach(function myFunction(item, index ) {
    for (let [key, value] of Object.entries(liste[index])) {
      console.log(index)
      console.log(key, value);
    
    
      console.log(userDb)
    }
  
  }) */


  const values =
  {


    "token": md5(md5(id)),
    "name": userName,

    "result": {
      "correct": c,
      "wrong": w,
      "time": time
    },
    "answers": liste
  }

  userRef.orderByChild("users")

    .once("value", (snap) => {

      userRef.push().set(values);
      console.log(snap.val());


    })

}
