import React from 'react';
import { View } from 'react-native';
import type { BorderRadius, AvatarSize, Color } from '~/types';
import { colors } from '~/styles';
import Typography from '~/components/base/Typography';
import ImageCache from '../ImageCache';
import styles from './avatarStyles';

export type Props = {
    uri?: string;
    borderRadius?: BorderRadius;
    size?: AvatarSize;
    isCircle?: boolean;
    isBordered?: boolean;
    borderColor?: Color;
    backgroundColor?: Color;
    initials?: string;
    initialsColor?: Color;
    borderWidth?: number;
    style?: Object;
    avatarStyle?: Object;
    isStoryBook?: boolean
};

type InitialProps = {
    initials: string;
    initialsColor: Color;
    backgroundColor: Color;
};

const Initials: React.FC<InitialProps> = ({
    initials,
    initialsColor,
    backgroundColor,
}) => {
    return (
        <Typography
            color={backgroundColor !== 'light' ? initialsColor : 'dark'}
            size={16}
        >
            {initials}
        </Typography>
    );
};

const Avatar: React.FC<Props> = ({
    uri,
    borderRadius = 4,
    size = 80,
    isCircle,
    isBordered,
    borderColor = 'light',
    borderWidth = 3,
    backgroundColor = 'base',
    initials,
    initialsColor = 'light',
    style,
    avatarStyle,
    isStoryBook
}) => {

    const borderRadiusSize = isCircle ? size : borderRadius;

    const borderedStyle = isBordered && {
        borderWidth,
        borderColor: colors[borderColor],
    };

    const containerStyle = {
        borderRadius: borderRadiusSize,
        backgroundColor: colors[backgroundColor],
        height: size,
        width: size,
        ...borderedStyle,
    };

    const imageStyle = {
        borderRadius: borderRadiusSize,
        resizeMode: 'contain',
        height: size,
        width: size,
        ...borderedStyle,
    };

    return (
        <View style={[styles.container, containerStyle, style]}>
            {initials && !uri && (
                <Initials
                    initials={initials}
                    initialsColor={initialsColor}
                    backgroundColor={backgroundColor}
                />
            )}
            {uri && <ImageCache
                style={[styles.avatar,
                    imageStyle,
                    avatarStyle]}
                uri={uri}
                isStoryBook={isStoryBook}
            />}
        </View>
    );
};

export default Avatar;
