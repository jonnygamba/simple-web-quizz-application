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
        className="w-3 h-3 mr-2 bg-gray-100 focus:ring-main-brand text-main-brand"
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
