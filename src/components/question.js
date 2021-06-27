import React, { useState } from "react";
import { useMainContext } from "../../pages/_app";

const Question = ({ question, children, index, goToNextQuestion }) => {
  const [answer, setAnswer] = useState();
  const { registerResponse } = useMainContext();

  function select(val) {
    registerResponse(question.id, val);
    setAnswer(val);
  }

  function onClick(e) {
    e.preventDefault();
    goToNextQuestion();
  }

  return (
    <fieldset>
      <legend>{`question ${index + 1}`}</legend>
      <p>{question.text}</p>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          registerResponse: select,
        });
      })}
      <button onClick={onClick} disabled={!answer}>
        Next
      </button>
    </fieldset>
  );
};

export default Question;
