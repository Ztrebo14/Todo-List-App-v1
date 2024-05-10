import React, { useContext, useState } from 'react'
import '../styles/DisplayTask.css'
import TaskContext from '../context/TaskContext'

const DisplayTask = () => {
  const { tasks, updateTaskStatus, updateTaskContent, deleteTask } = useContext(TaskContext)
  const [ editingTaskId, setEditingTaskId ] = useState(null)
  const [ editedTaskContent, setEditedTaskContent] = useState('')
  
  const handleTaskStatus = (id) => {
    updateTaskStatus(id)
  }

  const handleEditContent = (task) => {
    setEditingTaskId(task.id)
    setEditedTaskContent(task.taskContent)
  }

  const handleCancelEdit = () => {
    setEditingTaskId(null)
    setEditedTaskContent('')
  }

  const handleSaveEdit = (taskId) => {
    updateTaskContent(taskId, editedTaskContent)
    setEditingTaskId(null)
    setEditedTaskContent('')
  }

  const handleKeyDown = (e, taskId) => {
    if (e.key === 'Enter') {
      handleSaveEdit(taskId)
    }
  }

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId)
  }

  const isEditing = (taskId) => {
    return taskId === editingTaskId
  }

  return (
    <>
    <div className="displaytask-comp-container">
        {tasks.map((task) => (
          <ul key={task.id}>
            { isEditing(task.id) ? (
              <>
                <li>
                  <input
                    type="text"
                    value={editedTaskContent}
                    onKeyDown={(e) => handleKeyDown(e, task.id)}
                    onChange={(e) => setEditedTaskContent(e.target.value)}
                  />
                </li>
                <li>
                  <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </li>
              </>
            ) : (
              <>
                <div className="taskcontent-status">
                  <li><p>{task.taskContent}</p></li>
                  <li>
                    <input 
                      type="checkbox" 
                      checked={task.isTaskDone} 
                      onChange={() => handleTaskStatus(task.id)} 
                      style={{
                        height: '20px',
                        width: '20px'
                      }}
                    />
                  </li>
                </div>
                <div className="edit-delete-function">
                  <li><button onClick={() => handleEditContent(task)}>Edit</button></li>
                  <li><button onClick={() => handleDeleteTask(task.id)}>Delete</button></li>
                </div>
              </>
            )
          }
          </ul>
        ))}
    </div>
    </>
  )
}

export default DisplayTask