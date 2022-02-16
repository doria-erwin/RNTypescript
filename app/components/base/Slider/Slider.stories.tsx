import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '~/components/base/CenterView';
import Slider from '.';
import { color, number } from '@storybook/addon-knobs';
import { colors } from '~/styles';

const onChange = (value: number | number[]) => {
    console.log(value);
};

storiesOf('Slider', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('values', () => (
        <Slider values={[number('values', 0)]} onChange={onChange} />
    ))
    .add('min and max', () => (
        <Slider
            values={[number('values', 0)]}
            min={number('min', 0)}
            max={number('max', 100)}
            onChange={onChange}
        />
    ))
    .add('step', () => (
        <Slider
            values={[number('values', 0)]}
            step={number('step', 1)}
            onChange={onChange}
        />
    ))
    .add('selectedSlider', () => (
        <Slider
            values={[number('values', 0)]}
            selectedSlider={color('selectedSlider', colors.selectedSlider)}
            onChange={onChange}
        />
    ))
    .add('unselectedSlider', () => (
        <Slider
            values={[number('values', 0)]}
            unselectedSlider={color('unselectedSlider', colors.dark)}
            onChange={onChange}
        />
    ))
    .add('circleColor', () => (
        <Slider
            values={[number('values', 0)]}
            circleColor={color('circleColor', colors.light)}
            onChange={onChange}
        />
    ))
    .add('markerColor', () => (
        <Slider
            values={[number('values', 0)]}
            markerColor={color('markerColor', colors.selectedSlider)}
            onChange={onChange}
        />
    ));
