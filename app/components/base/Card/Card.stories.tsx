import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '~/components/base/CenterView';
import Card from '.';
import Typography from '~/components/base/Typography';
import { boolean, number, select } from '@storybook/addon-knobs';
import { Color } from '~/enums';

storiesOf('Card', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('children', () => (
        <Card>
            <Typography color="light">Card</Typography>
        </Card>
    ))
    .add('isBordered', () => (
        <Card isBordered={boolean('isBordered', true)} borderColor="dark">
            <Typography color="light">Card</Typography>
        </Card>
    ))
    .add('borderColor', () => (
        <Card
            isBordered={true}
            borderColor={select('borderColor', Color, Color.dark)}
        >
            <Typography color="light">Card</Typography>
        </Card>
    ))
    .add('borderWidth', () => (
        <Card
            isBordered={true}
            borderColor={Color.dark}
            borderWidth={number('borderWidth', 1)}
        >
            <Typography color="light">Card</Typography>
        </Card>
    ))
    .add('borderRadius', () => (
        <Card
            borderRadius={select(
                'borderRadius',
                {
                    '4': 4,
                    '6': 6,
                    '9': 9,
                    '12': 12,
                },
                4,
            )}
        >
            <Typography color="light">Card</Typography>
        </Card>
    ))
    .add('backgroundColor', () => (
        <Card backgroundColor={select('backgroundColor', Color, Color.base)}>
            <Typography color="light">Card</Typography>
        </Card>
    ));
