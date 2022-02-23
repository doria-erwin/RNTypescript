/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, ReactNode } from 'react';
import ChoiceList from './ChoiceList';
import type {
    Choice as Chc,
    ChoiceValue,
    ChoiceData,
    ChoiceVariant,
    Color,
    FontWeight,
} from '~/types';

export type Props = {
    data: Array<ChoiceData>;
    onChange: (value: Array<ChoiceValue> | ChoiceValue) => void;
    type?: Chc;
    value: Array<ChoiceValue> | ChoiceValue;
    variant?: ChoiceVariant;
    leftTitleComponent?: ReactNode;
    rightTitleComponent?: ReactNode;
    titleColor?: Color;
    titleWeight?: FontWeight;
};

const ChoiceListContainer: React.FC<Props> = ({
    data,
    onChange,
    type = 'check',
    value,
    variant,
    leftTitleComponent,
    rightTitleComponent,
    titleColor,
    titleWeight,
}) => {
    const isRadio = type === 'radio';
    const [values, setValues] = useState<Array<ChoiceValue>>(
        typeof value === 'object' ? value : [value],
    );

    const onHandleChange = (value: ChoiceValue) => {
        setValues(values =>
            onHandleFilterValues(values, value).filter(
                value => value !== undefined || value === '',
            ),
        );
    };

    const onHandleFilterValues = (
        values: Array<ChoiceValue>,
        value: ChoiceValue,
    ) => {
        if (isRadio) {
            return [value];
        }

        const isIncluded = values.includes(value);

        if (isIncluded) {
            return values.filter(item => item !== value);
        }

        return [...values, value];
    };

    const onHandleResetValue = () => {
        if (isRadio && typeof value === 'object') {
            setValues([value[value.length - 1]]);
        }
    };

    useEffect(() => {
        onChange(isRadio ? values[0] : values);
    }, [values]);

    useEffect(() => {
        onHandleResetValue();
    }, [type]);

    return (
        <ChoiceList
            type={type}
            values={values}
            data={data}
            variant={variant}
            onChange={onHandleChange}
            titleColor={titleColor}
            titleWeight={titleWeight}
            leftTitleComponent={leftTitleComponent}
            rightTitleComponent={rightTitleComponent}
        />
    );
};

export default ChoiceListContainer;
