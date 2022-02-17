import {
    Action,
    configureStore,
    ThunkAction,
    combineReducers,
    AnyAction,
} from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
// composeWithDevTools(applyMiddleware(...middleware),

import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLoggingOut } from './modules/authentication';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const appReducers = combineReducers(reducers);
const rooReducers = (
    state: ReturnType<typeof appReducers>,
    action: AnyAction,
) => {
    if (action.type === setLoggingOut.type) {
        return appReducers(undefined, { type: undefined });
    }
    return appReducers(state, action);
};

const persistedReducer = persistReducer<any, any>(persistConfig, rooReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
