import * as React from 'react';
import { Platform, Text, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import AppWrapper from './AppWrapper';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// Text.defaultProps = {
//     ...Text.defaultProps,
//     allowFontScaling: false
// };

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App: React.FC<any> = () => {
    const Loading = <Text>Loading...</Text>;

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={Loading}>
                <AppWrapper />
            </PersistGate>
        </Provider>
    );
};

export default App;
