import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask, deleteTask, toggleComplete } from "../features/project/projectSlice"

function ProjectItem({ project }) {

  const dispatch = useDispatch()
  const [taskText, setTaskText] = useState("")

  const handleAddTask = () => {
    if (taskText.trim() === "") return

    dispatch(addTask({
      projectId: project.id,
      taskText
    }))

    setTaskText("")
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{project.name}</h3>

      <input
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="New task"
      />

      <button onClick={handleAddTask}>
        Add Task
      </button>

      <ol>
        {project.tasks.map(task => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.text}

            <button
              onClick={() =>
                dispatch(deleteTask({
                  projectId: project.id,
                  taskId: task.id
                }))
              }
            >
              Delete
            </button>

            <button
              onClick={() =>
                dispatch(toggleComplete({
                  projectId: project.id,
                  taskId: task.id
                }))
              }
            >
              Completed
            </button>

          </li>
        ))}
      </ol>
    </div>
  )
}

export default ProjectItem