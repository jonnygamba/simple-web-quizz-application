import React from "react";

const Question = ({ question, children }) => {
  return (
    <fieldset>
      <legend>{question}</legend>
      {children}
    </fieldset>
  );
};

export default Question;
