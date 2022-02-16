import {
    Action,
    configureStore,
    ThunkAction,
    combineReducers,
} from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import {
    authentication,
    client,
    flashNotification,
    modalEvent,
    scenario,
} from './reducers';
// composeWithDevTools(applyMiddleware(...middleware),

import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer<any, any>(
    persistConfig,
    combineReducers({
        authentication,
        client,
        flashNotification,
        modalEvent,
        scenario,
    }),
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
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
