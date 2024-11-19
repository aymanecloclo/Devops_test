import { useDispatch } from "react-redux";
import { handleAdd } from "../actions/actions"; 
import { useState,useRef } from "react";
const AddTask=()=>{
    const  refTask=useRef();
    const Dispatch=useDispatch();
   const [valueTask,setValueTask]=useState("");
  const handleAdd=(e)=>{
       e.preventDefault();
        const newValue = refTask.current.value; 
        setValueTask(newValue); 
        
  }

    return(
        <>
       <div className="join">
        <input ref={refTask} className="input input-bordered join-item" placeholder="Email" />
        <button onClick={(e)=>handleAdd(e)} className="btn join-item rounded-r-full">add Task</button>
      </div>
       
        </>
    )
}

export default AddTask;