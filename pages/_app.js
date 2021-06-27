import { useState, useContext, createContext } from "react";
import "../styles/globals.css";

const MainContext = createContext();

function MyApp({ Component, pageProps }) {
  const [answers, setAnswers] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState();

  const value = {
    registerResponse(id, val) {
      setAnswers([...answers, { [id]: val }]);
    },
    answers,
    setNumberOfQuestions,
    canSubmit() {
      return numberOfQuestions === answers.length;
    },
    submit() {
      alert(JSON.stringify(answers));
    },
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
