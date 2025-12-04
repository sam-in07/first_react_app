import { useState } from "react";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import { useEffect, useState } from "react";
// function App() {

// }

const Card = ({ title }) => {
  const [count, setCount] = useState(0); 
  const [hasliked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log("like state changed ", hasliked);
  });
  
  return (
    <div
      className="card" onClick={() => setCount(
        count+1
      )}
     
    >

      <h2>{title}  <br /> {count || null} </h2>
      <button onClick={() => setHasLiked(!hasliked)}>
        //chnages if liked or not
        {hasliked ? "liked" : "none"}
      </button>
    </div>
  );
};

const App = () => {
  const [hasliked, setHasLiked] = useState(false);
  //varibalename  set varibale
  return (
    <div className="card-container">
      {/* <h2>Func Arrow Compoen</h2> */}

      <Card title="Samin boka" />
      <Card title="Samin valona" />
      <Card title="Samin ki pare na" />
    </div>
  );
};


export default App;
