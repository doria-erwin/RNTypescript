// @flow
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import FlashNotification from './components/modules/FlashNotification/FlashNotification';
import { useAppSelector } from './redux/hooks';
import AppNavigation from './routes';
import errorHandler from './hooks/errorHandler';
import { isIOS } from './utils/platform';

const AppWrapper: React.FC<any> = ({}) => {
    errorHandler();

    const { message } = useAppSelector(
        ({ flashNotification }) => flashNotification,
    );

    const initialRoute = 'Login';

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <>
            {isIOS && <StatusBar barStyle="dark-content" />}
            <AppNavigation initialRoute={initialRoute} />

            {!!message && <FlashNotification />}
        </>
    );
};

export default AppWrapper;
