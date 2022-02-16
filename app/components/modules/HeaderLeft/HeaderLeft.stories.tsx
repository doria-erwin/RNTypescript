import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, boolean, color } from '@storybook/addon-knobs';
import HeaderLeft from '.';

storiesOf('HeaderLeft', module)
    .add('title', () => <HeaderLeft title={text('title', 'Header')} />)
    .add('isWithBack', () => (
        <HeaderLeft
            title={text('title', 'Header')}
            isWithBack={boolean('isWithBack', true)}
        />
    ))
    .add('isMain', () => (
        <HeaderLeft
            title={text('title', 'Header')}
            isMain={boolean('isMain', true)}
        />
    ))
    .add('color', () => (
        <HeaderLeft
            title={text('title', 'Header')}
            color={color('color', '#222')}
        />
    ));
