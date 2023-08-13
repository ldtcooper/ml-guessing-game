import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectGuess, setAnswer } from '../guesser/guesserSlice';

function Dropdown() {
    const { answer, options } = useAppSelector(selectGuess);
    const dispatch = useAppDispatch();

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ width: '12%' }}>
                <InputLabel id="demo-simple-select-label">Choose an Algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={answer}
                    label="Age"
                    onChange={(e => dispatch(setAnswer(e.target.value)))}
                >
                    {
                        options.map((el) => <MenuItem value={el} key={el}> {el}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </Box >
    );
}

export default Dropdown;