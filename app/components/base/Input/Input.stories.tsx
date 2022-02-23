import React from 'react';
import type { Props } from './Input';
import AppInput from './Input';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Base',
    component: AppInput,
    argTypes: {
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppInput {...args} />;

export const Input = Template.bind({});
Input.args = {
};
