import "./App.css";
import useCurrencyConverter from "./hooks/useCurrencyConverter";

function App() {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    result,
    convert,
  } = useCurrencyConverter();

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <label>From:</label>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <br /><br />

      <label>To:</label>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      <br /><br />

      <button onClick={convert}>Convert</button>

      <h2>
        {result &&
          `${amount} ${fromCurrency} = ${result} ${toCurrency}`}
      </h2>
    </div>
  );
}

export default App;