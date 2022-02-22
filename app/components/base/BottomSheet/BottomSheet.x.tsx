/* eslint-disable prettier/prettier */
import React, { createRef } from 'react';
import { storiesOf } from '@storybook/react-native';
import BottomSheet from '.';
import Typography from '../Typography';
import Sheet from 'react-native-raw-bottom-sheet';
import Button from '../Button';

type Props = {};

const SheetFC: React.FC<Props> = ({}) => {
    const ref = createRef<Sheet>();

    const onCloseSheet = () => {
        ref?.current?.close();
    };

    const onShow = () => {
        console.log('show', ref);
        ref?.current?.open();
    };

    const onSubmit = () => {
        console.log('submitted');
        onCloseSheet();
    };

    const onCancel = () => {
        console.log('cancelled');
        onCloseSheet();
    };

    const onClose = () => {
        console.log('closed');
    };

    return (
        <>
            <Button label="Show Bottom Sheet" onPress={onShow} />
            <BottomSheet
                refSheet={ref}
                onSubmit={onSubmit}
                onCancel={onCancel}
                onClose={onClose}
                hasCancel={true}
                hasSubmit={true}
            >
                <Typography>Bottom Sheet</Typography>
            </BottomSheet>
        </>
    );
};

storiesOf('BottomSheet', module)
    .add('children', () => <SheetFC />);
