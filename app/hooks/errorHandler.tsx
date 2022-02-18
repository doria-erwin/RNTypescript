import { Alert } from 'react-native';
import RNRestart from 'react-native-restart';
import {
    setJSExceptionHandler,
    setNativeExceptionHandler,
} from 'react-native-exception-handler';

const alert = (exception: string, error?: Error, isFatal?: boolean) => {
    const header = 'Unexpected error occurred';
    let body = exception;

    if (error) {
        const { name, message } = error;
        body = `${isFatal ? 'Fatal' : ''} ${name} ${message}`;
    }

    Alert.alert(header, body, [
        {
            text: 'Restart',
            onPress: () => {
                // TODO: CALL API BEFORE RESTART INCLUDE (userId, message, time)
                RNRestart.Restart();
            },
        },
    ]);
};

const errorJSHandler = (error: Error, isFatal: boolean) => {
    alert('', error, isFatal);
};

const errorNativeHandler = (exception: string) => {
    alert(exception);
};

export default () => {
    // NOTE: wrap your code into try cath to prevent calling these handlers
    setJSExceptionHandler(errorJSHandler, true); // remove true to hide alerts on development
    setNativeExceptionHandler(errorNativeHandler);
};
