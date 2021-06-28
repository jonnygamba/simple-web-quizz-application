import { useState, useContext, createContext } from "react";
import useFetchQuestions from "../src/hooks/fetch-questions";
import useLocalStorage from "../src/hooks/localStorage";
import "../styles/globals.css";

const MainContext = createContext();

function MyApp({ Component, pageProps }) {
  const [answers, setAnswers] = useLocalStorage("answers", {});
  const { results, error, loading } = useFetchQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const numberOfQuestions = results.length;

  const value = {
    registerResponse(id, val) {
      setAnswers({ ...answers, [id]: val });
    },
    canSubmit() {
      return numberOfQuestions === Object.keys(answers).length;
    },
    answers,
    setAnswers,
    setCurrentQuestion,
    currentQuestion,
    numberOfQuestions,
    results,
    error,
    loading,
  };

  return (
    <MainContext.Provider value={value}>
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}

export function useMainContext() {
  const context = useContext(MainContext);
  return context;
}

export function useGetStoredAnswer(id) {
  const context = useContext(MainContext);
  return context.answers[id];
}

export default MyApp;
