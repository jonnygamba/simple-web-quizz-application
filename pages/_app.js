import { useState, useContext, createContext } from "react";
import "../styles/globals.css";

const MainContext = createContext();

function MyApp({ Component, pageProps }) {
  const [answers, setAnswers] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const value = {
    registerResponse(id, val) {
      setAnswers([...answers, { [id]: val }]);
    },
    canSubmit() {
      return numberOfQuestions === answers.length;
    },
    answers,
    setNumberOfQuestions,
    setCurrentQuestion,
    currentQuestion,
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

export default MyApp;
