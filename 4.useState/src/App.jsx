import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [firstname, setFirstname] = useState("Emre");
  const [lastname, setLastname] = useState("Numanoglu");
  const handleChange = () => {
    setFirstname("e");
  };
  const [names, setNames] = useState(["Emre", "Numanoglu", "React"]);
  const [userInfo, setUserInfo] = useState({
    username: "Mami",
    password: "1234",
  });
  const [show, setShow] = useState(true);

  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = ()=>{
    setCount(count - 1);
  }

  return (
    <>
      <div>{firstname}</div>
      <div>
        <button
          onClick={() => {
            setFirstname("m");
          }}
        >
          {lastname}
        </button>
      </div>
      <div>
        <button onClick={handleChange}> {lastname}</button>
      </div>
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>

      <br />
      {userInfo.username}
      <div>
        {show ? (
          <div>
            {userInfo.username}
            {userInfo.password}{" "}
          </div>
        ) : (
          <div>Bilgileri Gosterme</div>
        )}
      </div>
      <div> {count}</div>
      <div>
        {" "}
        <button onClick={arttir}>Arttır</button>
      </div>
      <div>
        {" "}
        <button onClick={azalt}>Azalt</button>
      </div>
    </>
  );
}

export default App;
