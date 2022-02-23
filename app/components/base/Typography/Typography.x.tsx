import React from 'react';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Typography from '.';
import { Color, FontWeight } from '~/enums';

storiesOf('Typography', module)
    .add('size', () => (
        <Typography
            size={select(
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
        >
            Typography
        </Typography>
    ))
    .add('color', () => (
        <Typography color={select('color', Color, Color.base)}>
            Typography
        </Typography>
    ))
    .add('fontWeight', () => (
        <Typography
            fontWeight={select('fontWeight', FontWeight, FontWeight.regular)}
        >
            Typography
        </Typography>
    ));
