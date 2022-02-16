import React from 'react';
import { View } from 'react-native';
import Typography from '~/components/base/Typography/Typography';
import styles from './modalStyles';

type Props = {
    // set props
};

const ModalScreen: React.FC<any> = ({}: Props) => {
    return (
        <View style={styles.container}>
            <Typography>Modal</Typography>
        </View>
    );
};

export default ModalScreen;
