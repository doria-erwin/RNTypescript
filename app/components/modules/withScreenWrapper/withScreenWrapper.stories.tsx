import React, { FC } from 'react';
import screenWrapper from './index';
import { Meta, Story, } from '@storybook/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Typography from '~/components/base/Typography';

const Comp: FC<any> = () => {
    return <Typography>withScreenWrapper</Typography>
};

const App: FC<any> = ({}) => {
    return <SafeAreaProvider>
        {screenWrapper(Comp)}
    </SafeAreaProvider>
};

const config = {
    title: 'Hooks',
    component: App,
    argTypes: {
        WrappedComponent: {
            description: "This component will wrapped into SafeAreaView",
        },
        statusBarColor: {
            description: "Status bar color",
            type: {
                name: 'color',
                required: false
            },
            table: {
                defaultValue: {
                    summary: '#fff'
                }
            },
            control: {
                type: 'color'
            }
        }
    }
};

export default config as Meta;

const Template: Story<any> = args => <App {...args} />;

export const withScreenWrapper = Template.bind({});
withScreenWrapper.args = {
};
withScreenWrapper.storyName = 'withScreenWrapper';
