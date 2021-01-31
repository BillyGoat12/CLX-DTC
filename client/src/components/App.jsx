import React, { useState, useEffect } from "react";

const App = () => {
  const [result, setResult] = useState([]);

  const showResult = (i) => {
    if (i % 3 === 0 && i % 5 === 0) {
      return <h1 style={{ color: "red" }}>CLXDTC</h1>;
    } else if (i % 3 === 0) {
      return <h1 style={{ color: "blue" }}>CLX</h1>;
    } else if (i % 5 === 0) {
      return <h1 style={{ color: "green" }}>DTC</h1>;
    } else {
      return <h1>{i}</h1>;
    }
  };

  useEffect(() => {
    for (let i = 1; i <= 101; i++) {
      result.push(i);
    }
    setResult([...result]);
  }, []);

  return <div>{result.map((val, i) => showResult(i))}</div>;
};

export default App;
