import * as React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import type { ButtonVariant, FontSize, FontWeight } from '~/types/';
import { colorVariants } from '~/styles/';
import Typography from '../Typography/Typography';
import styles from './buttonStyles';

type Props = {
    children?: JSX.Element;
    onPress: () => void;
    style?: Object;
    isRounded?: boolean;
    isOutline?: boolean;
    variant?: ButtonVariant;
    disabled?: boolean;
    isProcessing?: boolean;

    // for button label
    label?: string;
    fontWeight?: FontWeight;
    fontSize?: FontSize;
    fontColor?: string;
};

const Button: React.FC<Props> = ({
    onPress,
    children,
    style,
    isRounded,
    isOutline,
    label,
    fontWeight,
    fontSize,
    fontColor,
    variant = 'primary',
    disabled,
    isProcessing,
}) => {
    let button = [styles.buttonContainer, style];

    if (isRounded) {
        button.push(styles.rounded);
    }

    const handlePress = () => {
        onPress && onPress();
    };

    const backgroundColorStyle = isOutline ? '#fff' : colorVariants[variant];

    const fontColorStyle =
        isOutline || variant === 'link' ? colorVariants[variant] : '#fff';

    return (
        <TouchableOpacity
            style={[
                // eslint-disable-next-line react-native/no-inline-styles
                {
                    backgroundColor:
                        variant === 'link'
                            ? 'transparent'
                            : backgroundColorStyle,
                    borderColor:
                        variant === 'link'
                            ? 'transparent'
                            : colorVariants[variant],
                    borderWidth: 1,
                },
                button,
            ]}
            onPress={handlePress}
            disabled={disabled}
        >
            {isProcessing && (
                <ActivityIndicator
                    style={styles.loading}
                    color={isOutline ? colorVariants[variant] : '#fff'}
                />
            )}

            {children}

            {label && (
                <Typography
                    style={{
                        color: fontColor ? fontColor : fontColorStyle,
                    }}
                    fontWeight={fontWeight}
                    size={fontSize}
                >
                    {label}
                </Typography>
            )}
        </TouchableOpacity>
    );
};

export default Button;
