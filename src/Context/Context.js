import React , { createContext, useState } from 'react'

const  Context  = createContext(false);
// Provider
const  ContextProvider  =  ({ children })  =>  {
    const [checkOut, setCheckOut] = useState(false)
    const toggleTrue =  ()  =>  {
        setCheckOut(true);
    };
    const toggleFalse =  ()  =>  {
        setCheckOut(false);
    };
return  (
    <Context.Provider value={{ checkOut, toggleTrue, toggleFalse }}>
        {children}
    </Context.Provider>
    );
};
export  { Context , ContextProvider };