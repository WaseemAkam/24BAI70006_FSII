import useCounter from "./hooks/useCounter";

function App() {
  const [count, addElement, removeElement, reset] = useCounter(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={addElement}>Add</button>
      <button onClick={removeElement}>Remove</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;