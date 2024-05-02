export function handleDelete(id, setTasks,setResult) {
    setTasks(state => {
      const newSate = state.filter(task => task.id !== id)
      localStorage.setItem("tasks", JSON.stringify(newSate))
      return newSate
    })
    setResult("")
    
  }
  
  export function handleUpdateTask(updatedTask, setTasks,tasks) {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
  
  export function handleEdit(task, setEditingTask, setTitle, setDescription, setDate, setHour,setResult) {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setDate(task.date);
    setHour(task.hour);
    setResult("")
    {alert("edite sua tarefa")}
  }
  
  export function handleSubmit(ev, tasks, setTasks, editingTask, title, description, date, hour, setTitle, setDescription, setDate, setHour,setEditingTask) {
    ev.preventDefault();
    if (editingTask) {
      handleUpdateTask({
        ...editingTask,
        title,
        description,
        date,
        hour
      }, setTasks,tasks);
      setEditingTask(false);


    } else {
      const newTask = {
        id: Date.now(), // Gere um ID único para a nova tarefa
        title,
        description,
        date,
        hour
      };
      setTasks(state => {
        const newState = [...state, newTask]
        localStorage.setItem("tasks", JSON.stringify(newState))
        return newState
      })
    }
    setTitle("");
    setDescription("");
    setDate("");
    setHour("");
  }