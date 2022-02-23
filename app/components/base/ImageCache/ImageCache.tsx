import React from 'react';
import { View, Image } from 'react-native';
import styles from './imageCacheStyles';
import FastImage from 'react-native-fast-image';

export type Props = {
    uri: string;
    style?: Object;
    isStoryBook?: boolean
};

const ImageCache: React.FC<Props> = ({ uri, style, isStoryBook }) => {
    return (
        <View style={styles.container}>
            {
                isStoryBook ? <Image style={style} source={{ uri }} />
                    : <FastImage style={style} source={{ uri }} />
            }
        </View>
    );
};

export default ImageCache;
