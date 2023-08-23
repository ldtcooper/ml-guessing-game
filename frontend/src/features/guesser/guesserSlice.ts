import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Nullable, CheckBody, DeleteBody } from "../../app/types";
import { fetchAnswers, fetchProblem, checkAnswer, deleteGame } from "./guesserAPI";

export interface GuesserState {
    options: Array<string>,
    answer: string,
    graph: Object,
    id: number,
    isCorrect: Nullable<boolean>,
    correctAlgo: string,
    gamesPlayed: number,
    gamesWon: number,
};

const initialState: GuesserState = {
    options: [],
    answer: '',
    graph: {},
    id: -1,
    isCorrect: null,
    correctAlgo: '',
    gamesPlayed: 0,
    gamesWon: 0
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
    async ({ id, algo }: CheckBody) => {
        const resp = await checkAnswer(id, algo);
        return resp;
    }
)

export const getProblem = createAsyncThunk(
    'guesser/fetchProblem',
    async () => {
        const resp = await fetchProblem();
        return resp;
    }
);

export const resetProblem = createAsyncThunk(
    'guesser/reset',
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
                state.isCorrect = action.payload.correct;
                state.correctAlgo = action.payload.algo;
                state.gamesPlayed += 1;
                if (action.payload.correct) {
                    state.gamesWon += 1;
                }
            })
            .addCase(getProblem.fulfilled, (state, action) => {
                state.graph = action.payload.graph;
                state.id = action.payload.id;
            })
            .addCase(resetProblem.fulfilled, (state, action) => {
                state.graph = action.payload.graph;
                state.id = action.payload.id;
                // these need to reset for the new game
                state.answer = '';
                state.correctAlgo = '';
                state.isCorrect = null;
            })
    }
});

export const { setOptions, setAnswer, setGraphHTML, setIsCorrect } = guesserSlice.actions;

export const selectGuess = (state: RootState) => state.guesser;

export default guesserSlice.reducer;