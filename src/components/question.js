import React from "react";

const question = ({ question, children }) => {
  return (
    <fieldset>
      <legend>{question}</legend>
      {children}
    </fieldset>
  );
};

export default question;
