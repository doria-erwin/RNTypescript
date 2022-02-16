import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet, View, Easing, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { popupContainer } from '~/styles/index';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

export default function withAnimatedPopup(Comp, isFullScreen = false) {
    WrapperComponent.displayName = `withAnimatedPopup(${
        Comp.displayName || Comp.name
    })`;

    function WrapperComponent(props) {
        const fadeAnim = useRef(new Animated.Value(0)).current;
        let heightContainer = isFullScreen ? SCREEN_HEIGHT : SCREEN_HEIGHT / 2;

        useEffect(() => {
            fadeAnim.setValue(0);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        }, [fadeAnim]);

        const translateY = fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [heightContainer, 0],
        });

        if (isFullScreen) {
            return (
                <Animated.View
                    style={[
                        styles.container,
                        {
                            transform: [
                                {
                                    translateY,
                                },
                            ],
                        },
                    ]}
                >
                    <Comp {...props} />
                </Animated.View>
            );
        }

        return (
            <View style={styles.popupWrapper}>
                <Animated.View
                    style={[
                        styles.popupContainer,
                        {
                            transform: [
                                {
                                    translateY,
                                },
                            ],
                        },
                    ]}
                >
                    <SafeAreaView
                        style={styles.default}
                        onLayout={({
                            nativeEvent: {
                                layout: { height },
                            },
                        }) => {
                            heightContainer = height;
                        }}
                    >
                        <Comp {...props} />
                    </SafeAreaView>
                </Animated.View>
            </View>
        );
    }

    return hoistNonReactStatic(WrapperComponent, Comp);
}

const styles = StyleSheet.create({
    popupWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    popupContainer,
    default: {
        alignItems: 'center',
        ...popupContainer,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
