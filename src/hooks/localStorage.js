import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const stored =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
