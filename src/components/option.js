import React from "react";

const Option = ({ group, question, id }) => {
  return (
    <label>
      <input type="radio" id={id} name={group} />
      {question}
    </label>
  );
};

export default Option;
