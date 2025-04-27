import React, { useState, useContext } from 'react';
import MCQs from './Questions.json';
import Question_template from './Question_templete';
import Result_page from './Result_page';
import { GobleState } from '../../../App';

export default function Test_template() {
  const [correctCount, setCorrectCount] = useState(0);
  const [topicWiseResult, setTopicWiseResult] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {mode, toggle} = useContext(GobleState);

  const handleAnswer = (isCorrect, topic) => {
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }

    setTopicWiseResult(prev => ({
      ...prev,
      [topic]: {
        correct: (prev[topic]?.correct || 0) + (isCorrect ? 1 : 0),
        total: (prev[topic]?.total || 0) + 1
      }
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <Result_page correctCount={correctCount} totalCount={MCQs.length} topicWiseResult={topicWiseResult} />;
  }

  return (
    <div className={`px-5 ${mode === 'light' ? 'bg-body-tertiary' : 'bg-dark text-light'}  w-100`} style={{'padding':'0 244px !important'}}  >
      <h1 className="text-center py-4">MCQ Sample Test</h1>
      <h5 className="text-end">{correctCount}/{MCQs.length}</h5>

      {MCQs.map((question, index) => (
        <Question_template
          key={index}
          que={question.question}
          code={question.code}
          language={question.code_language}
          opt={question.options}
          ans={question.answer}
          note={question.explainer}
          topic={question.topic}
          onAnswer={handleAnswer}
          mode={mode}  
        />
      ))}

      <div className="text-center my-4">
        <button className="btn btn-primary" onClick={handleSubmit}>Submit Test</button>
      </div>
    </div>
  );
}
