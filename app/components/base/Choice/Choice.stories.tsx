import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '~/components/base/CenterView';
import type { Choice as Chc } from '~/types';
import { boolean, select } from '@storybook/addon-knobs';
import { ChoiceVariant, ChoiceType } from '~/enums';
import Choice from '.';

type Props = {
    isChecked?: boolean;
    variant?: ChoiceVariant;
    type?: Chc;
};

const Check: React.FC<Props> = ({ isChecked = false, variant, type }) => {
    const [checked, setChecked] = useState(isChecked);

    const onChange = (value: any) => {
        console.log(value);
        setChecked(checked => !checked);
    };

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    return (
        <Choice
            onChange={onChange}
            checked={checked}
            variant={variant}
            type={type}
            value={1}
        />
    );
};

storiesOf('Choice', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('type', () => (
        <Check type={select('type', ChoiceType, ChoiceType.check)} />
    ))
    .add('checked', () => <Check isChecked={boolean('checked', true)} />)
    .add('variant', () => (
        <Check
            variant={select('variant', ChoiceVariant, ChoiceVariant.secondary)}
        />
    ));
