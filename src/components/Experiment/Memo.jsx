import React, { useState, useMemo, useEffect } from "react";

function Memo(){
    const [counterOne , setCounterOne] = useState(0);
    const [counterTwo , setCounterTwo] = useState(0);

    const IncreamentOne = () =>{
        setCounterOne(counterOne+1);
    }
    const IncreamentTwo = () =>{
        setCounterTwo(counterTwo+1);
    }

    const isEven = useMemo(() =>{
        let i =0;
        console.warn('call');
        while(i<2000000000)i++;
        return counterOne % 2 === 0;
    },[counterOne])

    return(
        <>
            <div className="d-flex ">
                <button className="btn btn-primary m-2" onClick={IncreamentOne}>conterOne - {counterOne}</button>
                <span>{isEven ? 'even':'odd'}</span>
                <button className="btn btn-primary m-2" onClick={IncreamentTwo}>conterTwo - {counterTwo}</button>
            </div>
            
        </>
    )
}

export default Memo;