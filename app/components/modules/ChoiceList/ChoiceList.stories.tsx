import React, { ReactNode, useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '~/components/base/CenterView';
import ChoiceList from '.';
import {
    ChoiceData,
    ChoiceValue,
    Choice as Chc,
    ChoiceVariant as CV,
    Color as ColorType,
} from '~/types';
import { select } from '@storybook/addon-knobs';
import { ChoiceType, ChoiceVariant, Color, FontWeight } from '~/enums';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
    data: Array<ChoiceData>;
    type?: Chc;
    value: Array<ChoiceValue> | ChoiceValue;
    leftTitleComponent?: ReactNode;
    rightTitleComponent?: ReactNode;
    variant?: CV;
    titleColor?: ColorType;
    titleWeight?: FontWeight;
};

const Choices: React.FC<Props> = ({
    data,
    type,
    value,
    leftTitleComponent,
    rightTitleComponent,
    variant,
    titleColor,
    titleWeight,
}) => {
    const [values, setValues] = useState<Array<ChoiceValue> | ChoiceValue>(
        value,
    );

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const onHandleChange = (values: Array<ChoiceValue> | ChoiceValue) => {
        console.log(type, ':', values);
        setValues(values);
    };

    return (
        <ChoiceList
            type={type}
            value={values}
            data={data}
            onChange={onHandleChange}
            variant={variant}
            leftTitleComponent={leftTitleComponent}
            rightTitleComponent={rightTitleComponent}
            titleColor={titleColor}
            titleWeight={titleWeight}
        />
    );
};

const data: Array<ChoiceData> = [
    {
        id: 1,
        title: 'Title 1',
        value: 'value 1',
    },
    {
        id: 2,
        title: 'Title 2',
        value: 'value 2',
    },
];

storiesOf('ChoiceList', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('data', () => <Choices data={data} type="radio" value={1} />, {
        notes: `
        #### data is required.

        #### Example:

        #### data = [

        #### {

            #### id: 1,

            #### title: 'Title 1',

            #### value: 'value 1'

            #### },

            #### {

                #### id: 2,

                #### title: 'Title 2',

                #### value: 'value 2'

                #### }

                #### ]
        `,
    })
    .add(
        'type',
        () => (
            <Choices
                data={data}
                type={select('type', ChoiceType, ChoiceType.check)}
                value={[1]}
            />
        ),
        {
            notes: `
        #### type is a string and it's optional

        #### (check | radio)

        #### default value = 'check'
        `,
        },
    )
    .add(
        'onChange',
        () => (
            <Choices
                data={data}
                type={select('type', ChoiceType, ChoiceType.check)}
                value={1}
            />
        ),
        {
            notes: `
        #### onChange is a function that's return an Array<string | number> or a string | number

        #### You can see the value(s) on console when selecting an item on the list (Storybook only)
        `,
        },
    )
    .add(
        'value',
        () => (
            <Choices
                data={data}
                type={select('type', ChoiceType, ChoiceType.check)}
                value={0}
            />
        ),
        {
            notes: `
        #### value is the default value of the list, it can be an Array<string | number> or a string | number
        `,
        },
    )
    .add('leftTitleComponent', () => (
        <Choices
            data={data}
            value={0}
            type={select('type', ChoiceType, ChoiceType.check)}
            leftTitleComponent={
                <Icon
                    name="star"
                    size={20}
                    color="yellow"
                    style={{
                        marginRight: 10,
                    }}
                />
            }
        />
    ))
    .add('rightTitleComponent', () => (
        <Choices
            data={data}
            value={0}
            type={select('type', ChoiceType, ChoiceType.check)}
            rightTitleComponent={
                <Icon
                    name="star"
                    size={20}
                    color="yellow"
                    style={{
                        marginLeft: 10,
                    }}
                />
            }
        />
    ))
    .add('variant', () => (
        <Choices
            data={data}
            value={0}
            type={select('type', ChoiceType, ChoiceType.check)}
            variant={select('variant', ChoiceVariant, ChoiceVariant.secondary)}
        />
    ))
    .add('titleColor', () => (
        <Choices
            data={data}
            value={0}
            type={select('type', ChoiceType, ChoiceType.check)}
            titleColor={select('titleColor', Color, Color.dark)}
        />
    ))
    .add('titleWeight', () => (
        <Choices
            data={data}
            value={0}
            type={select('type', ChoiceType, ChoiceType.check)}
            titleWeight={select('fontWeight', FontWeight, FontWeight.regular)}
        />
    ));
