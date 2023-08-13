import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { selectGuess } from './guesserSlice';
import { useAppSelector } from '../../app/hooks';
import Success from '../success/success';
import Dropdown from '../controls/dropdown';
import PlayAgain from '../controls/playagain';


function Guesser() {
    const { graph, isCorrect } = useAppSelector(selectGuess);
    return (
        <Box>
            {isCorrect == null ? null : <Success />}
            <div id='graph-container' />
            {isCorrect == null ? <Dropdown /> : <PlayAgain />}
        </Box>
    );
}

export default Guesser;