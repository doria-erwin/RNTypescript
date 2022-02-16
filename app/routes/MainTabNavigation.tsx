import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Typography from '~/components/base/Typography/Typography';
import Button from '~/components/base/Button/Button';

// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE

import { screenConfig, headerConfigWithBack } from './config';

const Tab = createBottomTabNavigator();

const MainTabNavigation: React.FC<any> = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                title: route.name,
                tabBarIcon: ({ color, size }: any) => {
                    let iconName = '';

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Settings') {
                        iconName = 'cogs';
                    }

                    return (
                        <FontAwesome
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
            // headerMode='screen'
            // tabBarOptions={{
            //     activeTintColor: colors.brand,
            //     inactiveTintColor: 'gray',
            // }}>
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ ...screenConfig, ...headerConfigWithBack }}
            />
            {/** TAB SCREEN ENTRY CODE GENERATOR INDICATOR DO NOT DELETE */}
        </Tab.Navigator>
    );
};

export default MainTabNavigation;

/**
 * THESE ARE JUST PLACEHOLDERS
 */
function HomeScreen({ navigation }: any) {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Typography>Home!</Typography>
            <Button
                onPress={() => navigation.navigate('Modal')}
                label="Open Modal"
                style={{ marginVertical: 10 }}
            />
            <Button
                onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                }
                label="Toggle drawer"
            />
        </View>
    );
}

function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Typography>Settings!</Typography>
        </View>
    );
}
