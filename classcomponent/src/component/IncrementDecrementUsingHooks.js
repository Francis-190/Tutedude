import React, { useState } from "react";


function IncrementDecrementUsingHooks(){

    const [counter,setCounter] = useState(0);

    let changeCounterInc=()=>{
        setCounter(counter+1)
    }

    let changeCounterDec=()=>{
        setCounter(counter-1)
    }
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={changeCounterInc} className="p-3 mb-2 bg-success text-white">Increment using hooks</button>
            <button onClick={changeCounterDec} className="p-3 mb-2 bg-warning text-dark text-danger">Decrease using hooks</button>
        </div>
    )
}
export default IncrementDecrementUsingHooks;