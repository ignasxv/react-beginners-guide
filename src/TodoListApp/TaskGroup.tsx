import AddTask from "./AddTask";
import TaskList from "./TaskList";

type taskType = {id: number, text: string};
type tasksT = taskType[];

interface Props {
  listName: string;
  tasks: tasksT;
  listImage: string;
  handleDelete: (taskId: number ) => void;
  handleChange: (task: taskType) => void;
  handleAdd: (text: string) => void;
}

export default function TaskGroup({ listName, tasks, listImage, handleAdd, handleDelete, handleChange}: Props ) {
  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <img
          src={listImage}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{listName}</h5>
          <AddTask handleAdd = { handleAdd } />
          <TaskList handleChange={handleChange} handleDelete={handleDelete} tasks={tasks} />
        </div>
      </div>
    </>
  );
}
