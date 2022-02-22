import React from 'react';
import type { Props } from './Choice';
import AppChoice from './Choice';
import { Meta, Story } from '@storybook/react';
import { ChoiceType, Color } from '~/enums';

const config = {
    title: 'Choice',
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
                options: ChoiceType
            },
        }
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppChoice {...args} />;

export const Choice = Template.bind({});
Choice.args = {
};
