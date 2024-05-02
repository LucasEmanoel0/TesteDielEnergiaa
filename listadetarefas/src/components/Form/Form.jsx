// Form.js
import { useState } from "react";
import Input from "../Input/Input";
import Tasks from "../Tasks/Tasks";
import { handleDelete, handleUpdateTask, handleEdit, handleSubmit } from "../TaskUtills";
import "./Form.css"

export default function Form() {
   
  const [tasks, setTasks] = useState(() => {
    const localStorageData = localStorage.getItem("tasks");
    return localStorageData ? JSON.parse(localStorageData) : [];
    
});
  const [title, setTitle] = useState("");
  const [search,setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([]);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [searching, setSearching] = useState(false);



  function onSearch(search){
    const searchResult = tasks.filter(task => task.title === search);
  // Retorna os resultados da pesquisa
  setSearching(searchResult.length === 0);
  return searchResult;
 
  }


  return (
    <>
    <div className="containerSearch">
    <label htmlFor="search"></label>
    <input type="text" name="search" id="search" value={search} onChange={(ev)=>setSearch(ev.target.value)} placeholder="procurar tarefa pelo titulo"/>
    <button onClick={() => setSearchResults(onSearch(search))} className="buttonSearch">encontrar</button>
    </div>
    {searchResults.length > 0 ? (
  <Tasks
    tasks={searchResults}
    handleEdit={(searchResult) => handleEdit(searchResult, setEditingTask, setTitle, setDescription, setDate, setHour,setSearchResults)}
    handleDelete={(id) => handleDelete(id, setTasks,setSearchResults)} // Correção aqui
  />
) : searching ? (
  <p>Tarefa não encontrada</p>
) : null}

      <div>

      </div>
      <div>
        
      </div>
      <div>

      </div>
      <div className="containerForm">
      <form onSubmit={(ev) => handleSubmit(ev, tasks, setTasks, editingTask, title, description, date, hour, setTitle, setDescription, setDate, setHour, setEditingTask)}>

<div className="titleForm">
<h1>Cadastrar Tarefa</h1>
</div>

<Input
  type="text"
  text="Titulo"
  id="title"
  value={title}
  set={setTitle}
  placeholder = "digite um titulo para a tarefa"
/>
<Input
  type="text"
  text="Descricao"
  id="description"
  value={description}
  set={setDescription}
  placeholder = "digite uma descricao para a tarefa"
/>
<Input
  type="date"
  text="data"
  id="date"
  value={date}
  set={setDate}
/>
<Input
  type="time"
  text="hora"
  id="time"
  value={hour}
  set={setHour}
/>
<button type="submit">{editingTask ? "Editar" : "Enviar"}</button>
</form>
      </div>
      <div className="ContainerTask">
      <Tasks tasks={tasks} handleEdit={(task) => handleEdit(task, setEditingTask, setTitle, setDescription, setDate, setHour)} handleDelete={(id) => handleDelete(id, setTasks)} handleUpdateTask={(updatedTask) => handleUpdateTask(updatedTask, setTasks,tasks)}/>
      </div>
    
    </>
  );
}
