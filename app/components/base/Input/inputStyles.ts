import { StyleSheet } from 'react-native';
import { colors, width } from '~/styles';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.base,
        borderWidth: 1,
    },
    input: {
        color: colors.input,
        width: width.w100,
    },
    icon: {
        height: 20,
    },
});

export default styles;
