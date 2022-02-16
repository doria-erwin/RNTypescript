import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import Typography from '~/components/base/Typography/Typography';
import styles from './headerLeftStyles';

type Props = {
    title?: string;
    isWithBack?: boolean;
    isMain?: boolean;
    navigation: NavigationProp<any, any>;
    color: string;
};

const HeaderLeft: React.FC<any> = ({
    isWithBack,
    title,
    color,
    navigation,
    isMain,
}: Props) => {
    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.headerWrapper}>
            {isWithBack && (
                <TouchableOpacity
                    onPress={handleBack}
                    style={styles.headerButton}
                >
                    <Icon name="angle-left" size={25} color={color} />
                </TouchableOpacity>
            )}

            {title ? (
                <Typography
                    ellipsizeMode="tail"
                    numberOfLines={title.length > 20 ? 1 : 0}
                    style={{
                        ...(isMain
                            ? styles.headerMainTitle
                            : styles.headerTitle),
                        color,
                    }}
                >
                    {title}
                </Typography>
            ) : null}
        </View>
    );
};

HeaderLeft.defaultProps = {
    color: '#000000',
};

export default HeaderLeft;
