import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ScenarioState = {
    currentScenario?: null | any;
    isUpdatingScenario?: boolean;
};

const initialState: ScenarioState = {
    currentScenario: null,
    isUpdatingScenario: false,
};

export const scenarioSlice = createSlice({
    name: 'scenario',
    initialState,
    reducers: {
        setCurrentScenario: (state, action: PayloadAction<ScenarioState>) => {
            state.currentScenario = action.payload;
        },
        setUpdatingScenario: (state, action: PayloadAction<ScenarioState>) => {
            state.isUpdatingScenario = action.payload.isUpdatingScenario;
        },
        clearCurrentScenario: () => ({
            ...initialState,
        }),
    },
});

export const { setCurrentScenario, clearCurrentScenario, setUpdatingScenario } =
    scenarioSlice.actions;

export default scenarioSlice.reducer;
