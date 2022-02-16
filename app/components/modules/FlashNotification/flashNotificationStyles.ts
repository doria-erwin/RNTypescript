import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '~/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    notification: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,

        width: width * 0.9,
        height: 57,
        borderRadius: 10,
        flexDirection: 'row',
        borderLeftWidth: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    moveRight: { alignSelf: 'flex-end' },
    backgrounderror: {
        backgroundColor: '#fcc0c0',
        borderLeftColor: colors.error,
    },
    backgroundsuccess: {
        backgroundColor: '#D4F8E6',
        borderLeftColor: colors.brand,
    },
});

export default styles;
