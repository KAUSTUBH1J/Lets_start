import React,{useState, useEffect, useRef} from 'react';


export default function Calculater() {
    const [count, setCount] = useState(0);
    const [num1, setNum1]   = useState(0);
    const [num2, setNum2]   = useState(0);
    const [option, setOption]   = useState('');
    const [result, setResult]   = useState(0);
    const resultRef             = useRef();
    const optvalu               = useRef();

    const setnum1Value = (event) => {
        setNum1(event.target.value);
    }
    const setnum2Value = (event) => {
        setNum2(event.target.value);
    }

    const setOpt = (event) =>{
        setOption(event.target.value)
    }
    useEffect(()=>{
        let opt = document.getElementById('opration').value;

        console.log(opt);
        switch(opt){
            case 'add':
                setResult(parseInt(num1)+parseInt(num2));
                resultRef.current.style.color = "red"
                break;
            case 'sub':
                setResult(parseInt(num1)-parseInt(num2));
                resultRef.current.style.color = "green"
                break;
            case 'mul':
                setResult(parseInt(num1)*parseInt(num2));
                resultRef.current.style.color = "blue"
                break;
            case 'div':
                setResult(parseInt(num1)/parseInt(num2));
                resultRef.current.style.color = "red"
                break;
            case 'mod':
                setResult(parseInt(num1)/parseInt(num2));
                resultRef.current.style.color = "red"
                break;
        }
        
        return(
            console.log('result in Return '+result)
        )
    },[num1,num2,option])

    function handleCount(move){
        if(move === 'increment'){
            setCount(count+1);
        }else if(move === 'decriment'){
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
                    <input type="number" ref={optvalu} className='form-control w-20 mx-2' value={num1} onChange={setnum1Value}/>
                    <select name="" id="opration" onChange={setOpt}>
                        <option value="add">+</option>
                        <option value="sub">-</option>
                        <option value="add">*</option>
                        <option value="div">/</option>
                        <option value="mod">%</option>
                    </select>
                    <input type="number" className='form-control w-20 mx-2' value={num2}  onChange={setnum2Value}/>
                </div>
                <h4 className='' ref={resultRef} >Result: {result}</h4>
            </div>

        </>
    )
}
