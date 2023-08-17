import * as React from 'react';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../app/hooks';
import { resetProblem } from '../guesser/guesserSlice';

function PlayAgain() {
    const dispatch = useAppDispatch();

    return (
        <Button
            onClick={() => { dispatch(resetProblem()) }}
        >
            Another?
        </Button>
    );
}

export default PlayAgain;