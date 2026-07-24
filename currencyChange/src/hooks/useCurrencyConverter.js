import { useState } from "react";

function useCurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");

  const rates = {
    USD: 83,
    INR: 1,
    EUR: 90,
    GBP: 105,
  };

  const convert = () => {
    const amountInINR = amount * rates[fromCurrency];
    const converted = amountInINR / rates[toCurrency];
    setResult(converted.toFixed(2));
  };

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    result,
    convert,
  };
}

export default useCurrencyConverter;