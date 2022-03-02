import React from 'react';
import type { Props } from './Button';
import AppButton from './Button';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Base',
    component: AppButton,
    argTypes: {
        children: {
            description: 'Button children. Use `label` if text only.',
            type: { name: 'object', required: false },
            control: {
                type: 'object',
            },
        },
        onPress: () => {},
        style: {
            description: 'Button styling',
            type: { name: 'object', required: false },
        },
        isRounded: {
            description: 'Prop to make edges rounded',
            defaultValue: false,
            type: { name: 'boolean', required: false },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
            control: {
                type: 'boolean',
            },
        },
        isOutline: {
            description: 'Prop to use button outline',
            defaultValue: false,
            type: { name: 'boolean', required: false },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
            control: {
                type: 'boolean',
            },
        },
        variant: {
            description:
                'Button Color: The color should be declared first in `./app/styles/index`, under colorVariants. Then add it in here as options.',
            defaultValue: 'primary',
            type: { name: 'enum', required: false },
            table: {
                defaultValue: { summary: 'primary' },
            },
            control: {
                type: 'select',
            },
        },
        disabled: {
            description: 'Prop to make button disable',
            defaultValue: false,
            type: { name: 'boolean', required: false },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
            control: {
                type: 'boolean',
            },
        },
        isProcessing: {
            description: 'Prop to show loader',
            defaultValue: false,
            type: { name: 'boolean', required: false },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
            control: {
                type: 'boolean',
            },
        },
        label: {
            description: 'Button text',
            type: { name: 'string', required: false },
            control: {
                type: 'text',
            },
        },
        fontWeight: {
            description: 'Font Weight',
            defaultValue: 'regular',
            type: { name: 'enum', required: false },
            table: {
                defaultValue: { summary: 'regular' },
            },
            control: {
                type: 'inline-radio',
                options: ['light', 'regular', 'semiBold', 'bold', 'black'],
            },
        },
        fontSize: {
            description: 'Font Size',
            defaultValue: 16,
            type: { name: 'enum', required: false },
            table: {
                defaultValue: { summary: 16 },
            },
            control: {
                type: 'select',
                options: [40, 26, 24, 22, 20, 18, 16, 14, 12, 10],
            },
        },
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppButton {...args} />;

export const Button = Template.bind({});
Button.args = {
    label: 'Button',
};
