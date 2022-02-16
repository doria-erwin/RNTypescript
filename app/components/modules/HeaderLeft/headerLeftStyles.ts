import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: width * 0.75,
    },
    headerMainTitle: {
        // fontSize: fontSizes.large,
        // fontFamily: fontFamily.sourceSansSemiBold,
        marginLeft: 15,
    },
    headerTitle: {
        // fontSize: fontSizes.heading,
        // fontFamily: fontFamily.gothamMedium,
        marginLeft: 15,
        marginTop: 5,
    },
    headerButton: {
        paddingLeft: 15,
    },
});

export default styles;
