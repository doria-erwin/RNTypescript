/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import Sheet from 'react-native-raw-bottom-sheet';
import Button from '~/components/base/Button';
import { colors } from '~/styles';
import type { RefSheet } from '~/types';
import styles from './bottomSheetStyles';

type Props = {
    children: ReactNode;
    onSubmit?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
    hasCancel?: boolean;
    hasSubmit?: boolean;
    refSheet: RefSheet;
};

type HeaderActionProps = {
    onPress: () => void;
    label: string;
    style?: Object;
};

const HeaderAction: React.FC<HeaderActionProps> = ({ onPress, label }) => {
    return (
        <Button
            variant="link"
            label={label}
            onPress={onPress}
            fontColor={colors.base}
            fontSize={14}
            style={styles.headerText}
        />
    );
};

const BottomSheet: React.FC<Props> = ({
    children,
    hasCancel,
    hasSubmit,
    refSheet,
    onSubmit = () => {},
    onCancel = () => {},
    onClose = () => {},
}) => {
    const customSheetStyle = {
        draggableIcon: styles.draggableIcon,
    };

    return (
        <View style={styles.container}>
            <Sheet
                ref={refSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                customStyles={customSheetStyle}
                onClose={onClose}
            >
                <View style={styles.content}>
                    <View
                        style={[
                            styles.header,
                            {
                                justifyContent: hasCancel
                                    ? 'space-between'
                                    : 'flex-end',
                            },
                        ]}
                    >
                        {hasCancel && (
                            <HeaderAction label="Cancel" onPress={onCancel} />
                        )}
                        {hasSubmit && (
                            <HeaderAction label="Done" onPress={onSubmit} />
                        )}
                    </View>
                    {children}
                </View>
            </Sheet>
        </View>
    );
};

export default BottomSheet;
