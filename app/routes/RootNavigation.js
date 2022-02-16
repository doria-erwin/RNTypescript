/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

export const navigationRef = React.useRef(null);

export function navigate(name, params) {
    navigationRef.current.navigate(name, params);
}

export function goBack() {
    return navigationRef.current.goBack();
}
