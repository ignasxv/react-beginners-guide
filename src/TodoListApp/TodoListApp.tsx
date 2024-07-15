import { useState } from "react";
import TaskGroup from "./TaskGroup";

let nextId = 0;
type taskType = {id: number, text: string};


export default function TodoListApp() {

  const [start, setStart] = useState(true);

  const initialTasks = [
    { id: -1, text: "Sample Task" },
  ];
  


  const [tasks, setTasks] = useState(initialTasks);

  function handleDelete(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId ));
  }

  function handleAdd(text: string) {
    if(start) { setTasks( []); setStart(false);}
    setTasks(prev => [{ id: nextId++, text: text }, ...prev]);
  }

  function handleChange(task: taskType) {
    setStart(false);
    setTasks(
      tasks.map((t) => {
        if (t.id == task.id) return task;
        else return t;
      })
    );
  }

  return (
    <>
      <h1 className="display-1" >To Do List App</h1>
      <TaskGroup
        listImage="https://cdn.britannica.com/64/145564-050-BEF0E4DC/Wind-palm-trees-golf-course-Hawaii-Maui.jpg"
        listName="Prague Itenary"
        tasks={tasks}
        handleDelete={handleDelete}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />

  
    </>
  );

  
}
