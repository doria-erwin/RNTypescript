import React, { ReactNode } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import Typography from '~/components/base/Typography/Typography';
import type {
    ChoiceData,
    ChoiceValue,
    Choice as Chc,
    Variant,
    Color,
    FontWeight,
} from '~/types';
import Choice from '~/components/base/Choice';
import styles from './choiceListStyles';

type Props = {
    data: Array<ChoiceData>;
    onChange: (value: ChoiceValue) => void;
    type: Chc;
    values: Array<ChoiceValue>;
    variant?: Variant;
    leftTitleComponent?: ReactNode;
    rightTitleComponent?: ReactNode;
    titleColor?: Color;
    titleWeight?: FontWeight;
};

const ChoiceList: React.FC<Props> = ({
    type,
    data,
    onChange,
    values,
    variant = 'secondary',
    leftTitleComponent,
    rightTitleComponent,
    titleColor = 'dark',
    titleWeight,
}) => {
    const renderItem: ListRenderItem<ChoiceData> = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.titleContainer}>
                    {leftTitleComponent}
                    <Typography
                        size={14}
                        color={titleColor}
                        fontWeight={titleWeight}
                    >
                        {item.title}
                    </Typography>
                    {rightTitleComponent}
                </View>
                <Choice
                    onChange={onChange}
                    value={item.id}
                    checked={values.includes(item.id)}
                    type={type}
                    variant={variant}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default ChoiceList;
