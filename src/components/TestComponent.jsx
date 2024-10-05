import React,{useState} from "react";

const TestComponent = () => {
    const state = useState(0);
    console.log(state);
    return (
        <>
            <h1>Hello Guys</h1>
        </>
    )
}

export default TestComponent;