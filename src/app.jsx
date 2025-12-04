import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import{useEffect, useState} from 'react'
// function App() {
  
// }

const Card = ( {title }) => {
   const [hasliked, setHasLiked] = useState(false);

   useEffect(() => {
    console.log('like state changed ', hasliked);
   });
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
      <button onClick={() => setHasLiked(!hasliked)}>
        //chnages if liked or not 
        {
          hasliked ? 'liked' : 'none' 
        } 
      </button>
    </div>
  )
}

const App = () => {
  const [hasliked, setHasLiked] = useState(false);
  //varibalename  set varibale
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