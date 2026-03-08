import { useState } from 'react'
import ProjectList from "./components/ProjectList"
import { useSelector, useDispatch } from 'react-redux'
import { addProject } from './features/project/projectSlice'

function App() {

  const projects = useSelector(state => state.project.projects)
  const dispatch = useDispatch()

  const [projectName, setProjectName] = useState("")

  const handleAddProject = () => {
    if (projectName.trim() === "") return

    dispatch(addProject(projectName))
    setProjectName("")
  }

  return (
    <div>
      <h1>Project Tracker</h1>

      <input
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder='Your Project Name'
      />

      <button onClick={handleAddProject}>
        Add Project
      </button>

      <ProjectList projects={projects} />
    </div>
  )
}

export default App