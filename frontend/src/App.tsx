import React from 'react';
import Header from "./features/header/Header";
import Loading from "./features/loading/Loading";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Loading />
    </div>
  );
}

export default App;
