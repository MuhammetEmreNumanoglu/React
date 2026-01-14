import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
          <Product productName= "Ayakkabi" price = {3200} />
    </Container>
    

    </>
  )
}

export default App
