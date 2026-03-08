import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import "./Components.css";

function SmartTaskManager(){
    const [tasks, setTasks] = useState([])
    const [completed, markCompleted]=useState([])
    const [inputValue, setinputvalue]= useState("")
    const [totalTask,settotalTask]=useState(0)
    const [totalCompleted,settotoalCompleted]=useState(0)
    const [counter,setcounter]=useState(0)
    useEffect(()=>{
        settotoalCompleted(completed.length)
    },[completed])
    useEffect(()=>{
        settotalTask(tasks.length)
    },[tasks])
    function handleDelete(id){
        setTasks(prevTasks=>prevTasks.filter(task=> task.id!==id))    
    };
    function handleCompleted(id){
        // filter out this id from tasks 
        const t=tasks.find(task => task.id == id)
        // add this id to completed using markCompleted 
        markCompleted(prevcompleted=>[...prevcompleted,t])
        // delete this from tasks 
        setTasks(prevTasks=>prevTasks.filter(task=>task.id!=id))
    }
    function increment(){
        setcounter(prev=> prev+1)
    }
    return (
        <>
            <div className="heading">
                <h1>🤓Smart Task Manager🤓</h1>
                <p>Help you organize, prioritize, and track</p>
            </div>

            <div className="input">
                <input
                    type="text"
                    placeholder="Enter your task"
                    className="taskinput"
                    value={inputValue}
                    onChange={(e)=>setinputvalue(e.target.value)}
                />
                <button 
                className="addtask"
                onClick={() => {

                    if (inputValue.trim() === "") return                     

                    const newTask = {
                        id:Date.now(),
                        TaskName: inputValue
                    }

                    setTasks(prevTasks=>[...prevTasks, newTask])
                    setinputvalue("")}}>
                    Add Task
                    </button>
                <p>total pending Tasks :{totalTask}</p>

            </div>

            <ul>
                {tasks.length > 0 && (
                    <div className="tasksitems">
                        {tasks.map(task => (
                            <TaskItem
                                key={task.id}
                                title={task.TaskName}
                                id={task.id}
                                onDelete={handleDelete}
                                onCompletion={handleCompleted}
                            />
                        ))}
                    </div>
                )}
                
            </ul>
            
                {completed.length > 0 &&(
                    <div className="completedTasks">
                        <p> Completed tasks</p>
                        <ul>
                            {completed.map((item)=>(
                                <li key={item.id} style={{listStyle:"Number"}} >{item.TaskName}</li>
                            ))}
                        </ul>
                        <p>Completed Tasks :{totalCompleted}</p>
                    </div>
                )} 
            
            <button onClick={increment}>button: {counter}</button>
        </>
    )
}

export default SmartTaskManager
