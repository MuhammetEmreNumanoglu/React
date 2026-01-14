import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { users } from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div> 
          {users.map((a,index)=>(
            <div key={index}>
              <h3>{a.username}</h3>
              <h3>{a.password}</h3>
            </div>
          ))}
        </div>
        <br />
    </>
  )
}

export default App
