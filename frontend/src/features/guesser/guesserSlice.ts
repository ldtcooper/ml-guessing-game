import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Nullable } from "../../app/types";

export interface GuesserState {
    options: Array<string>,
    answer: string,
    graph: string,
    isCorrect: Nullable<boolean>,
};

const initialState: GuesserState = {
    options: [],
    answer: '',
    graph: '',
    isCorrect: null
};

export const guesserSlice = createSlice({
    name: 'guesser',
    initialState,
    reducers: {
        setOptions: (state, action: PayloadAction<Array<string>>) => {
            state.options = action.payload;
        },
        setAnswer: (state, action: PayloadAction<string>) => {
            state.answer = action.payload;
        },
        setGraphHTML: (state, action: PayloadAction<string>) => {
            state.graph = action.payload;
        },
        setIsCorrect: (state, action: PayloadAction<boolean>) => {
            state.isCorrect = action.payload;
        }
    }
});

export const { setOptions, setAnswer, setGraphHTML, setIsCorrect } = guesserSlice.actions;

export const selectGuess = (state: RootState) => state.guesser;

export default guesserSlice.reducer;