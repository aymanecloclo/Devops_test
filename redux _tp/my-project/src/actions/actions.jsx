
 export const handleAdd=(value)=>{
   return  {
    type:'add_task',
    playload:value
   };
}
  
 export const deleteTask=(id)=>{
    return  {
     type:'remove_task',
     playload:id
    };
 }
   