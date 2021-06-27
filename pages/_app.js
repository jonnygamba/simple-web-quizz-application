import { useState, useContext, createContext } from "react";
import useLocalStorage from "../src/hooks/localStorage";
import "../styles/globals.css";

const MainContext = createContext();

function MyApp({ Component, pageProps }) {
  const [answers, setAnswers] = useLocalStorage("answers", {});
  const [numberOfQuestions, setNumberOfQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const value = {
    registerResponse(id, val) {
      setAnswers({ ...answers, [id]: val });
    },
    canSubmit() {
      return numberOfQuestions === Object.keys(answers).length;
    },
    answers,
    setNumberOfQuestions,
    setCurrentQuestion,
    currentQuestion,
    numberOfQuestions,
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
