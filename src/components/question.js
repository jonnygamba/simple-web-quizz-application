import React, { useEffect, useState } from "react";
import { useGetStoredAnswer, useMainContext } from "../../pages/_app";

const Question = ({ question, children, index, goToNextQuestion }) => {
  const [answer, setAnswer] = useState();
  const { registerResponse, numberOfQuestions } = useMainContext();
  const stored = useGetStoredAnswer(question.id);

  useEffect(() => {
    if (stored) {
      setAnswer(stored);
    }
  }, [stored]);

  function select(val) {
    registerResponse(question.id, val);
  }

  function onClick(e) {
    e.preventDefault();
    goToNextQuestion();
  }

  function isChecked(option) {
    return stored === option;
  }

  return (
    <fieldset>
      <legend>{`question ${index + 1}`}</legend>
      <p>{question.text}</p>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          registerResponse: select,
          questionId: question.id,
          isChecked,
        });
      })}
      {numberOfQuestions > question.id && (
        <button onClick={onClick} disabled={!answer}>
          Next
        </button>
      )}
    </fieldset>
  );
};

export default Question;
