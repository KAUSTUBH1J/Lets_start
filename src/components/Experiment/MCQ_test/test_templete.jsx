import React, {useState} from 'react'
import Quetions from './Question_templete'
import MCQs from './Questions.json'
export default function Test_templete() {
   
    return (
      <div className='container'>
        <h1 className='text-center my-3 p-3'>MCQ Sample Test</h1>
        {
          MCQs.map(
            (question)=>{
              return(
                <Quetions key={question.question} que={question.question} opt={question.options} ans={question.answer} note={question.explainer}/>
              )
            }
          )
        }
      </div>
    )
}
