import React from 'react';
import { View } from 'react-native';
import Sldr from '@ptomasroos/react-native-multi-slider';
import styles from './sliderStyles';
import { colors } from '~/styles';

export type Props = {
    values: number[] | undefined;
    onChange: (value: number | number[]) => void;
    min?: number;
    max?: number;
    step?: number;
    selectedSlider?: string;
    unselectedSlider?: string;
    circleColor?: string;
    markerColor?: string;
};

type MarkerProps = {
    markerStyle: Object;
    circleStyle: Object;
};

const Marker: React.FC<MarkerProps> = ({ markerStyle, circleStyle }) => {
    return (
        <View style={[styles.marker, markerStyle]}>
            <View style={[styles.circle, circleStyle]} />
        </View>
    );
};

const Slider: React.FC<Props> = ({
    values,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    selectedSlider = colors.selectedSlider,
    unselectedSlider = colors.dark,
    circleColor = colors.light,
    markerColor = colors.selectedSlider,
}) => {
    const selectedStyle = {
        backgroundColor: selectedSlider,
    };

    const unSelectedStyle = {
        backgroundColor: unselectedSlider,
    };

    const circleStyle = {
        backgroundColor: circleColor,
    };

    const markerStyle = {
        backgroundColor: markerColor,
    };

    return (
        <View style={styles.container}>
            <Sldr
                values={values}
                onValuesChangeFinish={onChange}
                min={min}
                max={max}
                step={step}
                trackStyle={styles.track}
                selectedStyle={selectedStyle}
                unselectedStyle={unSelectedStyle}
                customMarker={() => (
                    <Marker
                        markerStyle={[styles.marker, markerStyle]}
                        circleStyle={[styles.circle, circleStyle]}
                    />
                )}
            />
        </View>
    );
};

export default Slider;
