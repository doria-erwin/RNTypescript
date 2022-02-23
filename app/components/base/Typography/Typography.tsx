import * as React from 'react';
import { Text, TextProps } from 'react-native';
import type { FontWeight, FontSize, Color } from '~/types';
import { colors } from '~/styles/index';

export interface Props extends TextProps {
    fontWeight?: FontWeight;
    size?: FontSize;
    style?: Object;
    color?: Color;
    children: any;
}

const Typography: React.FC<Props> = ({
    fontWeight = 'regular',
    size = 16,
    style,
    color = 'base',
    children,
    ...extraProps
}) => {
    return (
        <Text
            {...extraProps}
            style={{
                fontSize: size,
                fontFamily: `Mulish-${fontWeight ? fontWeight : 'regular'}`,
                color: colors[color],
                ...style,
            }}
        >
            {children}
        </Text>
    );
};

export default Typography;
