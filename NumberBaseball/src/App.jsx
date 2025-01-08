import { useState } from "react";
import "./App.css";

function App() {
  const generateRandomNumber = () => {
    let numbers = "";
    for (let i = 0; i < 3; i++) {
      numbers += Math.floor(Math.random() * 9) + 1;
    }
    return numbers;
  };

  const [answer, setAnswer] = useState(generateRandomNumber());
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (input[i] === answer[i]) {
        strike++;
      } else if (answer.includes(input[i])) {
        ball++;
      }
    }

    if (strike === 3) {
      setMessage("정답입니다!");
      setLog([...log, `${input} - 정답!`]);
      setAnswer(generateRandomNumber());
      setInput("");
    } else if (strike === 0 && ball === 0) {
      setLog([...log, `${input} - OUT`]);
      setMessage("숫자가 하나도 맞지 않았습니다.");
    } else {
      setLog([...log, `${input} - ${strike}S ${ball}B`]);
      setMessage("");
    }
  };

  return (
    <>
      <h1>숫자 야구게임</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={onChange} maxLength={3} placeholder="숫자 3자리 입력" />
        <button>입력!</button>
      </form>
      <p>{message}</p>

      <div>
        <h2>기록</h2>
        <ul>
          {log.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
