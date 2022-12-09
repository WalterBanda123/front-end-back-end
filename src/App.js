import React, { useEffect, useState } from "react"
import './App.css';

function App() {

  const [backEndData, setBackEndData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackEndData(data)
      }
    )
  }, [])

  return (
    <div >
      {(typeof backEndData.users === "undefined") ? (
        <p>laoding...</p>
      ) : (
        backEndData.users.map((user, i) => (<li key={i}>{user}</li>)
        )

      )}
    </div>
  );
}

export default App;
