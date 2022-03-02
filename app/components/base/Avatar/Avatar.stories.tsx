import React from 'react';
import type { Props } from './Avatar';
import AppAvatar from './Avatar';
import { Meta, Story } from '@storybook/react';

const config = {
    title: 'Base',
    component: AppAvatar,
    argTypes: {
        isStoryBook: {
            description: 'This is set to true when using storybook to prevent error from ImageCache component',
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
            description: 'Avatar uri',
            defaultValue: 'https://picsum.photos/200',
            type: {
                name: 'string', required: false,
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
        size: {
            description: 'Avatar size',
            defaultValue: 40,
            type: {
                name: 'enum',
                required: false
            },
            table: {
                defaultValue: { summary: 40 },
            },
            control: {
                type: 'select',
                options: [
                    40,
                    60,
                    80,
                    90
                ],
            },
        },
        isCircle: {
            description: 'Avatar circle',
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
        isBordered: {
            description: 'Bordered avatar',
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
            defaultValue: 3,
            type: {
                name: 'number', required: false
            },
            table: {
                defaultValue: {
                    summary: 3,
                },
            },
            control: {
                type: 'number',
            },
        },
        borderColor: {
            description: 'Border color of avatar',
            defaultValue: 'base',
            type: {
                name: 'enum', required: false
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
        backgroundColor: {
            description: 'Background color of avatar',
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
        initials: {
            description: 'Name initials',
            defaulValue: undefined,
            type: {
                name: 'string',
                required: false
            },
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
            control: {
                type: 'text',
            }
        },
        borderRadius: {
            description: 'Border radius of avatar',
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

const Template: Story<Props> = args => <AppAvatar {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
    uri: 'https://picsum.photos/200',
    isStoryBook: true
};
