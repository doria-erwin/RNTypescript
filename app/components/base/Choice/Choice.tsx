import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import type { Choice as Chc, ChoiceVariant, ChoiceValue } from '~/types';
import { borderRadius, colorVariants } from '~/styles';
import styles from './choiceStyles';

type Props = {
    checked: boolean;
    variant?: ChoiceVariant;
    onChange: (value: ChoiceValue) => void;
    containerStyle?: Object;
    actionStyle?: Object;
    type?: Chc;
    value: ChoiceValue;
};

const Choice: React.FC<Props> = ({
    checked,
    variant = 'primary',
    onChange,
    containerStyle,
    actionStyle,
    type = 'check',
    value,
}) => {
    const size = type === 'check' ? 20 : 16;

    const cntnrStyle = {
        borderColor: colorVariants[variant],
        backgroundColor:
            checked && type === 'check' ? colorVariants[variant] : '#fff',
        borderRadius: type === 'radio' ? 16 : borderRadius.xs,
        height: size,
        width: size,
    };

    const radioStyle = {
        backgroundColor:
            checked && type === 'radio'
                ? colorVariants[variant]
                : 'transparent',
    };

    const checkColor = checked ? '#fff' : 'transparent';

    return (
        <View style={[styles.container, cntnrStyle, containerStyle]}>
            <TouchableOpacity
                onPress={() => onChange(value)}
                style={styles.touch}
            >
                {checked && (
                    <>
                        {type === 'check' ? (
                            <Icon
                                name="check"
                                size={18}
                                color={checkColor}
                                style={actionStyle}
                            />
                        ) : (
                            <View
                                style={[styles.radio, radioStyle, actionStyle]}
                            />
                        )}
                    </>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default Choice;
