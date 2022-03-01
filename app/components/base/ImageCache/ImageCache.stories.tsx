import React from 'react';
import type { Props } from './ImageCache';
import AppImageCache from './ImageCache';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Base',
    component: AppImageCache,
    argTypes: {
        isStoryBook: {
            description: 'This is set to true when using storybook to prevent error',
            defaultValue: false,
            type: {
                name: 'boolean', required: false,
            },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
        uri: {
            description: 'Image uri',
            defaultValue: 'https://picsum.photos/200',
            type: {
                name: 'string', required: true,
            },
            control: {
                type: 'text',
            },
            table: {
                defaultValue: {
                    summary: 'https://picsum.photos/200',
                },
            },
        },
        style: {
            description: 'Image style',
            defaultValue: {},
            type: {
                name: 'object', required: false,
            },
            table: {
                defaultValue: {
                    summary: {},
                },
            },
        }
    },
};

export default config as Meta;

const Template: Story<Props> = args => <AppImageCache {...args} />;

export const ImageCache = Template.bind({});
ImageCache.args = {
    isStoryBook: true,
    style: {
        height: 100,
        width: 100
    }
};

ImageCache.storyName = 'ImageCache';