import {useEffect,useState}from 'react'

export default function Time({setTimeOut,questionNumber,sayCorrectAnswer}) {
    const [time,setTime]=useState(0);
    

    
    useEffect(()=>{  
        
        
        const interval=setInterval(()=>{
            setTime((prev)=>prev+1);
        },1000);
        return ()=>clearInterval(interval);
        
    },[time,setTimeOut]);
   
    return time;

    
}
