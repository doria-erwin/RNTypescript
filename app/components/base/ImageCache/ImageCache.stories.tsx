import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '~/components/base/CenterView';
import ImageCache from '.';
import { text } from '@storybook/addon-knobs';

// Todo add Stories
storiesOf('ImageCache', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('uri', () => (
        <ImageCache
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                height: 100,
                width: 100,
            }}
            uri={text(
                'uri',
                'https://i.picsum.photos/id/716/200/300.jpg?hmac=qbNS_afUKsp_nyvuAAcK8T7OxOtMoqJvLIeaK-jirsU',
            )}
        />
    ));
