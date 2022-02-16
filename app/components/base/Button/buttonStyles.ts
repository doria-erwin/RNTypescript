import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 3,
    },
    rounded: {
        borderRadius: 50,
    },
    loading: {
        position: 'absolute',
        left: 15,
    },
});

export default styles;
