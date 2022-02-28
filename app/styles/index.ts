export const colors = {
    background: '#fff',
    base: '#ccc',
    light: '#fff',
    dark: '#464646',
    brand: '#347519',
    error: '#F34247',
    divider: '#D3D3D3',
    disabled: '#8fad82',
    input: '#555',
    toggleOff: '#C1C1C1',
    toggleOn: '#545A4F',
    selectedSlider: '#FF9C00',
    separator: '#E9E9E9',
};

export const colorVariants = {
    primary: colors.brand,
    secondary: colors.dark,
    success: '#38B471',
    warning: '#ffc107',
    danger: colors.error,
    link: colors.brand,
};

export const headerBackground = colors.background;

export const pageContainer = {
    flex: 1,
    backgroundColor: colors.background,
};

export const rowContainer = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
};

export const popupContainer = {
    backgroundColor: colors.background,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
};

export const backgroundImage = {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
};

export const activityIndicator = {
    marginTop: 80,
};

export const windowSpacing = 15;

export const borderRadius = {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 9,
    xl: 12,
    xxl: 15,
    xxxl: 20
};

export const inputSize = {
    sm: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        height: 30,
        fontSize: 12,
    },
    md: {
        paddingHorizontal: 6,
        paddingVertical: 12,
        height: 34,
        fontSize: 14,
    },
    lg: {
        paddingHorizontal: 6,
        paddingVertical: 12,
        height: 46,
        fontSize: 18,
    },
};

export const inputContainerSize = {
    sm: {
        padding: 5,
        height: 30,
        borderRadius: borderRadius.sm,
    },
    md: {
        padding: 8,
        height: 34,
        borderRadius: borderRadius.md,
    },
    lg: {
        padding: 10,
        height: 46,
        borderRadius: borderRadius.md,
    },
};

export const padding = {
    none: {
        padding: 0,
    },
    leftNone: {
        paddingLeft: 0,
    },
    rightNone: {
        paddingRight: 0,
    },
    topNone: {
        paddingTop: 0,
    },
    bottomNone: {
        paddingBottom: 0,
    },
};

export const width = {
    w25: '25%',
    w50: '50%',
    w75: '75%',
    w100: '100%',
};
