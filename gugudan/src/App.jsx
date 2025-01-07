import { useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = first * second;
    if (parseInt(value) === answer) {
      setResult("정답!");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult("땡!");
      setValue("");
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <h1>구구단 게임</h1>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default App;
