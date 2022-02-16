import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import hoistNonReactStatic from 'hoist-non-react-statics';

const withScreenWrapper = <TProps extends {}>(
    WrappedComponent: React.FC<TProps>,
    statusBarColor: string = '#fff',
) => {
    const WithWrapper: React.FC<TProps> = (props: TProps) => (
        <SafeAreaView
            style={[styles.container, { backgroundColor: statusBarColor }]}
        >
            <WrappedComponent {...props} />
        </SafeAreaView>
    );

    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || 'Component';

    WithWrapper.displayName = `withScreenWrapper(${displayName})`;

    return hoistNonReactStatic(WithWrapper, WrappedComponent);
};

export default withScreenWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
