import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const addElement = () => {
    setCount((prev) => prev + 1);
  };

  const removeElement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return [count, addElement, removeElement, reset];
}