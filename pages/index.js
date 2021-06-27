import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Question from "../src/components/question";
import Option from "../src/components/option";
import { useMainContext } from "./_app";

export default function Home() {
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
  const { setNumberOfQuestions, submit, canSubmit, answers } = useMainContext();

  async function send(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/response", {
        method: "POST",
        body: JSON.stringify(answers),
      });
      const res = await response.json();
      router.push({ pathname: "/result", query: { ...res } });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/questions");
        const result = await response.json();
        setResults(result);
        setNumberOfQuestions(result.length);
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
    <form onSubmit={send}>
      {results.map((question, i) => {
        return (
          <Question key={question.text} index={i} question={question}>
            {question.options.map((option, j) => {
              return (
                <Option
                  key={option.text}
                  id={`answer-${i}${option.option}`}
                  group={`question-${i}`}
                  option={option.option}
                  question={option.text}
                />
              );
            })}
          </Question>
        );
      })}
      <input type="submit" value="Send" disabled={!canSubmit()} />
    </form>
  );
}
