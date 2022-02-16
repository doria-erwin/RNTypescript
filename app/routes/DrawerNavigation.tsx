import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabNavigation from './MainTabNavigation';
// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE

import Button from '~/components/base/Button/Button';

const NotificationsScreen = ({ navigation }: any) => {
    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Button onPress={() => navigation.goBack()} label="Go back home" />
        </View>
    );
};

const Drawer = createDrawerNavigator();

const AppDrawer: React.FC<any> = () => {
    return (
        <Drawer.Navigator initialRouteName="MainTab">
            <Drawer.Screen name="MainTab" component={MainTabNavigation} />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            {/** DRAWER SCREEN ENTRY CODE GENERATOR INDICATOR DO NOT DELETE */}
        </Drawer.Navigator>
    );
};

export default AppDrawer;
