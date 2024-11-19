import AddTask from "./addTask";
import DisplayTask from "./displayTask";
const TodoList=()=>{

    return(
        <>
        <div className="flex flex-col">
           <AddTask/>
           <DisplayTask/>
        </div>
       
        </>
    )
}
export default TodoList;