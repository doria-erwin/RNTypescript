import React, { ReactNode } from 'react';
import { View, TextInput, KeyboardType } from 'react-native';
import type { InputSize } from '~/types';
import { inputSize, inputContainerSize, padding } from '~/styles';
import styles from './inputStyles';

export type Props = {
    value?: string;
    defaultValue?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: InputSize;
    isPassword?: boolean;
    placeHolder?: string;
    keyboardType?: KeyboardType
    onChange: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
};

const Input: React.FC<Props> = ({
    value,
    defaultValue,
    leftIcon,
    rightIcon,
    size = 'lg',
    isPassword,
    placeHolder,
    keyboardType = 'default',
    onChange,
    onFocus,
    onBlur,
}) => {
    return (
        <View style={[styles.container, inputContainerSize[size]]}>
            {leftIcon}
            <TextInput
                value={value}
                defaultValue={defaultValue}
                secureTextEntry={isPassword}
                placeholder={placeHolder}
                onChangeText={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                keyboardType={keyboardType}
                style={[
                    styles.input,
                    inputSize[size],

                    !leftIcon ? padding.leftNone : null,
                    !rightIcon ? padding.rightNone : null,
                ]}
            />
            {rightIcon}
        </View>
    );
};

export default Input;
