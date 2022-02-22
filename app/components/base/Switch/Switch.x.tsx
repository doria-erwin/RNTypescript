import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '~/components/base/CenterView';
import Switch from '.';
import { boolean, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { colors } from '~/styles';

storiesOf('Switch', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('isOn', () => (
        <Switch isOn={boolean('isOn', true)} onChange={action('onChange')} />
    ))
    .add('backGroundColor', () => (
        <Switch
            isOn={boolean('isOn', true)}
            backGroundColorOff={color('backGroundColorOff', colors.toggleOff)}
            backGroundColorOn={color('backGroundColorOn', colors.toggleOn)}
            onChange={action('onChange')}
        />
    ));
