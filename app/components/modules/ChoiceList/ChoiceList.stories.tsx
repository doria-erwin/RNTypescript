import React from 'react';
import type { Props } from './ChoiceListContainer';
import AppChoiceList from './ChoiceListContainer';
import { Meta, Story } from '@storybook/react';
import { ChoiceData, ChoiceValue } from '~/types';
import { ChoiceType, ChoiceVariant, Color, FontWeight } from '~/enums';

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
                options: ChoiceType
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
            defaultValue: Color.base,
            table: {
                defaultValue: {
                    summary: Color.base,
                },
            },
            control: {
                name: 'select',
                option: Color
            }
        },
        titleWeight: {
            description: "Font weight of typography",
            type: {
                name: 'enum',
                required: false
            },
            defaultValue: FontWeight.regular,
            table: {
                defaultValue: {
                    summary: FontWeight.regular,
                },
            },
            control: {
                name: 'select',
                option: FontWeight
            }
        },
        variant: {
            description: "Choice variant",
            type: {
                name: 'enum',
                required: false
            },
            defaultValue: ChoiceVariant.secondary,
            table: {
                defaultValue: {
                    summary: ChoiceVariant.secondary
                },
            },
            control: {
                name: 'select',
                options: ChoiceVariant
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
