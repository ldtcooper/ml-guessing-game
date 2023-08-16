import React, { useEffect } from 'react';
import Header from "./features/header/Header";
import Loading from "./features/loading/Loading";
import './App.css';
import Guesser from './features/guesser/Guesser';
import { getAnswerOptions, getProblem } from './features/guesser/guesserSlice';
import { useAppDispatch } from './app/hooks';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAnswerOptions());
    dispatch(getProblem());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Guesser />
      <Loading />
    </div>
  );
}

export default App;
