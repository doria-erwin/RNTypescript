import React from 'react';
import { View } from 'react-native';
import Typography from '~/components/base/Typography/Typography';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
    return (
        <View>
            <Icon name="rocket" />
            <Typography>Hello world from react native</Typography>
        </View>
    );
}

export default App;
