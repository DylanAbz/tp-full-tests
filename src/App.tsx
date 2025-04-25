import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ClockComponent} from "./component/ClockComponent.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClockComponent/>
    </>
  )
}

export default App
