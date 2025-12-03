import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

// function App() {
  
// }

const Card = ( {title }) => {
  return(
    <div>
      <h2>
         {title }
      </h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Func Arrow Compoen</h2>

      <Card title="Samin boka"/>  
      <Card title="Samin valona" /> 
      <Card title="Samin ki pare na" /> 
    </div> 
  )
}


export default App