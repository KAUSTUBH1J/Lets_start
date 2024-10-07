import React,{useState} from 'react'

export default function Textarea() {
    
    const [text, setText] = useState("Enter the text here...");

    const toUpper = () => {
        setText(text.toUpperCase());
    }

    const toLower = () => {
        setText(text.toLowerCase());
    }

    const Hanldingchange = (event) => {
        setText(event.target.value);
    }
    
    return (
        <>
            <div className="container my-3">
                <h2>Form Hanlding</h2>
                <textarea className='form-control my-2' onChange={Hanldingchange} value={text} rows="8"></textarea>
                <button className='btn btn-primary mx-2' onClick={toUpper}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={toLower}>Convert to LowerCase</button>
                <div className='my-3'>
                    <div>
                        <p>{text.split(' ').length} word and {text.length} charater</p>
                    </div>
                    <h2>Perview</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>
    )
}
