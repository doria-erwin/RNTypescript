import React from 'react';
import type { Props } from './Switch';
import AppSwitch from './Switch';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Base',
    component: AppSwitch,
    argTypes: {
        onChange: (value: number | string | boolean | undefined) => {},
        isOn: {
            description: "Determine if it's on or off",
            defaultValue: false,
            type: { name: 'boolean', required: true },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
        backGroundColorOff: {
            description: "Background color when it's off",
            type: {
                name: 'color',
                required: false
            },
            control: {
                type: 'color',
            }

        },
        backGroundColorOn: {
            description: "Background color when it's on",
            type: {
                name: 'color',
                required: false
            },
            control: {
                type: 'color',
            }

        },
    }
};

export default config as Meta;

const Template: Story<Props> = args => <AppSwitch {...args} />;

export const Switch = Template.bind({});
Switch.args = {
};
