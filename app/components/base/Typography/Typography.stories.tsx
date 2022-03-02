import React from 'react';
import type { Props } from './Typography';
import AppTypography from './Typography';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Base',
    component: AppTypography,
    argTypes: {
        children: {
            description: 'Typography children',
        },
        fontWeight: {
            description: "Font weight of typography",
            type: {
                name: 'enum',
                required: false
            },
            defaultValue: 'regular',
            table: {
                defaultValue: {
                    summary: 'regular',
                },
            },
            control: {
                name: 'select',
            }
        },
        size: {
            description: "Size of typography",
            type: {
                name: 'enum',
                required: false
            },
            defaultValue: 16,
            table: {
                defaultValue: {
                    summary: 16,
                },
            },
            control: {
                name: 'select',
                options: [
                    40,
                    26,
                    24,
                    22,
                    20,
                    18,
                    16,
                    14,
                    12,
                    10,
                ]
            }
        },
        color: {
            description: "Color of typography",
            type: {
                name: 'enum',
                required: false
            },
            defaultValue: 'base',
            table: {
                defaultValue: {
                    summary: 'base',
                },
            },
            control: {
                name: 'select',
            }
        }
    }
};

export default config as Meta;

const Template: Story<Props> = args => <AppTypography {...args} />;

export const Typography = Template.bind({});
Typography.args = {
    children: "Typography"
};
