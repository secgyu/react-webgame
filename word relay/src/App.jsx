import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("시작");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("정답!");
      setWord(value);
      setValue("");
    } else {
      setResult("땡!");
      setWord("");
    }
  };

  return (
    <>
      <div>
        <h1>끝말잇기 게임</h1>
        <p>현재단어: {word}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={onChange} placeholder="입력" />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default App;
