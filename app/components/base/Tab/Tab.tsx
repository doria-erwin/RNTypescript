import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { colors } from '~/styles';
import Button from '../Button';
import styles from './tabStyles';

type Props = {
    children: ReactNode;
    onChange: (index: number) => void;
    titles: Array<string>;
    active: number;
    containerStyle?: Object;
    tabStyle?: Object;
    buttonStyle?: Object;
};

const Tab: React.FC<Props> = ({ children, onChange, titles, active, containerStyle, tabStyle, buttonStyle }) => {

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.tabs, tabStyle]}>
                {
                    titles.map((tab, index) => <Button
                        style={[styles.tab, buttonStyle]}
                        variant={active === index ? 'secondary' : 'link'}
                        fontColor={active === index ? colors.light : colors.dark}
                        fontSize={10}
                        label={tab}
                        key={index}
                        onPress={() => onChange(index)} />)
                }
            </View>
            {children}
        </View>
    );
}

export default Tab;
