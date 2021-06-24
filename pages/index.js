import { useEffect, useState } from "react";
import Question from "../src/components/question";
import Option from "../src/components/answer";

export default function Home() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/questions");
        const result = await response.json();
        setResults(result);
      } catch (err) {
        console.error(err);
        setError("An error occurred");
      }
    };

    fetchResults();
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <form action="">
      {results.map((question, i) => {
        return (
          <Question key={question.text} question={`question ${i + 1}`}>
            {question.options.map((option, j) => {
              return (
                <Option
                  key={option.text}
                  id={`answer-${i}${option.option}`}
                  group={`question-${j}`}
                  question={option.text}
                />
              );
            })}
          </Question>
        );
      })}
    </form>
  );
}
