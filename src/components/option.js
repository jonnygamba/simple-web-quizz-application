const Option = ({
  isChecked,
  questionId,
  text,
  id,
  registerResponse,
  option,
}) => {
  return (
    <label>
      <input
        type="radio"
        id={id}
        name={`question-${questionId}`}
        value={option}
        checked={isChecked(option)}
        onChange={() => registerResponse(option)}
      />
      {text}
    </label>
  );
};

export default Option;
