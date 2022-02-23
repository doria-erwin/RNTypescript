import React from 'react';
import type { Props } from './Slider';
import AppSlider from './Slider';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Base',
    component: AppSlider,
    argTypes: {
        onChange: {
            description: "Function to return number or number[]"
        },
        values: {
            description: "Values of slider",
            type: { name: 'array', required: true },
            defaultValue: [0],
            table: {
                defaultValue: {
                    summary: [0],
                },
            },
        },
        min: {
            description: "Minimum value of the slider"
        },
        max: {
            description: "Maximum value of the slider"
        },
        step: {
            description: "Number of step"
        },
        selectedSlider: {
            description: "Color of selected value",
            type: {
                name: 'color',
                required: false
            },
            control: {
                type: 'color',
            },
        },
        unselectedSlider: {
            description: "Color of unselected value",
            type: {
                name: 'color',
                required: false
            },
            control: {
                type: 'color',
            },
        },
        circleColor: {
            description: "Color of the circle",
            type: {
                name: 'color',
                required: false
            },
            control: {
                type: 'color',
            },
        },
        markerColor: {
            description: "Color of the marker",
            type: {
                name: 'color',
                required: false
            },
            control: {
                type: 'color',
            },
        },
        sliderLength: {
            description: "Length of the slider",
        }
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppSlider {...args} />;

export const Slider = Template.bind({});
Slider.args = {
};
