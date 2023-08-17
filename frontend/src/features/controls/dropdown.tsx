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

function Dropdown() {
    const { answer, options } = useAppSelector(selectGuess);
    const dispatch = useAppDispatch();

    return (
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
                    onClick={() => { dispatch(getAnswerCheck({ id: -1, algo: answer })) }}
                    disabled={answer === ''}
                >
                    Submit
                </Button>
            </Stack>
        </Box >
    );
}

export default Dropdown;