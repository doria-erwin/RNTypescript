import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Client as ClientType } from 'types';

export type ClientState = {
    selectedClient: null | any;
};

const initialState: ClientState = {
    selectedClient: null,
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClient: (state, action: PayloadAction<ClientState>) => {
            state.selectedClient = action.payload;
        },
        clearSelectedClient: () => ({
            ...initialState,
        }),
    },
});

export const { setClient, clearSelectedClient } = clientSlice.actions;

export default clientSlice.reducer;
