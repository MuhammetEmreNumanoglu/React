import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import UserList from './UserList'
import User from '../redux/User'

function App() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <>
      <div className="value">Number is = {value}</div>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Arttır
        </button>
      </div>
      <div>
        <button onClick={()=>{dispatch(decrement())}} >Azalt</button>
      </div>
        <UserList/>
        
    </>
  );
}

export default App;
