import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: '100%',
        paddingVertical: 10,
        paddingRight: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        flex: 1,
        backgroundColor: colors.separator,
        height: 1,
    },
});

export default styles;
