import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";
import { useContext } from "react";


export default function ComponentC( ) {
    const value = useContext(UserContext);

    return (
        <div className='p-3 card border border-primary border-3'>
            <h1>ComponentC</h1>
            <button onClick={() => { value.setUser(value.user + 1) }}> See a button {value.user}  </button>
            <ComponentD />
        </div>
    )
}
