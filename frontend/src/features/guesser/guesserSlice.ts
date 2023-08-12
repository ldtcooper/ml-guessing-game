import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type Nullable<T> = T | null;

export interface GuesserState {
    options: Array<string>,
    answer: Nullable<string>,
    graph: Nullable<string>,
    isCorrect: Nullable<boolean>,
};

const initialState: GuesserState = {
    options: [],
    answer: null,
    graph: null,
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

export default guesserSlice.reducer;