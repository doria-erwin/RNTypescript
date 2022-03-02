import React from 'react';
import type { Props } from './Choice';
import AppChoice from './Choice';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Base',
    component: AppChoice,
    argTypes: {
        type: {
            description: "Choice type",
            type: { name: 'enum', required: false },
            defaultValue: 'check',
            table: {
                defaultValue: {
                    summary: 'check',
                },
            },
            control: {
                type: 'select',
            },
        },
        checked: {
            description: "Choice selected or not",
            type: { name: 'boolean', required: true },
            defaultValue: false,
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
        containerStyle: {
            description: "Style of the container",
            type: { name: 'object', required: false },
            defaultValue: {},
            table: {
                defaultValue: {
                    summary: {},
                },
            },
        },
        actionStyle: {
            description: "Style of the component inside of the container",
            type: { name: 'object', required: false },
            defaultValue: {},
            table: {
                defaultValue: {
                    summary: {},
                },
            },
        },
        value: {
            description: "Choice value, can be string or number",
            type: { name: 'string', required: true },
            defaultValue: undefined,
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        }
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppChoice {...args} />;

export const Choice = Template.bind({});
Choice.args = {
};
