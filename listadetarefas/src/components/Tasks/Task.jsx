/* eslint-disable react/prop-types */
// Task.js
import './Task.css'
export default function Task({ task, handleEdit, handleDelete}) {
  return (
  
    <div className="taskContainer">
      <p>Titulo: {task.title}</p>
      <p>Descrição: {task.description}</p>
      <p>Data da tarefa: {task.date}</p>
      <p>Hora da tarefa: {task.hour}</p>
      <div className='buttons'>
      <button className='buttonEdite' onClick={() => handleEdit(task)}>Editar</button>
      <button className='buttonRemove' onClick={() => handleDelete(task.id)}>Excluir</button>
      </div>
    
    </div>
  );
}
