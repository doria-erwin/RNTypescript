import React, { ReactNode } from 'react';
import { View } from 'react-native';
import type { BorderRadius, Color } from '~/types';
import { colors } from '~/styles';
import styles from './cardStyles';

export type Props = {
    children: ReactNode;
    backgroundColor?: Color;
    borderRadius?: BorderRadius;
    isBordered?: boolean;
    borderColor?: Color;
    borderWidth?: number;
    style?: Object;
};

const Card: React.FC<Props> = ({
    children,
    backgroundColor = 'base',
    borderRadius,
    isBordered,
    borderWidth = 1,
    borderColor = 'light',
    style,
}) => {
    const containerStyle = {
        backgroundColor: colors[backgroundColor],
        borderRadius,
    };

    const borderedStyle = isBordered && {
        borderWidth,
        borderColor: colors[borderColor],
    };

    return (
        <View style={[styles.container, containerStyle, borderedStyle, style]}>
            {children}
        </View>
    );
};

export default Card;
