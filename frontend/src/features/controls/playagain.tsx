import * as React from 'react';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetProblem, selectGuess } from '../guesser/guesserSlice';

function PlayAgain() {
    const dispatch = useAppDispatch();
    const { id } = useAppSelector(selectGuess);

    return (
        <Button
            onClick={() => { dispatch(resetProblem(id)) }}
        >
            Another?
        </Button>
    );
}

export default PlayAgain;