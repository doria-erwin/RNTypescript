import React from 'react';
import { TransitionPresets } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import Typography from '~/components/base/Typography/Typography';
import HeaderLeft from '~/components/modules/HeaderLeft/HeaderLeft';
import { colors, headerBackground } from '~/styles/index';

/** ---------------------SCREEN OPTIONS--------------------- */

export const headerConfig = {
    headerTitle: (props: any) => {
        return (
            <Typography
                numberOfLines={props.children.length > 20 ? 1 : 0}
                size={20}
            >
                {props.children}
            </Typography>
        );
    },
};

export const headerConfigWithBack = {
    // ...headerConfig,
    headerLeft: () => (
        <HeaderLeft
            color={colors.dark}
            navigation={navigationRef.current}
            isWithBack={true}
        />
    ),
};

const config = {
    animation: 'timing',
    config: { duration: 200 },
};

export const modalOptions = {
    cardStyle: { backgroundColor: 'rgba(0,0,0,0.4)' },
    gestureEnabled: true,
    animationEnabled: false,
    cardOverlayEnabled: true,
    transitionSpec: {
        open: config,
        close: config,
    },
};

export const screenConfig = {
    headerTitle: '',
    gestureEnabled: false,
    ...TransitionPresets.DefaultTransition,
    headerStyle: {
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        shadowOpacity: 0,
        elevation: 0,
        backgroundColor: headerBackground,
    },
    headerShown: false,
    headerTintColor: colors.brand,
};
