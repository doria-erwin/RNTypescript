import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styles from './centerViewStyles';

type Props = {
    children: ReactNode;
};

const CenterView: React.FC<Props> = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

export default CenterView;
