import React from 'react';
import { View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { colors } from '~/styles';
import styles from './switchStyles';

export type Props = {
    isOn: boolean;
    onChange: (value: string | number | boolean | undefined) => void;
    backGroundColorOff?: string;
    backGroundColorOn?: string;
};

const Switch: React.FC<Props> = ({
    isOn,
    onChange,
    backGroundColorOff = colors.toggleOff,
    backGroundColorOn = colors.toggleOn,
}) => {
    return (
        <View style={styles.container}>
            <ToggleSwitch
                isOn={isOn}
                onColor={backGroundColorOn}
                offColor={backGroundColorOff}
                size="medium"
                onToggle={onChange}
                trackOnStyle={styles.track}
                trackOffStyle={styles.track}
                thumbOnStyle={styles.thumb}
                thumbOffStyle={styles.thumb}
            />
        </View>
    );
};

export default Switch;
