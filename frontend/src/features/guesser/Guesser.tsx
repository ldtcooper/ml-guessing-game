import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { selectGuess } from './guesserSlice';
import { useAppSelector } from '../../app/hooks';
import Success from '../success/success';
import Dropdown from '../controls/dropdown';


function Guesser() {
    const { options, graph, isCorrect } = useAppSelector(selectGuess);
    return (
        <Box>
            {isCorrect == null ? null : <Success />}
            <div id='graph-container' />
            <Dropdown />
        </Box>
    );
}

export default Guesser;