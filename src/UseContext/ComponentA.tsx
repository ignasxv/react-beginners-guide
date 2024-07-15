import React, { useState, createContext } from 'react';
import ComponentB from './ComponentB';

// Define the context type
interface UserContextType {
  user: number;
  setUser: React.Dispatch<React.SetStateAction<number>>;
}


// Initialize the context with a default value
export const UserContext = createContext<UserContextType>({user: 1, setUser: () => {throw new Error("undefined initial value")}});

export default function ComponentA() {
  const [user, setUser] = useState<number>(0);

  return (
    <div className='p-3 card border border-primary border-3'>
      <h1>ComponentA</h1>
      <button onClick={() => setUser(user + 1)} className='btn btn-primary m-1'>
        Hello {user}
      </button>
      <UserContext.Provider value={{ user, setUser }}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
