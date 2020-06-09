import React, { useState } from "react";
import './App.css';
import FormContainer from './components/Form'
import User from "./components/User";


function App() {

  const [user, setUser] = useState([]);

  console.log("user from app", user);

  return (

    <div className="App">

      <header className="App-header">
        POHST PHORM
      </header>

      <FormContainer user={user} setUser={setUser} />
      <User user={user} />

    </div>

  );
  
}

export default App;
