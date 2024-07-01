import React from 'react';
import logo from './logo.svg';
import { Counter } from './feature/counter/Counter';
//import './App.css';
import Parent from './component/Parent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        <Parent/>
        {/* <p>Git sample commit </p> */}
        </header>
    </div>
  );
}

export default App;

