import React, { useState, useEffect } from 'react';
import { TabItem } from '~/types';
import Tab from './Tab';

export type Props = {
    tabs: Array<TabItem>;
    onChange?: (key: string | undefined) => void;
    containerStyle?: Object;
    tabStyle?: Object;
    buttonStyle?: Object;
};

const TabContainer: React.FC<Props> = ({ tabs, onChange = () => {}, containerStyle, tabStyle, buttonStyle }) => {

    const [index, setIndex] = useState(0);
    const [item, setItem] = useState(tabs[0].item);
    const [titles, setTitles] = useState<Array<string>>([]);

    useEffect(() => {
        setItem(tabs[index].item);
    }, [index]);

    useEffect(() => {
        setTitles(tabs.map(tab => tab.title));
    }, [tabs]);

    const onHandleChange = (index: number) => {
        setIndex(index);
        onChange(tabs[index].key);
    };

    return (
        <Tab
            onChange={onHandleChange}
            titles={titles}
            active={index}
            containerStyle={containerStyle}
            tabStyle={tabStyle}
            buttonStyle={buttonStyle}>
            {item}
        </Tab>
    );
};

export default TabContainer;
