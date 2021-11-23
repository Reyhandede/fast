import React from 'react'
import logo from "../img/fast.png"
import "../app.css"
import { useHistory ,useParams} from "react-router-dom";
import Start from './Start';


export default function Loading(username,setUsername,nickName) {
    let history = useHistory();

    setTimeout(function(){ 

        !username && !nickName ? (<Start 
            username={username}
            setUsername={setUsername}
            
            />):( history.push("/container"))

    }, 3000);




    return (
        <div className="loadingContainer">
    <input  id="loading" type="image" img src = {logo} alt="photo" />
    

   </div>
    )
}
