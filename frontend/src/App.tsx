import React, { useEffect } from 'react';
import Header from "./features/header/Header";
import Loading from "./features/loading/Loading";
import './App.css';
import Guesser from './features/guesser/Guesser';
import { getAnswerOptions, getProblem, selectGuess } from './features/guesser/guesserSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Score from './features/score/score';
import { Typography } from '@mui/material';
import { deleteGame } from './features/guesser/guesserAPI';


function App() {
  const dispatch = useAppDispatch();
  let shouldLoad = true;
  const { id } = useAppSelector(selectGuess);

  useEffect(() => {
    // stop multiple loads from happening
    if (shouldLoad) {
      shouldLoad = false;
      dispatch(getAnswerOptions());
      dispatch(getProblem());
      window.addEventListener('beforeunload', () => { deleteGame(id) })
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Guesser />
      <Loading />
      <Score />
      <Typography id='description' paragraph align='left' sx={{ margin: '2% 20%' }}>
        Welcome to Modle! What you see above you is the <a href="https://en.wikipedia.org/wiki/Decision_boundary" target='_blank' rel='noreferrer'>decision boundary</a>
        created by a machine learning algorithm and the data of the test set. Y
        our job is to guess which algorithm generated that boundary. Good luck!
      </Typography>
    </div>
  );
}

export default App;
