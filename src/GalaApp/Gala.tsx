import { useState } from "react";
import { galaList } from "./GalaList"


export default function Gala() {

  // const [index, setIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const getNextIndex = () => { setIndex((index + 1) % galaList.length); }
  const sculpture = galaList[index];
  const [showMore, setShowMore] = useState(false);



  return (
    <>
    <h1 className="display-1" >Galarrey App</h1>
      <div className="card" style={{ width: "40rem" }}>
        <a onClick={() => { getNextIndex() }} className="btn btn-primary">Next</a>
        <img alt={sculpture.alt} src={sculpture.url} className="card-img-top" />
        <hr/>
        <a onClick={() => { setShowMore(!showMore) }} className="btn btn-primary"> {showMore ? 'Hide' : 'Show'} Details</a>

        <div className="card-body">
          <h2 className="card-title">{sculpture.name}</h2>
          <p className="card-text">
            {showMore && sculpture.description}
          </p>

        </div>
      </div>
    </>
  );


}
