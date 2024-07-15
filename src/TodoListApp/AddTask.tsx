import { useState } from "react";

interface Props{
  handleAdd: (content: string) => void;
}


export default function AddTask( { handleAdd }: Props ) {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="mb-3 d-flex ">
        <input
        onSubmit={ () => { console.log("okiii") } }
          onChange={(e) => {setContent(e.target.value)}}
          value={content}
          type="email"
          className="form-control me-1"
          placeholder="Add Task"
        />
        <button onClick={ () => { {content && handleAdd(content)} setContent( "" ) } } type="submit" className="btn btn-primary me-0">
          Add
        </button>
      </div>
    </>
  );
}
