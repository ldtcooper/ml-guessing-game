import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectGuess, setAnswer, getAnswerCheck } from '../guesser/guesserSlice';
import { Explanations } from '../../app/types';

const clarification: Explanations = {
    "Logistic Regression": "One-vs-Rest",
    "Polynomial Kernel Support Vector Machine": "One-vs-One",
    "RBF Kernel Support Vector Machine": "One-vs-One"
};


function Dropdown() {
    const { id, answer, options } = useAppSelector(selectGuess);
    const dispatch = useAppDispatch();

    return (
        <Stack spacing={2} direction="column">
            <Box>
                <Stack spacing={2} direction="row">
                    <FormControl sx={{ width: 350 }}>
                        <InputLabel id="demo-simple-select-label">Choose an Algorithm</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={answer}
                            label="Choose an Algorithm"
                            onChange={(e => dispatch(setAnswer(e.target.value)))}
                        >
                            {
                                options.map((el) => <MenuItem value={el} key={el}> {el}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <Button
                        variant='outlined'
                        onClick={() => { dispatch(getAnswerCheck({ id, algo: answer })) }}
                        disabled={answer === ''}
                    >
                        Submit
                    </Button>
                </Stack>
            </Box >
            {
                Object.keys(clarification).includes(answer) ?
                    <p>{`Multiclass problems handled by ${clarification[answer]}`}</p> :
                    null
            }
        </Stack>
    );
}

export default Dropdown;