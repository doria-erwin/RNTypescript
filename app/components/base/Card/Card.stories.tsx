import React from 'react';
import type { Props } from './Card';
import AppCard from './Card';
import { Meta, Story } from '@storybook/react';
import { Color } from '~/enums';
import Typography from '../Typography';

const config = {
    title: 'Card',
    component: AppCard,
    argTypes: {
        children: {
            description: 'Children of card',
            type: { name: 'object', required: false },
            control: {
                type: 'object',
            },
        },
        isBordered: {
            description: 'Bordered card',
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
        borderWidth: {
            description: 'Border width of avatar',
            defaultValue: 1,
            type: {
                name: 'number', required: false
            },
            table: {
                defaultValue: {
                    summary: 1,
                },
            },
            control: {
                type: 'number',
            },
        },
        borderColor: {
            description: 'Border color of avatar',
            defaultValue: Color.light,
            type: {
                name: 'enum', required: false
            },
            table: {
                defaultValue: {
                    summary: Color.light,
                },
            },
            control: {
                type: 'select',
                options: Color
            }
        },
        backgroundColor: {
            description: 'Background color of card',
            defaulValue: Color.base,
            type: {
                name: 'enum',
                required: false
            },
            table: {
                defaultValue: {
                    summary: Color.base,
                },
            },
            control: {
                type: 'select',
                options: Color
            }
        },
        borderRadius: {
            description: 'Border radius of card',
            defaultValue: 4,
            type: {
                name: 'enum',
                required: false
            },
            table: {
                defaultValue: {
                    summary: 4,
                },
            },
            control: {
                type: 'select',
                options: [4, 6, 9, 12]
            }
        }
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppCard {...args} />;

export const Card = Template.bind({});
Card.args = {
    children: <Typography color='light'>Card</Typography>
};
