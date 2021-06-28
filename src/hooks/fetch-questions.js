import { useState, useEffect } from "react";

const useFetchQuestions = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(() => true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/questions");
        const result = await response.json();
        setResponse(result);
      } catch (err) {
        console.error(err);
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return { results: response, error, loading };
};

export default useFetchQuestions;
