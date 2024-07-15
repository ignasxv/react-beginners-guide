import {ReactNode, useState } from "react";

interface PropsName{
    items?: ReactNode[];
    heading?: string;
}

function ListGroup({items = [1,2,3], heading}: PropsName) {
  
  // Hook
  const arr = useState(-1);
  arr[0] //variable
  arr[1] // updater
 
  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No {heading} found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              "list-group-item " + (arr[0] === index ? "active" : "")
            }
            onClick={() => {arr[1](index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
