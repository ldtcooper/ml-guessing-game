import * as React from 'react';
import { selectGuess } from '../guesser/guesserSlice';
import { useAppSelector } from '../../app/hooks';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const getWinRate = (played: number, won: number): string => {
    const rawRate = (won / played) * 100
    return rawRate.toFixed(2);
}

function GameCount() {
    const { gamesPlayed, gamesWon } = useAppSelector(selectGuess);
    return (
        <Card sx={{ position: "absolute", top: '10%', right: '10%', maxWidth: '15%', padding: '30px' }}>
            {
                gamesPlayed === 0 ?
                    <Typography align='left' paragraph>Your score will go here once it stops being <code>RangeError: BigInt divide by zero</code></Typography> : (
                        <Box>
                            <Typography align="left" variant="h6">Wins: {gamesWon} out of {gamesPlayed}</Typography>
                            <Typography align="left" variant="caption">(That's a {getWinRate(gamesPlayed, gamesWon)}% win rate)</Typography>
                        </Box>
                    )}
        </Card>
    )
}

export default GameCount;