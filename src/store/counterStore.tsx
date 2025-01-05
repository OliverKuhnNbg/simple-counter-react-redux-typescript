import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
    inputValue: number;
}

const initialState: CounterState = {
    value: 0,
    inputValue: 1,
};

const counterStore = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            console.log("incremnet called")
            state.value += state.inputValue;
        },
        decrement(state) {
            console.log("decremnet called")
            state.value -= state.inputValue;
        },
        setCounterValue(state, action: PayloadAction<number>) {
            state.inputValue = action.payload; // Aktion zum Setzen des Input-Werts
        },
    },
});

export const { increment, decrement, setCounterValue } = counterStore.actions;
export default counterStore.reducer;
export type CounterInitState = ReturnType<typeof counterStore.getInitialState>