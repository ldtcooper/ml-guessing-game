import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Nullable } from "../../app/types";
import { fetchAnswers, fetchProblem, checkAnswer } from "./guesserAPI";

export interface GuesserState {
    options: Array<string>,
    answer: string,
    graph: Object,
    id: Nullable<number>,
    isCorrect: Nullable<boolean>,
};

const initialState: GuesserState = {
    options: [],
    answer: '',
    graph: {},
    id: null,
    isCorrect: null
};

export const getAnswerOptions = createAsyncThunk(
    'guesser/getAnswerOptions',
    async () => {
        const resp = await fetchAnswers();
        return resp;
    }
)

export const getAnswerCheck = createAsyncThunk(
    'guesser/checkAnswer',
    async (body) => {
        debugger;
        // const resp = await checkAnswer(body.id, body.algo);
        // return resp;
    }
)

export const getProblem = createAsyncThunk(
    'guesser/fetchProblem',
    async () => {
        const resp = await fetchProblem();
        return resp;
    }
);

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAnswerOptions.fulfilled, (state, action) => {
                state.options = action.payload;
            })
            .addCase(getAnswerCheck.fulfilled, (state, action) => {

            })
            .addCase(getProblem.fulfilled, (state, action) => {
                state.graph = action.payload.graph;
                state.id = action.payload.id;
            })
    }
});

export const { setOptions, setAnswer, setGraphHTML, setIsCorrect } = guesserSlice.actions;

export const selectGuess = (state: RootState) => state.guesser;

export default guesserSlice.reducer;