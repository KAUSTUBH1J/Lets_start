import React,{useState} from 'react'

export default function Textarea(props) {
    const [placeholdertext, setPlaceholder] = useState("Enter the text here...");
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState(''); 

    const toUpper = () => {
        setText(text.toUpperCase());
        setPlaceholder(placeholdertext.toUpperCase());
    }

    const toLower = () => {
        setText(text.toLowerCase());
        setPlaceholder(placeholdertext.toLowerCase());
    }

    const Hanldingchange = (event) => {
        setText(event.target.value);
    }
    
    const clearAll = () =>{
        setText('');
    }

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const doOperation = () =>{
        let find_text = search.toLowerCase();
        console.log(find_text);
        let text2 = text.toLowerCase();
        let value = text2.search(find_text);
        console.log(find_text.length);
        console.log(value);
    }

    return (
        <>
            <div className="container my-3 ">
                <h2>Text Analyzer </h2>
                <textarea className='form-control my-2' onChange={Hanldingchange} value={text} placeholder={placeholdertext} rows="8"></textarea>
                <button className='btn btn-primary mx-2' onClick={toUpper}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={toLower}>Convert to LowerCase</button>
                <button className='btn btn-danger mx-2' onClick={clearAll}>clear</button>
                <div className='my-2'>
                    {/* <select name="" id="">
                        <option value=""></option>
                    </select> */}
                    <input type="text" value={search} onChange={handleSearch} />
                    <button className='btn btn-danger mx-2' onClick={doOperation}>Enter</button>
                </div>

                <div className='my-3'>
                    <p>{searchResult}</p>
                    <div>
                        <p> <b>Total: </b>{text.split(' ').length} word and {text.length} charater</p>
                    </div>
                    <h2>Perview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
