import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Question from "../src/components/question";
import Option from "../src/components/option";
import { useMainContext } from "./_app";

export default function Quiz() {
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
  const { query } = useRouter();
  const {
    setNumberOfQuestions,
    setCurrentQuestion,
    canSubmit,
    answers,
    currentQuestion,
  } = useMainContext();

  useEffect(() => {
    if (query.q) {
      setCurrentQuestion(parseInt(query.q));
    }
  }, [query]);

  async function send(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/response", {
        method: "POST",
        body: JSON.stringify(answers),
      });
      const result = await response.json();
      router.push({ pathname: "/result", query: { ...result } });
    } catch (err) {
      console.error(err);
    }
  }

  function goToNextQuestion() {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    router.replace({ pathname: "/the-quiz", query: { q: nextQuestion } });
  }

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/questions");
        const result = await response.json();
        setNumberOfQuestions(result.length);
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
    <form onSubmit={send}>
      {results.map((question, i) => {
        return (
          <div
            key={question.id}
            style={{ display: currentQuestion === i ? "block" : "none" }}
          >
            <Question
              key={question.id}
              index={i}
              question={question}
              goToNextQuestion={goToNextQuestion}
            >
              {question.options.map((option, j) => {
                return (
                  <Option
                    key={option.option}
                    id={`answer-${i}${option.option}`}
                    option={option.option}
                    text={option.text}
                  />
                );
              })}
            </Question>
          </div>
        );
      })}
      <input type="submit" value="Send" disabled={!canSubmit()} />
    </form>
  );
}
