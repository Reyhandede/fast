import React from 'react'
import logo from "../img/fast.png"
import "../app.css"
import { useHistory ,useParams} from "react-router-dom";
import Start from './Start';


export default function Loading(userName,setUserName,nickName) {
    let history = useHistory();

    setTimeout(function(){ 
        if(!nickName)
        {
            history.push("/start")
        }
        else
        {
            history.push("/container")
        }

     

    }, 3000);




    return (
        <div className="loadingContainer">
    <input  id="loading" type="image" img src = {logo} alt="photo" />
    

   </div>
    )
}
