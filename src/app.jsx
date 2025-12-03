import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

// function App() {
  
// }

const Card = ( {title }) => {
  return(
    
    <div className='card' style={{
      border: '1px solid #4b5362', 
      padding: '20px',
      margin: '10px',
      backgroundColor : '#31363f',
      borderRadius: '10px',
      minHeight: '100px',        
    }} >
      <h2>
         {title }
      </h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">

      {/* <h2>Func Arrow Compoen</h2> */}
    
     <Card title="Samin boka"/>  
      <Card title="Samin valona" /> 
      <Card title="Samin ki pare na" /> 
      
    </div> 
  )
}


export default App