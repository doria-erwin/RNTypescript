import React from 'react';
import { View } from 'react-native';
import styles from './imageCacheStyles';
import FastImage from 'react-native-fast-image';

type Props = {
    uri: string;
    style?: Object;
};

const ImageCache: React.FC<Props> = ({ uri, style }) => {
    return (
        <View style={styles.container}>
            <FastImage style={style} source={{ uri }} />
        </View>
    );
};

export default ImageCache;
