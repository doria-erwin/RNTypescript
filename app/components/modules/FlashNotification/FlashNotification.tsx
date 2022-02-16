/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import Typography from '~/components/base/Typography/Typography';
import { setFlashNotification } from '~/redux/modules/flashNotification';
import styles from './flashNotificationStyles';

type Props = {
    // set props
};

const FlashNotification: React.FC<Props> = ({}: Props) => {
    const dispatch = useAppDispatch();
    // Initial value for opacity: 0
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const { message, isError, duration } = useAppSelector(
        ({ flashNotification }) => flashNotification,
    );

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => {
                    // call clear redux state
                    setTimeout(() => {
                        dispatch(setFlashNotification({}));
                    }, 100);
                });
            }, duration);
        });
    }, []);

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <View
                style={[
                    styles.notification,
                    styles[`background${isError ? 'error' : 'success'}`],
                ]}
            >
                <Typography>{message}</Typography>
            </View>
        </Animated.View>
    );
};

export default FlashNotification;
