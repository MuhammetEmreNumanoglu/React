import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);
  const ortalamaBul = () => {
    debugger;
    const toplamsonuc = topla() / 2;
    yazdir(toplamsonuc);
  };
  const topla = () => {
    debugger;

    const toplam = vize1 + vize2;
    return toplam;
  };
  const yazdir = (sonuc) => {
    debugger;

    console.log("Ortalama : " + sonuc);
  };
  return (
    <div>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(e) => {
            setVize1(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <input
          type="number"
          value={vize2}
          onChange={(e) => {
            setVize2(Number(e.target.value));
          }}
        />{" "}
      </div>
      <button onClick={ortalamaBul}>Ortalama bul</button>
    </div>
  );
}

export default App;
