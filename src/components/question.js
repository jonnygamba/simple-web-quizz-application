import React from "react";
import { useMainContext } from "../../pages/_app";

const Question = ({ question, children, index }) => {
  const { registerResponse } = useMainContext();

  function select(val) {
    registerResponse(question.id, val);
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
    </fieldset>
  );
};

export default Question;
