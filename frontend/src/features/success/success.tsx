import * as React from 'react';
import { selectGuess } from '../guesser/guesserSlice';
import { useAppSelector } from '../../app/hooks';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Success() {
    const { correctAlgo, isCorrect } = useAppSelector(selectGuess);
    return (
        <Box>
            <Typography variant='h2'>{isCorrect ? 'Correct!' : 'Incorrect!'}</Typography>
            <Typography variant='h5'>{isCorrect ? "Good job! That was a " : "The correct answer was: "} {correctAlgo}.</Typography>
        </Box>

    )

}

export default Success;