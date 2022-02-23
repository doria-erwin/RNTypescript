import React from 'react';
import type { Props } from './HeaderLeft';
import AppHeaderLeft from './HeaderLeft';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Modules',
    component: AppHeaderLeft,
    argTypes: {
        title: {
            description: "Header left title",
            type: {
                name: 'string',
                require: false
            },
        },
        isWithBack: {
            description: "It shows back button",
            type: {
                name: 'boolean',
                required: false
            },
            table: {
                defaultValue: {
                    summary: false
                }
            }
        },
        isMain: {
            description: "Determine if it's main header",
            type: {
                name: 'boolean',
                required: false
            },
            table: {
                defaultValue: {
                    summary: false
                }
            }
        },
        color: {
            description: "Color of the title and back button icon",
            type: {
                name: 'color',
                required: false
            },
            control: {
                type: 'color',
            },
        }
    }
};

export default config as Meta;

const Template: Story<Props> = args => <AppHeaderLeft {...args} />;

export const HeaderLeft = Template.bind({});
HeaderLeft.args = {
    title: "Header"
};
