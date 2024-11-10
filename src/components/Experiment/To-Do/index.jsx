import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { addTodo,deleteTodo,clearTodos } from "../../../redux/ToDoList/ToDo";


export default function Index () {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todo.List)
    const [todo, setTodo] = useState(''); 
    console.log(todoList)
    const handleAddTodo = () =>{
        if(todo){
            dispatch(addTodo({id: Date.now(),   text:todo}));
            setTodo('');
        }

    }

    const handleDelete = (id) =>{
        dispatch(deleteTodo(id));
    }

    const handleClear = () =>{
        dispatch(clearTodos());
    }

    return(
        <>
            <div className="container text-center d-flex flex-column align-items-center">
                <h1>
                    To Do List 
                </h1>
                <div className="input-group mb-3 w-50 ">
                    <input type="text" className="form-control" placeholder="Add new Todo" aria-label="Recipient's username" aria-describedby="button-addon2" value={todo} onChange={(e)=> setTodo(e.target.value)} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleAddTodo}>Add</button>
                </div>
                <div className="container w-50">
                    {
                        todoList.map((list)=>{
                            return <div key={list.id} className="d-flex flex-row align-items-center justify-content-between border p-2 mt-2">
                            <p>{list.text}</p>
                            <button className="btn btn-danger" onClick={()=>handleDelete(list.id)}><FontAwesomeIcon  icon={faDeleteLeft} /></button>
                        </div>}
                        )
                    }

                    
                </div>
                <button className="btn btn-danger m-3" onClick={handleClear} >clear All</button>
            </div>
        </>
    )
}