import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, boolean, text, number } from '@storybook/addon-knobs';
import CenterView from '~/components/base/CenterView';
import Avatar from '.';
import { Color } from '~/enums';

storiesOf('Avatar', module)
    .addDecorator(
        (
            getStory: () =>
                | boolean
                | React.ReactChild
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined,
        ) => <CenterView>{getStory()}</CenterView>,
    )
    .add('uri', () => <Avatar uri={text('uri', 'https://picsum.photos/200')} />)
    .add('size', () => (
        <Avatar
            uri="https://picsum.photos/200"
            size={select(
                'size',
                {
                    '40': 40,
                    '60': 60,
                    '80': 80,
                    '90': 90,
                },
                40,
            )}
        />
    ))
    .add('isCircle', () => (
        <Avatar
            uri="https://picsum.photos/200"
            isCircle={boolean('isCircle', true)}
        />
    ))
    .add('isBordered', () => (
        <Avatar
            uri="https://picsum.photos/200"
            isBordered={boolean('isBordered', true)}
        />
    ))
    .add('borderWidth', () => (
        <Avatar
            uri="https://picsum.photos/200"
            isBordered={boolean('isBordered', true)}
            borderWidth={number('borderWidth', 3)}
            borderColor={select('borderColor', Color, Color.base)}
        />
    ))
    .add('borderColor', () => (
        <Avatar
            uri="https://picsum.photos/200"
            isBordered={boolean('isBordered', true)}
            borderColor={select('borderColor', Color, Color.base)}
        />
    ))
    .add('backgroundColor', () => (
        <Avatar
            initials="OL"
            backgroundColor={select('backgroundColor', Color, Color.base)}
        />
    ))
    .add('initials', () => (
        <Avatar
            initials={text('initials', 'OL')}
            initialsColor={select('initialsColor', Color, Color.light)}
        />
    ))
    .add('borderRadius', () => (
        <Avatar
            initials={text('initials', 'OL')}
            initialsColor={select('initialsColor', Color, Color.light)}
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
        />
    ));
