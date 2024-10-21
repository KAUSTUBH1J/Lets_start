import React,{useRef} from 'react'

export default function Question_templete(props) {
    const optionBtn = useRef([]);

    props.opt.forEach(
        (_, index) =>{ 
            optionBtn.current[index] = optionBtn.current[index] ||  React.createRef();
            // console.log(React.createRef())
        }
    )

    const handleAns = (e, selectOption ,correctOption, index) =>{
        // optionBtn.current.style.color = "#000";
        
        optionBtn.current.forEach((btn)=>{
            if(btn.current){
                btn.current.style.background = 'transparent';
                btn.current.style.color = '#000'; 
            }
        })

        if(selectOption === correctOption){
            e.target.style.background = "green";
            e.target.style.color = "#fff";

        }else{
            e.target.style.background = "red";
            e.target.style.color = "#fff";
        }
        // console.log(selectOption ,correctOption)
    }
    return (
    <>
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{props.que}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Otions:</h6>
                <div className="container">
                
                    <div className="row row-cols-2">
                        {
                            props.opt.map((option, index)=>{
                                return(
                                    <div className="col " key={option}>
                                        <button className='btn  btn-outline-secondary w-100 text-start m-2 p-2 border' ref={optionBtn.current[index]}  onClick={(e)=>handleAns(e,option,props.ans)} >{option}</button>
                                    </div>            
                                )
                            })
                        }
                        
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}
