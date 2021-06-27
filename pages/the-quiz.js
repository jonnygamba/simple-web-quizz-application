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
    numberOfQuestions,
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
    <main>
      <form
        onSubmit={send}
        className="flex flex-col min-h-screen bg-dark-shade text-light-shade"
      >
        {results.map((question, i) => {
          return (
            <div
              className="min-h-full"
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
        {numberOfQuestions === currentQuestion + 1 && (
          <input
            type="submit"
            value="Send"
            disabled={!canSubmit()}
            className="mx-auto self-center px-2 py-1 mt-5 font-bold text-white rounded bg-success disabled:bg-gray-400"
          />
        )}
      </form>
    </main>
  );
}
