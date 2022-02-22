import React from 'react';
import type { Props } from './Slider';
import AppSlider from './Slider';
import { Meta, Story } from '@storybook/react';
import { ChoiceType, Color } from '~/enums';

const config = {
    title: 'Slider',
    component: AppSlider,
    argTypes: {
        onChange: () => {},
        values: {
            description: "Values of slider",
            type: { name: 'array', required: true },
            defaultValue: [0],
            table: {
                defaultValue: {
                    summary: [0],
                },
            },
            control: {
                type: 'number'
            },
        }
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppSlider {...args} />;

export const Slider = Template.bind({});
Slider.args = {
};
