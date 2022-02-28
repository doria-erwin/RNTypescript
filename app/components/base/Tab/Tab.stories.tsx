import React from 'react';
import type { Props } from './TabContainer';
import AppTab from './TabContainer';
import { Meta, Story } from '@storybook/react';
import Typography from '~/components/base/Typography';
import { TabItem } from '~/types';
import { View } from 'react-native';

const TabA: React.FC<any> = ({}) => {
    return <View>
        <Typography>Tab A</Typography>
    </View>
};

const TabB: React.FC<any> = ({}) => {
    return <View>
        <Typography>Tab B</Typography>
    </View>
};

const TabC: React.FC<any> = ({}) => {
    return <View>
        <Typography>Tab C</Typography>
    </View>
};

const tabs: Array<TabItem> = [
    {
        item: <TabA />,
        key: 'TabA',
        title: 'Tab A'
    },
    {
        item: <TabB />,
        key: 'TabB',
        title: 'Tab B'
    },
    {
        item: <TabC />,
        key: 'TabC',
        title: 'Tab C'
    }
];

const config = {
    title: 'base',
    component: AppTab,
    argTypes: {
        tabs: {
            description: "List of TabItem",
        }
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppTab {...args} />;

export const Tab = Template.bind({});
Tab.args = {
    tabs
};
