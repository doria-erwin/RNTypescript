import React from 'react';
import { TouchableOpacity } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text, select, boolean } from '@storybook/addon-knobs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '.';
import styles from './inputStyles';
import { InputSize } from '~/enums';

const onChange = (text: string) => {
    console.log(text);
};

storiesOf('Input', module)
    .add('value', () => (
        <Input onChange={onChange} value={text('value', 'value')} />
    ))
    .add('defaultValue', () => (
        <Input
            onChange={onChange}
            defaultValue={text('defaultValue', 'default value')}
        />
    ))
    .add('size', () => (
        <Input
            onChange={onChange}
            defaultValue="Size"
            size={select('size', InputSize, InputSize.md)}
        />
    ))
    .add('isPassword', () => (
        <Input
            onChange={onChange}
            defaultValue="password"
            isPassword={boolean('isPassword', true)}
        />
    ))
    .add('leftIcon', () => (
        <Input
            onChange={onChange}
            defaultValue="Left Icon"
            leftIcon={
                <Icon
                    name="search"
                    size={20}
                    color="#222"
                    style={styles.icon}
                />
            }
        />
    ))
    .add('rightIcon', () => (
        <Input
            onChange={onChange}
            defaultValue="Right Icon"
            isPassword={true}
            rightIcon={
                <TouchableOpacity style={styles.icon}>
                    <Icon
                        name="eye-slash"
                        size={20}
                        color="#222"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            }
        />
    ))
    .add('placeHolder', () => (
        <Input
            onChange={onChange}
            placeHolder={text('placeHolder', 'placeHolder')}
        />
    ));
