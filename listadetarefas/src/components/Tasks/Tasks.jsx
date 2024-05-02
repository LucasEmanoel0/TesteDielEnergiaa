/* eslint-disable react/prop-types */
// Tasks.js
import './Task.css'

import Task from "./Task"; // Importe o componente Task

export default function Tasks({ tasks, handleEdit, handleDelete}) {
  return (
    <>
    <div className='titleContainer'>
      <h1>Tarefas</h1>
      </div>
      <section>
      
      {tasks.map((task, index) => (
        <Task key={index} task={task} handleEdit={() => handleEdit(task)} handleDelete={() => handleDelete(task.id)} />
      ))}
    </section>
    </>
   
  );
}
