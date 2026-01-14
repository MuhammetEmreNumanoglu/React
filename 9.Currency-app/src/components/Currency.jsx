import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TL");
  const [result, setResult] = useState(0);

  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  let API_KEY =
    "fca_live_kPkmp3Mty52MThNTXO4XkJ6pXJS9riHNidmiFopj&currencies=EUR%2CUSD%2CCAD";
  let EXCHANGE_API = `${BASE_URL}/?apikey=${API_KEY}&base_currency=${fromCurrency}`;

  const exchange = async () => {
    const response = await axios.get(EXCHANGE_API);
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
    console.log(result);
  };
  return (
    <div className="currency-div">
      <div>
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Miktarı girin"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>TL</option>
          <option>EUR</option>
        </select>
        <FaArrowCircleRight />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TL</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          onChange={(e) => setResult(e.target.value)}
          value={result}
          type="number"
          placeholder="Cevabınız "
          className="result"
        />
      </div>
      <div>
        <button onClick={exchange} className="button">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
