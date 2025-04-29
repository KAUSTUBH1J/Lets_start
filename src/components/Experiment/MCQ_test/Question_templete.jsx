import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow ,prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Question_template({ que, code, opt, ans, note, topic, onAnswer, language, mode }) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [isAttempted, setIsAttempted] = useState(false);
  const [isFirstAttemptWrong, setIsFirstAttemptWrong] = useState(false);

  const handleAns = (option, correctOption, index) => {
    if (!isAttempted) {
      if (option !== correctOption) {
        setIsFirstAttemptWrong(true);
      }
      if (option === correctOption) {
        onAnswer(true, topic);
      } else {
        onAnswer(false, topic);
      }
      setIsAttempted(true);
    }
    setSelectedOptionIndex(index);
    setIsCorrect(option === correctOption);
    setShowNote(true);
  };

  return (
    <div className={`card my-3 ${mode === 'light' ? 'bg-white' : 'bg-secondary text-light'}`}>
      <div className="card-body">
        <h5 className="card-title">
          {que}
          {isFirstAttemptWrong && <span style={{ color: 'red', fontSize: '24px' }}> ❌</span>}
        </h5>

        {code && (
          <SyntaxHighlighter language={language} style={mode === 'light' ? prism : tomorrow}>
            {code}
          </SyntaxHighlighter>
        )}

        <div className="row row-cols-2 mt-3">
          {opt.map((option, index) => (
            <div className="col" key={option}>
              <button
                className={`btn w-100 text-start m-2 p-2 border
                  ${selectedOptionIndex === index 
                    ? (isCorrect ? 'btn-success' : 'btn-danger') 
                    : (mode === 'light' ? 'btn-outline-dark' : 'btn-outline-light')
                  }
                `}
                disabled={isAttempted}
                onClick={() => handleAns(option, ans, index)}
              >
                {option}
                {isAttempted && option === ans && (
                  <span style={{ color: 'green', marginLeft: '8px' }}>✔️</span>
                )}
              </button>
            </div>
          ))}
        </div>

        {showNote && (
          <div className="note mt-3">
            <hr />
            <b>Note: </b><p>{note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
