import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const soyadidegistir = ()=>{
    setLastname("Numanoglu")
  }
  useEffect(()=>{
    console.log('her zaman calisir')
  })
  useEffect(()=>{
    console.log("ilk render edildiginde calisir")
  },[])
  useEffect(() => {
    console.log('ilk render edildiginde ve firstname state degeri degistiginde calisir')
  }, [firstname]);
    useEffect(() => {
    console.log('ilk render edildiginde ve lastname state degeri degistiginde calisir')
  }, [lastname]);
  return (
    <>
      {firstname}
      <div><button onClick={()=>{setFirstname("Emre")}} >Isim degistir</button></div>
      <div><button onClick={(soyadidegistir)} >Soyadi degistir</button></div>
      {lastname}
    </>
  )
}

export default App
