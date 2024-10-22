import react,{useContext} from 'react';
import {GobleState} from '../App';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/Counter/counterSlice'

export default function Home(){
    const {mode, toggle} = useContext(GobleState);
    console.log(mode);

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Home Page</h1>
            <button onClick={()=>toggle()}>mode change by contax</button>


            <div>
                <div>
                    <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    >
                    Increment
                    </button>
                    <span>{count}</span>
                    <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    >
                    Decrement
                    </button>
                </div>
            </div>
        </>
    )
}