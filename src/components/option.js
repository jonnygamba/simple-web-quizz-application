import PropTypes from "prop-types";

const Option = ({ isChecked, questionId, text, id, onChange, option }) => {
  return (
    <label>
      <input
        type="radio"
        className="w-3 h-3 mr-2 bg-gray-100 focus:ring-main-brand text-main-brand"
        id={id}
        name={`question-${questionId}`}
        value={option}
        checked={isChecked(option)}
        onChange={() => onChange(option)}
      />
      {text}
    </label>
  );
};

export default Option;

Option.propTypes = {
  isChecked: PropTypes.func,
  questionId: PropTypes.number,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  option: PropTypes.string.isRequired,
};

Option.defaultProps = {
  isChecked: () => false,
  questionId: 0,
  onChange: () => {},
};
