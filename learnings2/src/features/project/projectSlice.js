import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    projects:[]
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id:Date.now(),
        name: action.payload,
        tasks:[]
      }
      state.projects.push(newProject)
    },

    addTask: (state, action) => {
    const { projectId, taskText } = action.payload

        const project = state.projects.find(
            (p) => p.id === projectId
        )

        if (project) {
            const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
            }

            project.tasks.push(newTask)
        }
    },

    deleteTask: (state, action) => {
      const {projectId, taskId}=action.payload

      const project= state.projects.find(p => p.id === projectId)
      if (project){
        project.tasks=project.tasks.filter((t)=>t.id !== taskId)
      }
      
    },

toggleComplete: (state, action) => {
  const { projectId, taskId } = action.payload

  const project = state.projects.find(p => p.id === projectId)

  if (project) {
    const task = project.tasks.find(t => t.id === taskId)

    if (task) {
      task.completed = !task.completed
    }
  }
}
  }
})

export const { addProject, addTask, deleteTask, toggleComplete } = projectSlice.actions
export default projectSlice.reducer