import React from 'react';
import type { Props } from './ChoiceListContainer';
import AppChoiceList from './ChoiceListContainer';
import { Meta, Story } from '@storybook/react';
import { ChoiceData, ChoiceValue } from '~/types';

const data: Array<ChoiceData> = [
    {
        id: 1,
        title: 'Title 1',
        value: 'value 1',
    },
    {
        id: 2,
        title: 'Title 2',
        value: 'value 2',
    },
];

const value: Array<ChoiceValue> | ChoiceValue = [];

const config = {
    title: 'Modules',
    component: AppChoiceList,
    argTypes: {
        data: {
            description: "List of data to render",
        },
        values: {
            description: "Selected values",
        },
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
        onChange: {
            description: "Function to return selected values on the list"
        },
        leftTitleComponent: {
            description: "Component to render on the left of the title"
        },
        rightTitleComponent: {
            description: "Component to render on the right of the title"
        },
        titleColor: {
            description: "Title color",
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
        },
        titleWeight: {
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
        variant: {
            description: "Choice variant",
            type: {
                name: 'enum',
                required: false
            },
            defaultValue: 'secondary',
            table: {
                defaultValue: {
                    summary: 'secondary'
                },
            },
            control: {
                name: 'select',
            }
        }
    }
};

export default config as Meta;

const Template: Story<Props> = args => <AppChoiceList {...args} />;

export const Choicelist = Template.bind({});
Choicelist.args = {
    data,
    value
};
