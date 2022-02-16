import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, boolean, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Button from '.';
import { ButtonVariant, FontWeight } from '~/enums';
import CenterView from '~/components/base/CenterView';

storiesOf('Button', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('variant', () => (
        <Button
            label="Click me"
            onPress={action('click me')}
            variant={select('variant', ButtonVariant, ButtonVariant.primary)}
        />
    ))
    .add('isRounded', () => (
        <Button
            label="Click me"
            onPress={action('click me')}
            variant={ButtonVariant.primary}
            isRounded={boolean('isRounded', true)}
        />
    ))
    .add('isOutline', () => (
        <Button
            label="Click me"
            onPress={action('click me')}
            variant={ButtonVariant.primary}
            isOutline={boolean('isOutline', true)}
        />
    ))
    .add('disabled', () => (
        <Button
            label="Click me"
            onPress={action('click me')}
            variant={ButtonVariant.primary}
            disabled={boolean('disabled', true)}
        />
    ))
    .add('isProcessing', () => (
        <Button
            label="Click me"
            onPress={action('click me')}
            variant={ButtonVariant.primary}
            isProcessing={boolean('isProcessing', true)}
        />
    ))
    .add('fontWeight', () => (
        <Button
            label="Click me"
            onPress={action('click me')}
            variant={ButtonVariant.primary}
            fontWeight={select('fontWeight', FontWeight, FontWeight.regular)}
        />
    ))
    .add('fontSize', () => (
        <Button
            label="Click me"
            onPress={action('click me')}
            variant={ButtonVariant.primary}
            fontSize={select(
                'fontSize',
                {
                    '40': 40,
                    '26': 26,
                    '24': 24,
                    '22': 22,
                    '20': 20,
                    '18': 18,
                    '16': 16,
                    '14': 14,
                    '12': 12,
                    '10': 10,
                },
                12,
            )}
        />
    ))
    .add('fontColor', () => (
        <Button
            label="Click me"
            onPress={action('click me')}
            variant={ButtonVariant.primary}
            fontColor={color('fontColor', '#fff')}
        />
    ));
