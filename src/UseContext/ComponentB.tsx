import ComponentC from "./ComponentC";


export default function ComponentB() {
    return (
        <div className='p-3 card border border-primary border-3'>
            <h1>ComponentB</h1>
   
            <ComponentC />
        </div>
    )
}
