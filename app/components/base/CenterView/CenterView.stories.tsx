import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '.';
import Typography from '~/components/base/Typography';

storiesOf('CenterView', module).add('children', () => (
    <CenterView>
        <Typography>Center View</Typography>
    </CenterView>
));
