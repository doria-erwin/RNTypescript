// @flow
import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import FlashNotification from './components/modules/FlashNotification/FlashNotification';
import { useAppSelector } from './redux/hooks';
import AppNavigation from './routes';

const AppWrapper: React.FC<any> = ({}) => {
    const { message } = useAppSelector(
        ({ flashNotification }) => flashNotification,
    );

    const initialRoute = 'Login';

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <>
            {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
            <AppNavigation initialRoute={initialRoute} />

            {!!message && <FlashNotification />}
        </>
    );
};

export default AppWrapper;
