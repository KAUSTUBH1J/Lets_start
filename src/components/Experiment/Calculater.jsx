import React,{useState, useEffect} from 'react'

export default function Calculater() {
    const [count, setCount] = useState(0);
    const [num1, setNum1]   = useState(0);
    const [num2, setNum2]   = useState(0);
    const [result, setResult]   = useState(0);
    const setnum1Value = (event) => {
        setNum1(event.target.value);
    }
    const setnum2Value = (event) => {
        setNum2(event.target.value);
    }

    useEffect(()=>{
        console.log('call useEffect')
    },[setnum1Value,setnum2Value])

    function handleCount(move){
        if(move == 'increment'){
            setCount(count+1);
        }else if(move == 'decriment'){
            setCount(count-1);
        }
    }
    return (
        <>
            <div className='container my-2'>
                <h2>Count : {count}</h2>
               
                <button className='btn btn-primary mx-2' onClick={()=>{handleCount('increment')}}>+</button>
                <button className='btn btn-primary mx-2' onClick={()=>{handleCount('decriment')}}>-</button>

                <div className='d-flex my-3'>
                    <input type="number" className='form-control w-20 mx-2' value={num1} onChange={setnum1Value}/>
                    {/* <input type="number" className='form-control w-20 mx-2'/> */}+
                    <input type="number" className='form-control w-20 mx-2' value={num2}  onChange={setnum2Value}/>
                    <span></span>
                </div>
            </div>
        </>
    )
}
