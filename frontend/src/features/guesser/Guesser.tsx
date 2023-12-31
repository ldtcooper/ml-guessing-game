import * as React from 'react';
import Box from '@mui/material/Box';
import { selectGuess } from './guesserSlice';
import { useAppSelector } from '../../app/hooks';
import Success from '../success/success';
import Dropdown from '../controls/dropdown';
import PlayAgain from '../controls/playagain';
import Graph from '../graph/graph';

function Guesser() {
    const { graph, isCorrect } = useAppSelector(selectGuess);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {isCorrect == null ? null : <Success />}
            <Graph graphJson={graph} />
            {isCorrect == null ? <Dropdown /> : <PlayAgain />}
        </Box>
    );
}

export default Guesser;