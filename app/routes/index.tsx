import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from './RootNavigation';
import { modalScreens, stackScreens } from './Screens';

const Stack = createStackNavigator();

type Props = {
    initialRoute: string;
};

const AppNavigation: React.FC<Props> = ({ initialRoute }) => {
    return (
        <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator initialRouteName={initialRoute}>
                    <Stack.Group>
                        {stackScreens.map((stack, i) => (
                            <Stack.Screen key={i} {...stack} />
                        ))}
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        {modalScreens.map((stack, i) => (
                            <Stack.Screen key={i} {...stack} />
                        ))}
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppNavigation;
