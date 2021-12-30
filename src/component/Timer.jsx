import React, { useEffect, useState } from "react";

const Timer=()=>{
    const [time,setTime]=useState();
    const[start,setStart]=useState(0);
    const [end,setEnd]=useState();
    useEffect(()=>{
        if(start===end){
            return setStart(0);
        }
        
       if(start !==0){
           setStart((p)=>{
               return p+1;
           });
       }
    },[start])
   
    const timechange_handler=(e)=>{
        // console.log(e.target.value)
        const {name,value}=e.target;
        setTime({...time,[name]:value});
    }

    const finalhandle=()=>{
        let a=Number( time.start_time)
        let b=Number( time.end_time)
        setStart(a);
        setEnd(b);
    }
    return(
        <>
        <h1>Timer</h1>
        <label>Start Time</label>
        <input type="Number" name="start_time" id="" placeholder="enter start time in second" onChange={timechange_handler} /><br />
        <label >End Time</label>
        <input type="Number" name="end_time" id="" placeholder="enter end time in second" onChange={timechange_handler}/>
        <button onClick={finalhandle}>Start Timer</button>
         <h1>{start}</h1>
        </>
    )
}

export {Timer};