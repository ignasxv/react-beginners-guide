import ListGroupApp from "./ListGroupApp/ListGroupApp";
import Gala from "./GalaApp/Gala"
import TodoListApp from "./TodoListApp/TodoListApp";
import { useState } from "react";
import ListGroup from "./ListGroupApp/ListGroup";
import UseContApp from "./UseContext/UseContApp";

export default function App() {

  const projects = [<ListGroup />, <ListGroupApp />, <ListGroupApp />, <Gala />, <TodoListApp />, <UseContApp/>];
  const [index, setIndex] = useState(0);

  return (


    <div className="container-fluid" >
      <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={handlePreviouProject} type="button" className="btn btn-primary me-2">Previous Project</button>
        <button onClick={handleNexProject} type="button" className="btn btn-primary me-2">Next Project</button>
      </div>
      {projects[index]}

    </div>
  );

  function handleNexProject() {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    }
  }

  function handlePreviouProject() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }


}
