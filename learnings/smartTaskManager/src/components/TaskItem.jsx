function TaskItem(props){
    console.log("TaskItem executed")
    return (
        <>
            <li style={{border:"solid 2px black", padding:"5px", margin:"5px", listStyle:"none"}}>
                {props.title} 
                <button onClick={()=> props.onDelete(props.id)}> Delete </button>
                <button onClick={()=> 
                    props.onCompletion(props.id)
                }>Completed</button>
            </li>
            
        </>
)
}

export default TaskItem