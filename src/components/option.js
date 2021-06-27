import React from "react";

const Option = ({ group, question, id, registerResponse, option }) => {
  return (
    <label>
      <input
        type="radio"
        id={id}
        name={group}
        value={option}
        onChange={() => registerResponse(option)}
      />
      {question}
    </label>
  );
};

export default Option;
