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
    <fieldset className="flex flex-col p-12 w-1/2 m-auto">
      <legend className="pt-5 text-2xl font-bold underline pt-14 align-self-start justify-self-start">{`Question ${
        index + 1
      }`}</legend>
      <p className="mb-5 text-xl">{question.text}</p>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          registerResponse: select,
          questionId: question.id,
          isChecked,
        });
      })}
      {numberOfQuestions > question.id && (
        <button
          onClick={onClick}
          disabled={!answer}
          className="self-center px-2 py-1 mt-5 font-bold text-white rounded bg-dark-accent disabled:bg-gray-400"
        >
          Next
        </button>
      )}
    </fieldset>
  );
};

export default Question;
