import React from 'react';
import type { Props } from './Card';
import AppCard from './Card';
import { Meta, Story } from '@storybook/react';
import Typography from '../Typography';

const config = {
    title: 'Base',
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
            description: 'Border width of card',
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
            description: 'Border color of card',
            defaultValue: 'light',
            type: {
                name: 'enum', required: false
            },
            table: {
                defaultValue: {
                    summary: 'light',
                },
            },
            control: {
                type: 'select',
            }
        },
        backgroundColor: {
            description: 'Background color of card',
            defaulValue: 'base',
            type: {
                name: 'enum',
                required: false
            },
            table: {
                defaultValue: {
                    summary: 'base',
                },
            },
            control: {
                type: 'select',
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
