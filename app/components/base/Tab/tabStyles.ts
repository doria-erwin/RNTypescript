import { StyleSheet } from 'react-native';
import { borderRadius } from '~/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20
    },
    tab: {
        height: 30,
        borderRadius: borderRadius.xxxl,
        paddingHorizontal: 20
    }
});

export default styles;
