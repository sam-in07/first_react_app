import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

// function App() {
  
// }

const Card = () => {
  return(
    <div>
      <h2>
        Card Component
      </h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Func Arrow Compoen</h2>

      <Card /> 
      <Card /> 
      <Card /> 
    </div> 
  )
}


export default App