import React from 'react';
import type { Props } from './BottomSheet';
import AppBottomSheet from './BottomSheet';
import { Meta, Story } from '@storybook/react';
import Typography from '../Typography';

const config = {
    title: 'Base',
    component: AppBottomSheet,
    argTypes: {
        refSheet: {
            description: "This is where you can control the sheet by passing the ref.<br/><code>ref.current.open()</code> and <code>ref.current.close()</code>"
        },
        hasSubmit: {
            description: 'Showing submit button',
            type: {
                name: 'boolean', required: false,
            },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
        hasCancel: {
            description: 'Showing cancel button',
            type: {
                name: 'boolean', required: false,
            },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
        onClose: {
            description: 'Callback function when sheet is closed',
        }
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppBottomSheet {...args} />;

export const BottomSheet = Template.bind({});
BottomSheet.args = {
    children: <Typography>Bottom Sheet</Typography>
};
BottomSheet.storyName = 'BottomSheet';
