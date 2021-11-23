import {useEffect,useState}from 'react'

export default function Time({setTimeOut,questionNumber,sayCorrectAnswer}) {
    const [time,setTime]=useState(30);
    

    
    useEffect(()=>{  
        
        if(time === 0) return setTimeOut(true);
        const interval=setInterval(()=>{
            setTime((prev)=>prev-1);
        },1000);
        return ()=>clearInterval(interval);
        
    },[time,setTimeOut]);
    useEffect(()=>{
        setTime(30);
    },[questionNumber]);
    return time;

    
}
