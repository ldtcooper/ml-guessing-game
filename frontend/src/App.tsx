import React from 'react';
import Header from "./features/header/Header";
import Loading from "./features/loading/Loading";
import './App.css';
import Guesser from './features/guesser/Guesser';

function App() {
  return (
    <div className="App">
      <Header />
      <Guesser />
      <Loading />
    </div>
  );
}

export default App;
