import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getAnswerOptions, getProblem, getAnswerCheck, resetProblem } from "../guesser/guesserSlice";

export interface LoadingState {
    loading: boolean,
};

const initialState: LoadingState = {
    loading: false,
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAnswerOptions.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAnswerOptions.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(getProblem.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProblem.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(getAnswerCheck.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAnswerCheck.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(resetProblem.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(resetProblem.fulfilled, (state, action) => {
                state.loading = false;
            })
    }
});

export const { setLoading } = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;