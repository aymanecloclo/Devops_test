import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../actions/actions";

const DisplayTask = () => {
    const todos = useSelector((state) => state.todos);
    const Dispatch=useDispatch();
    const handleDelete=(id)=>{
          Dispatch(deleteTask(id));
    }
    return (
        <>
            <ul className="mt-5 menu bg-white shadow-md rounded-lg p-2 w-64 border border-gray-300">
                {/* task item */}
                {todos.map((todo) => (
                    <li key={todo.id} className="flex-row items-center flex-nowrap justify-between border-b border-gray-200 py-1 px-3 hover:bg-gray-100">
                        <a className="text-gray-700 text-nowrap">{todo.text}</a>
                        <button onClick={handleDelete(todo.id)} className=" cursor-pointer btn btn-error btn-sm bg-red-500 text-white hover:bg-red-600 border-none">
                            remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DisplayTask;


