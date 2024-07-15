import { useContext } from "react";
import { UserContext } from "./ComponentA";


export default function ComponentD() {
    const value = useContext(UserContext);

    return (
        <div className='p-3 card border border-primary border-3'>
            <h1>ComponentD</h1>

            <button onClick={() => { value.setUser(value.user + 1) }} className="btn btn-primary" >Bye {value.user}</button>
        </div>
    )
}
